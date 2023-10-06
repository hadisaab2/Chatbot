import React from "react";
import { BodyContainer } from "../styles";
import Bot from "../../ChatComponents/Bot/Bot";
import UserMessage from "../../ChatComponents/User/UserMessage";
export default function Body({ components, storagesteps,messagesEndRef }) {
  return (
    <BodyContainer id="test" style={{scrollBehavior:"smooth"}}>
      {/* <div  id="test" style={{height:"auto",border:"1px solid black",transition:"all 0.2s ease-out"}}> */}
      {storagesteps.length != 0 &&
        storagesteps.map((step) =>
          step.type == "user" ? (
            <UserMessage message={step.value} />
          ) : (
            <Bot message={step.value} />
          )
        )}
      {components}
      {/* <div style={{height:"10%"}}></div> */}
      {/* </div> */}
    </BodyContainer>
  );
}
