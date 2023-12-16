import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    console.log(item, quantity);
    
    const newItem = {
      ...item,
      quantity,
    };

    setCart([...cart, newItem]);
  };

  const removeItem = (id) => {
    const itemsFilter = cart.filter((item) => item.id !== id);
    setCart(itemsFilter);
  };

  const clearCart = () => {
    setCart ([])
  }

  const handleTotal = () => {
    const total = cart.reduce( (acum, item) => acum + item.subTotal, 0 );
    setTotalCartItems(total);
}

const handleTotalQuantity = () => { 
    const total = cart.reduce( (acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
}

useEffect( () => { 
  handleTotal();
  handleTotalQuantity();
}, [cart] )

  const objectValue = {
    cart,
    totalCartItems,
    totalQuantity,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={objectValue}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
