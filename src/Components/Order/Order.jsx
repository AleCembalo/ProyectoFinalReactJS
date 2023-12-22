import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const Order = () => {
  const { addOrderDB } = useContext(CartContext);
  
  const { cart, totalCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");


  const handleForm = (e) => {
    e.preventDefault();

    addOrderDB(cart, { name, lastName, phone, email }, totalCart);
    
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setConfirmEmail("");
  };

  const handleConfirmEmail = (e) => {

  }

  return (

  <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={50} onSubmit={handleForm}>
    <FormHelperText color={"#8cacd9"} fontSize={25} paddingBottom={10}>Envía el formulario de compra.</FormHelperText>
    <FormLabel fontSize={20} color={"#8cacd9"}>Nombre</FormLabel>
      <Input color={"#8cacd9"} width='50%' type= 'text' value={name} onChange={(e) => setName(e.target.value)}/>
    <FormLabel fontSize={20} color={"#8cacd9"}>Apellido</FormLabel>
      <Input color={"#8cacd9"} width='50%' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
    <FormLabel fontSize={20} color={"#8cacd9"}>Teléfono</FormLabel>
      <Input color={"#8cacd9"} width='50%' type='number'value={phone} onChange={(e) => setPhone(e.target.value)} />
    <FormLabel fontSize={20} color={"#8cacd9"}>Email</FormLabel>
      <Input color={"#8cacd9"} width='50%' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    <FormLabel fontSize={20} color={"#8cacd9"}>Email</FormLabel>
      <Input color={"#8cacd9"} width='50%' type='email' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
    <Button bg="#8cacd9" color="#14253d" type="submit">Enviar</Button>
  </FormControl>
  );
};