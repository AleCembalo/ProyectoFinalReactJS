import { RiShoppingCartFill } from "react-icons/ri";

export const CartWidget = () => {
  return (
    <>
      <div className="d-flex">
        <RiShoppingCartFill color="#8cacd9" size={35} />
        <strong className="mx-2" style={{ color: "#8cacd9", fontSize: "24px" }}>
          0
        </strong>
      </div>
    </>
  );
};
