import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Config/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      }
    });
  };

  useEffect(() => {
    setIsLoading(false);
    getProductById(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 style={{ color: "#8cacd9", marginTop: "50px" }}>
          {" "}
          Cargando producto...{" "}
        </h2>
      ) : (
        <div className="d-flex justify-content-center">
          <ItemDetail {...product} />
        </div>
      )}
    </>
  );
};
