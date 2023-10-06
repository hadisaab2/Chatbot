import styled from "styled-components";
import { keyframes } from "styled-components";

export const MessageConatiner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const BotMessage = styled.div`
  border-radius: 4px 18px 18px 18px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  color: #fff;
  display: inline-block;
  font-size: 14px;
  max-width: 15em;
  margin: 5px 0 1px 15px;
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
export const Message = styled.span``;
export const MessageButton = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const MessageIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1.0);
        opacity: 1;
    }
`;
export const BotDots = styled.div`
  animation: ${MessageIn} 0.3s ease forwards;
  transform-origin: top left;
  border-radius: 4px 18px 18px 18px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  color: #fff;
  display: inline-block;
  font-size: 14px;
  max-width: 60%;
  margin: 5px 0 1px 15px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  padding: 12px;
  background-color: white;
  text-align: left;
  color: black;
  font-family: sans-serif;
  display: flex;
`;

export const DotAnimation1 = keyframes`
      0% {
        opacity: 1;
      }
      65% {
        opacity: 1;
      }
      66% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
      }
`;
export const DotAnimation2 = keyframes`
      0% {
        opacity: 1;
      }
      65% {
        opacity: 1;
      }
      66% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
      }
`;

export const DotAnimation3 = keyframes`
      0% {
        opacity: 1;
      }
      65% {
        opacity: 1;
      }
      66% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
      }
`;

export const Dot1 = styled.div`
  animation: ${DotAnimation1} 1s linear infinite;
  background-color: #21292e;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
`;

export const Dot2 = styled.div`
  animation: ${DotAnimation2} 1s linear infinite;
  background-color: #21292e;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
  margin-left: 10%;
`;
export const Dot3 = styled.div`
  animation: ${DotAnimation3} 1s linear infinite;
  background-color: #21292e;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
  margin-left: 10%;
`;
