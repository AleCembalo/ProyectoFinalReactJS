import { Text } from "@chakra-ui/react";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));

    getDocs(myProducts)
      .then((resp) => {
        const productList = resp.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };
          return product;
        });
        setProducts(productList);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Text style={{ color: "#8cacd9" }} fontSize='40px' padding={100}> Cargando productos... </Text>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
