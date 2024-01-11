import React from "react";
import { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { H1 } from "../../components/Title/styles.js";
import ContainerItens from "../../components/ContainerItens/index.js";
import {
  Container,
  Image,
  InputLabel,
  Input,
  Button
} from "./style.js";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
//import Avatar from "./assets/avatar.svg";


const hello = "Olá";

// SINTAXE JSX
const App = () => {
  //REACT HOOKS = FERRAMENTAS AUXILIARES

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();

// // para se comunicar com o back-end as funções precisão ser asicrona.
  const addNewUser = async () => {
    //desestruturei e peguei apenas o data e dei o nome de newUser.

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);
    navigate("/usuarios")
  };

  // userEffect não aceita o async, então é preciso criar uma função dentro do user effect que seja async.
  // useEffect(() => {
  //   const fetchUsers = async () => {
      
  //     const { data: newUsers } = await axios.get("http://localhost:3001/users");
  //     setUsers(newUsers);
      
  //   }; 
    
  //   fetchUsers();
  // }, []);

  //REACT HOOK => useEffect ( Efeito Colateral)
  // useEffect espera 2 parametros, uma função anonima e um array.

  // const deleteUser = async (userId) => {
    
  //   //deletando usuario no back-end
  //   await axios.delete(`http://localhost:3001/users/${userId}`)
  //   const newUsers = users.filter((user) => user.id !== userId);
  //   setUsers(newUsers);
  // };

  //ESTADOS EM REACK SÃO VARIAVEIS
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1 >{hello}</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite o seu nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Digite a sua idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
