import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import styles from "./itemDetail.module.css";

export const ItemDetail = ({ name, category, price, pictureUrl, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <div className={styles.cardDetail}>
      <div>
        <img className={styles.pictureUrlDetail} src={pictureUrl} alt="" />
      </div>
      <div className={styles.textCard}>
        <p>
          {" "}
          <strong>Nombre: </strong>
          {name}{" "}
        </p>
        <p>
          {" "}
          <strong>Precio: </strong>
          {price}${" "}
        </p>
        <p>
          {" "}
          <strong>Tipo: </strong>
          {category}{" "}
        </p>
        <strong>QUEDAN {stock}! </strong>
      </div>
      <div>
        {quantityAdded > 0 ? (
          <button className={styles.ButtonsItemDetail}>Terminar</button>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};
