import styled from "styled-components";
import { keyframes } from "styled-components";

export const UserMessageContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin: 7px 7px 7px 0;
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
export const Message = styled.div`
  animation: ${MessageIn} 0.3s ease forwards;
  transform-origin: bottom right;
  border-radius: 18px 4px 18px 18px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  display: inline-block;
  font-size: 14px;
  max-width: 190px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  padding: 12px;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  background: linear-gradient(to right, #f61b65, #f51027);
`;
