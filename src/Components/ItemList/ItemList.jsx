import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
