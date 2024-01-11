import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  margin-top: 100px;
  border-radius: 14px;
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
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
  border: ${props => props.isBack ? '1px solid #FFFFFF' :  'none'};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: ${props => props.isBack? 'rotateY(180deg)': ''} ;
  }
`;