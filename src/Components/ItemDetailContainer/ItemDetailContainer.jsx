import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProductById(id)
      .then((response) => {
        setProduct(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 style={{ color: "#8cacd9", marginTop: "50px"}}> Cargando producto... </h2>
      ) : (
        <div className="d-flex justify-content-center">
          <ItemDetail {...product} />
        </div>
      )}
    </>
  );
};
