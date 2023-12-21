import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import styles from "./itemDetail.module.css";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({
  id,
  name,
  category,
  price,
  pictureUrl,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
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
          <div className={styles.boxButtonItemDetail}>
            <Link to="/cart">
              <Button bg="#8cacd9" color="#14253d">
                Terminar <br /> Compra
              </Button>
            </Link>
            <Link to="/">
              <Button bg="#8cacd9" color="#14253d">
                Seguir <br /> Comprando
              </Button>
            </Link>
          </div>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};
