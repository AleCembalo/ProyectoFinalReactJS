import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

export const Order = () => {
  const { cart, totalCart, addOrderDB, orderId, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "Error",
        iconColor: '#3085d6',
        color: '#3085d6',
        background:'#2f415b',
        text: "Por favor ingresa el mismo email",
      });
      return;
    } else if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        iconColor: '#3085d6',
        color: '#3085d6',
        background:'#2f415b',
        title: "Error",
        text: "Tu carrito esta vacio",
      });
      return;
    } else if (lastName.length === 0 || name.length === 0 || phone.length === 0 || confirmEmail.length === 0 || email.length === 0) {
      Swal.fire({
        icon: "error",
        iconColor: '#3085d6',
        color: '#3085d6',
        background:'#2f415b',
        title: "Error",
        text: "Debes completar todos los campos!",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addOrderDB(
        cart, { name, lastName, phone, email }, totalCart
      );

      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setConfirmEmail("");
      clearCart();


      Swal.fire({
        icon: "success",
        iconColor: '#3085d6',
        color: '#3085d6',
        background:'#2f415b',
        title: "Su orden fue enviada con éxito!",
        text: `N° de Orden: ${orderId}`,
      })
    } catch (error) {
      console.error("Error en la orden:", error)
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <FormControl
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingTop={50}
      onSubmit={handleForm}
    >
      <FormHelperText color={"#8cacd9"} fontSize={25} paddingBottom={10}>
        Envía el formulario de compra.
      </FormHelperText>
      <FormLabel fontSize={20} color={"#8cacd9"}>
        Nombre
      </FormLabel>
      <Input
        color={"#8cacd9"}
        width="50%"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormLabel fontSize={20} color={"#8cacd9"}>
        Apellido
      </FormLabel>
      <Input
        color={"#8cacd9"}
        width="50%"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <FormLabel fontSize={20} color={"#8cacd9"}>
        Teléfono
      </FormLabel>
      <Input
        color={"#8cacd9"}
        width="50%"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <FormLabel fontSize={20} color={"#8cacd9"}>
        Email
      </FormLabel>
      <Input
        color={"#8cacd9"}
        width="50%"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel fontSize={20} color={"#8cacd9"}>
        confirma Email
      </FormLabel>
      <Input
        color={"#8cacd9"}
        width="50%"
        type="email"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
      <Button onClick={handleForm} bg="#8cacd9" color="#14253d" type="submit">
      {isSubmitting ? "Enviando..." : "Enviar orden"}
      </Button>
    </FormControl>
  );
};
