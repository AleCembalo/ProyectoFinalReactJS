import { useState } from "react";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity === 0) {
      return setQuantity(0);
    }
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className={styles.CardItemCount}>
        <h2>Pack de semillas x 3</h2>
        <div className={styles.ButtonsItemCount}>
          <div className={styles.NumberItemCount}>
            <button className={styles.buttonItemCount} onClick={increment}>
              +
            </button>
            <h3>{quantity}</h3>
            <button className={styles.buttonItemCount} onClick={decrement}>
              -
            </button>
          </div>
          <button
            className={styles.buttonItemCount}
            onClick={() => onAdd(quantity)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};
