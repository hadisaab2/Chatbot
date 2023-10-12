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
export const ChoicesContainer = styled.div`
  width: 100%;
  background: transparent;
  border-radius: 5px;
  flex-direction: column;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  animation: ${PopUp} 0.5s;
`;

export const Choice = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  padding-left: 7px;
  position: relative;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
`;

export const ChoiceIconContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid white;
`;
export const MontyChoice = styled.img`
  width: 20px;
  height: 20px;
`;

export const ChoiceDetails = styled.div`
  margin-left: 10px;
  span {
    font-size: 13px;
    color: rgb(0, 0, 0);
    font-weight: 500;
  }
`;

export const ChoiceDetailsSpan = styled.span`
  font-size: 13px;
  color: rgb(0, 0, 0);
  font-weight: 500;
`;

// Yes No

export const BotMessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const YesNoContainer = styled.div`
  border-radius: 4px 18px 18px 18px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  color: #fff;
  display: inline-block;
  font-size: 14px;
  max-width: 15em;
  margin: 2px 0 1px 15px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  padding: 12px;
  background-color: white;
  text-align: left;
  color: black;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

export const YesNoQuestion = styled.span`

`;
export const YesNoButtons = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 10px;
`;


export const OptionUp = keyframes`
0%{
  transform: scale(0);
  opacity: 0
}
100%{
  transform: scale(1);
  opacity: 1
}

`;
export const YesButton = styled.button`
  background:linear-gradient(to right,#F61B65,#F51027) ;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  color: #fff;
  display: inline-block;
  font-size: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  animation: ${OptionUp} 0.5s;
`;
export const NoButton = styled.button`
  border: 0;
  border-radius: 10px;
  background-color:transparent;
  border:0.1px solid #F61B65;
  color: #F61B65;
  display: inline-block;
  font-size: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  animation: ${OptionUp} 0.5s;
  margin-left: 5px;
`;




export const InterestsContainer = styled.div`
    width:100%;
    background: transparent;
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`;

export const InterestsList = styled.ul`
    display: block;
    list-style-type: disc;
    padding-inline-start: 40px;
    margin: 2px 0 4px 0;
    text-align: center;
    padding: 0 36px;
`;

export const Interest = styled.li`
    display: list-item;  
    cursor: pointer;
    display: inline-block;
    margin: 3px;
`;
export const InterestBtn = styled.button`
background:linear-gradient(to right,#F61B65,#F51027) ;
border: 0;
border-radius: 22px;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
color: #fff;
display: inline-block;
font-size: 14px;
padding: 12px;
cursor: pointer;
animation: ${OptionUp} 0.5s;
`;





export const LearnMoreContainer = styled.div`
  color: #fff;
  display: inline-block;
  font-size: 14px;
  max-width: 15em;
  margin: 0px 0 1px 15px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  padding-top: 5px;
  padding-left: 1px;
  text-align: left;
  color: black;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;
export const LearnMoreButton = styled.button`
background-color: white;
border-radius: 5px;
outline: none;
cursor: pointer;
border: none;
padding: 7px;

`;
