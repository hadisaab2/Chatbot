import React, { useState } from "react";
import {
  ChoicesContainer,
  Choice,
  ChoiceIconContainer,
  MontyChoice,
  ChoiceDetails,
} from "./styles";
import { choices } from "./data";
import { insertstep } from "../../utils.js/localstorageutility";
import UserMessage from "../User/UserMessage";
export default function Chatchoices({ loopsteps }) {
  const [choosen, setchoosen] = useState(null);
  const choiceclick = (choicevalue, trigger) => {
    insertstep({ type: "user", value: choicevalue });
    setchoosen(choicevalue);
    const jsonstoredData = JSON.parse(localStorage.getItem("data"));    
    const updatedObject={...jsonstoredData,choice:choicevalue}
    localStorage.setItem('data', JSON.stringify(updatedObject));
  
    loopsteps(trigger);
    setchoosen(choicevalue);
  }
  
  if (!choosen) {
    return (
      <ChoicesContainer>
        {choices.map(({ src, Icon, value, trigger }) => {
          return (
            <Choice
              onClick={() => {
                choiceclick(value, trigger);
              }}
            >
              <ChoiceIconContainer>
                {src && <MontyChoice src={src} />}
                {Icon && <Icon />}
              </ChoiceIconContainer>
              <ChoiceDetails>
                <span className="buttondetails">{value}</span>
              </ChoiceDetails>
            </Choice>
          );
        })}
      </ChoicesContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}
