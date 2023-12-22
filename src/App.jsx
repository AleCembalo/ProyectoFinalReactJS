import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
  Order,
} from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};
