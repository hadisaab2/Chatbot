import React from "react";
import { BodyContainer } from "../styles";
import Bot from "../../ChatComponents/Bot/Bot";
import UserMessage from "../../ChatComponents/User/UserMessage";
export default function Body({ components, storagesteps,messagesEndRef }) {
  return (
    <BodyContainer id="chatbotbody" style={{scrollBehavior:"smooth"}}>
      {storagesteps.length != 0 &&
        storagesteps.map((step) =>
          step.type == "user" ? (
            <UserMessage message={step.value} />
          ) : (
            <Bot message={step.value} />
          )
        )}
      {components}
    </BodyContainer>
  );
}
