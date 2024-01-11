import styled from "styled-components";
import background from "../../assets/background2.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
  
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const Button = styled.button`
  display: flex;
  margin-top: 120px;
  border-radius: 14px;
  border: 1px solid #FFF;
  background: transparent;
  width: 342px;
  height: 74px;
  color: #fff;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-decoration: none;

  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 164.706% */
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: rotateY(180deg) ;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  outline: none;
  border: none;
  color: #fff;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
