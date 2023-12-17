import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <div className="d-flex">
          <RiShoppingCartFill color="#8cacd9" size={35} />
          <strong
            className="mx-2"
            style={{ color: "#8cacd9", fontSize: "24px" }}
          >
            {totalQuantity}
          </strong>
        </div>
      </Link>
    </>
  );
};
