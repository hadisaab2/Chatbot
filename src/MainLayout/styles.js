import styled from "styled-components";
import { keyframes } from "styled-components";

export const ChatbotIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1.0);
        opacity: 1;
    }
`;
export const ChatbotButton = styled.div`
  width: 3.6em;
  filter: drop-shadow(0px 1px 6px gray);
  height: 3.6em;
  border-radius: 1.8em;
  align-items: center;
  position: absolute;
  animation: ${ChatbotIn} ease-in-out 0.3s;
  bottom: 20px;
  right: 20px;
  display: ${(props) => (props.toggle ? "none" : "block")};
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const ChatbotImage = styled.img`
  width: 100%;
  height: 100%;
`;

const chatbotheight = (props) => {
  if (props.toggle) {
    if (props.mobile == "notMobile") {
      return "438px";
    } else {
      return "90%";
    }
  } else {
    return "0px";
  }
};
const chatbotwidth = (props) => {
  if (props.toggle) {
    if (props.mobile == "notMobile") {
      return "345px";
    } else {
      return "90%";
    }
  } else {
    return "0px";
  }
};
export const Chatbot = styled.div`
  background-color: transparent;
  height: ${(props) => chatbotheight(props)};
  width: ${(props) => chatbotwidth(props)};
  bottom: 20px;
  right: 20px;
  position: absolute;
  transform-origin: bottom right;
  margin-top: 20px;
  animation: ${ChatbotIn} ease-in-out 0.2s;
  transition: all 1s ease-out;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  z-index: 300;
  
`;

export const BodyContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 6px;
  background: linear-gradient(#f3f3f3 2%, #f5f5f5 62%);
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  margin-top: 5px;
  &::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 22px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 7px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  flex: 1;
  /* transition: all 1s  ease; */

`;

//  Header Styling
export const HeaderContainer = styled.div`
  background: linear-gradient(#ededed 2%, #e7e6e6 62%);
  /* height: 13%; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  flex: 0.2;
`;
export const HeaderLayout = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ExitContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
export const LogoPop = keyframes`
    0% {
      transform: scale(0) rotate(360deg);
    }
    60% {
      transform: scale(0.8) rotate(-10deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
`;

export const Logo = styled.div`
  height: 44px;
  width: 44px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  animation: ${LogoPop} 3s;
`;

export const LogoImage = styled.img`
  width: 90%;
  height: 90%;
`;

export const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
    }
`;

export const Title = styled.span`
  color: #21292e;
  font-weight: bold;
  font-size: 17px;
  margin-left: 4%;
  font-family: sans-serif;
  animation: ${fadeInRight} 2s ease-in-out;
`;

export const FooterContainer = styled.div`
  background-color: #f5f5f5;

  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;
  position: relative;
  flex: 0.22;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  border: 0;
  border-radius: 0;
  border-top: 1px solid #eee;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  opacity: 0.8;
  outline: none;
  padding: 16px 52px 16px 20px;
  border-radius: 27px !important;
  background-color: white;
  color: black;
  height: 70%;
  width: 95%;
  display: flex;
`;

export const SendMessage = styled.div`
  border: 0;
  box-shadow: none;
  cursor: ${props=>props.disabled && "pointer"};
  background: linear-gradient(to right, #f61b65, #f51027);
  opacity: 1;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  z-index: 999;
`;

export const MdSend = {
  color: "white",
  marginTop:"2px",
  marginRight:"2px"

};

export const SwingRight = keyframes`
    0% {
      transform: rotateY(70deg);
       transform-origin: right;
       opacity: 0;
    }
    100% {
      transform: rotateY(0);
      transform-origin: right;
      opacity: 1;
    }
`;
export const SpeechBubble = styled.div`
  position: absolute;
  background: rgb(240, 240, 240);
  box-shadow: -1px 2px 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.8em;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: black;
  bottom: 25px;
  right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  font-size: 14px;
  animation: ${SwingRight} 1.5s;
  &::after {
    content: "";
    position: absolute;
    right: 5px;
    width: 0;
    height: 0;
    border: 0.7em solid transparent;
    border-left-color: rgb(238, 238, 238);
    border-right: 0;
    margin-right: -1em;
    z-index: 200;
  }

`;
export const Speech = styled.span``;
