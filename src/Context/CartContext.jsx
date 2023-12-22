import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const { id, name, price } = item;
    const index = cart.findIndex((product) => product.id === id);

    if (index !== -1) {
      const cartCopy = [...cart];
      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal =
        cartCopy[index].quantity * cartCopy[index].price;
      setCart(cartCopy);
    } else {
      const newItem = {
        id,
        name,
        price,
        quantity,
        subTotal: quantity * price,
      };
      setCart([...cart, newItem]);
    }
  };

  const addOrderDB = (cartProducts, userData, total) => {
    const newOrder = {
      buyer: userData,
      items: cartProducts,
      data: serverTimestamp(),
      total,
    };
    console.log(newOrder);
    addDoc(collection(db, "orders"), newOrder);
  };

  const removeItem = (id) => {
    const itemsFilter = cart.filter((item) => item.id !== id);
    setCart(itemsFilter);
    handleTotal;
  };

  const clearCart = () => {
    setCart([]);
    handleTotal;
  };

  const handleTotal = () => {
    const totalCart = cart.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCart(totalCart);
  };

  const handleTotalQuantity = () => {
    const totalQuantity = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cart]);

  const objectValue = {
    cart,
    totalCart,
    totalQuantity,
    addItem,
    removeItem,
    clearCart,
    addOrderDB,
  };

  return (
    <CartContext.Provider value={objectValue}>{children}</CartContext.Provider>
  );
};
