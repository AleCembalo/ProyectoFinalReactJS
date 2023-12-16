import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";


export const Cart = () => {

  const { cart, addItem, removeItem, clearCart,} = useContext (CartContext);

  return 
}