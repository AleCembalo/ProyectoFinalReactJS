import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
