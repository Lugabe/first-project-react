import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { H1 } from "../../components/Title/styles.js";
import ContainerItens from "../../components/ContainerItens/index.js";
import {
  Container,
  Image,
  Button,
  User,
} from "./style.js";
import Arrow from "../../assets/arrow.svg";
import Avatar from "../../assets/avatar.svg";
import Trash from "../../assets/trash.svg";

const hello = "Usuários";

// SINTAXE JSX
const Users = () => {
  //REACT HOOKS = FERRAMENTAS AUXILIARES

  const [users, setUsers] = useState([]);

  const navigate = useNavigate()
  console.log(navigate)
// // para se comunicar com o back-end as funções precisão ser asicrona.


  // userEffect não aceita o async, então é preciso criar uma função dentro do user effect que seja async.
  useEffect(() => {
    const fetchUsers = async () => {
      
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
      
    }; 
    
    fetchUsers();
  }, []);

  //REACT HOOK => useEffect ( Efeito Colateral)
  // useEffect espera 2 parametros, uma função anonima e um array.

  const deleteUser = async (userId) => {
    
    //deletando usuario no back-end
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };


  function goBackPage() {
    return navigate("/")
  }


  //ESTADOS EM REACK SÃO VARIAVEIS
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur ={true} >
        <H1>{hello}</H1>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
        <img alt="Seta" src={Arrow} />
        Voltar</Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;
