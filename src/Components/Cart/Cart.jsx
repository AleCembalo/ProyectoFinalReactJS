import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  Card,
  Text,
  CardBody,
  CardFooter,
  Box,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalQuantity, totalCart, removeItem, clearCart } =
    useContext(CartContext);

  if (totalQuantity == 0) {
    return (
      <Box marginTop={"100px"}>
        <Text fontSize="30px" color={"#8cacd9"}>
          No hay productos en el carrito
        </Text>
        <Link to="/">
          <Button bg="#8cacd9" color="#14253d">
            Salir
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <>
      <Box
        bgColor={"#0d192b"}
        color={"#8cacd9"}
        fontWeight="bold"
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Text fontSize="50px" py={10} color={"#8cacd9"}>
          CARRITO
        </Text>
        <Box boxSize="xs">
          {cart.map((item) => (
            <Card
              key={item.id}
              bgColor={"#0f344844"}
              color={"#8cacd9"}
              border={"2px"}
              marginBottom={10}
            >
              <CardBody>
                <Text fontWeight="bold">Nombre: {item.name}</Text>
                <Text fontWeight="bold">Precio unitario: {item.price}</Text>
                <Text fontWeight="bold">Cantidad: {item.quantity}</Text>
                <Text fontWeight="bold">SubTotal: {item.subTotal}</Text>
              </CardBody>
              <CardFooter
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button bg="#8cacd9" onClick={() => removeItem(item.id)}>
                  <DeleteIcon />
                </Button>
              </CardFooter>
            </Card>
          ))}
          <Text>TOTAL: {totalCart}</Text>
          <Button
            ml="10px"
            bg="#8cacd9"
            color="#14253d"
            onClick={() => clearCart()}
          >
            Vaciar Carrito
          </Button>
          <Link to="/order">
            <Button ml="10px" bg="#8cacd9" color="#14253d">
              Terminar Compra
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
