import styled from "styled-components";
import { keyframes } from "styled-components";

export const PopUp = keyframes`
  0%{
    transform: scale(0);
    opacity: 0
  }
  100%{
    transform: scale(1);
    opacity: 1
  }

`;
export const CategoriesContainer = styled.div`
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  background: transparent;
  border-radius: 5px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 2%;
`;
export const CategoryImage = styled.img`
  color:#21292ebe;
  margin-bottom:5px;
  width:30px;
  height:30px;
`;

export const CategoryContainer = styled.div`
  background-color: red;
  width: 29%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
  border-radius: 10px;

  animation: ${PopUp} 0.5s;
  margin-top: 10px;
  &:hover {
    background: rgb(226, 226, 226);
  }
  &:hover ${CategoryImage} {
    color: #ffffff;
    margin-bottom: 5px;
  }
`;

export const CategoryTitle = styled.span`
  color:#21292ebe;
  font-size: 11px;
    font-weight: 500;
`;

