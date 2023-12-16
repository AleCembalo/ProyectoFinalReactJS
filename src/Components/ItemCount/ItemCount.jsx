import { useState } from "react";
import { Button } from "@chakra-ui/react";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
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
            <Button bg="#8cacd9" color="#14253d" onClick={increment}>
              +
            </Button>
            <h3>{quantity}</h3>
            <Button bg="#8cacd9" color="#14253d" onClick={decrement}>
              -
            </Button>
          </div>
          <Button bg="#8cacd9" color="#14253d" onClick={() => onAdd(quantity)}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
};
