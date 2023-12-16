import styles from "./item.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Item = ({ id, name, pictureUrl, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles.pictureUrl} src={pictureUrl} alt={name} />
      <div className="card-body">
        <h4 className={styles.textCard}>{name}</h4>
        <p className={styles.textCard}>Precio: ${price}</p>
        <Link to={`/item/${id}`}>
          <Button bg='#8cacd9' color='#14253d'>
            Detalle
          </Button>
        </Link>
      </div>
    </div>
  );
};
