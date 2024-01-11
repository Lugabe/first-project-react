import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const InputLabel = styled.p`
  color: #eee;

  margin-top: 45px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-left: 15px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 342px;
  height: 58px;
  outline: none;
  border: none;
  padding-left: 25px;
  color: #fff;

  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
`;


