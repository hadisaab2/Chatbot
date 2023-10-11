import React, { useState } from "react";
import {
  BotMessageContainer,
  YesNoQuestion,
  YesNoButtons,
  YesButton,
  NoButton,
  YesNoContainer,
} from "./styles";
import UserMessage from "../User/UserMessage";
import { insertstep } from "../../utils.js/localstorageutility";
export default function YesNo({ loopsteps, object }) {
  const [choosen, setchoosen] = useState(null);

  const handleyesclick = () => {
    if (object.type == "About us") {
      loopsteps(65);

    } else {
      loopsteps(2);
    }
    setchoosen("Yes, sure!");
    insertstep({ type: "user", value: "Yes" });
  };

  const handlenoclick = () => {
    insertstep({ type: "user", value: "No" });
    setchoosen("No, thank you");
    if (object.type == "About us") {
      loopsteps(65);

    } else {
      loopsteps(64);
    }
  };
  if (!choosen) {
    return (
      <BotMessageContainer>
        <YesNoContainer>
          <YesNoQuestion>{object.type=="About us"?"Want to know more?":"Do you need help with anything else?"}</YesNoQuestion>
          <YesNoButtons>
            <YesButton onClick={handleyesclick}>Yes sure!</YesButton>
            <NoButton onClick={handlenoclick}>No, thankyou</NoButton>
          </YesNoButtons>
        </YesNoContainer>
      </BotMessageContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}
