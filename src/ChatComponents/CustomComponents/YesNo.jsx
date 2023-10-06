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
      loopsteps(3);
    }
    setchoosen("Yes");
    insertstep({ type: "user", value: "Yes" });
  };

  const handlenoclick = () => {
    insertstep({ type: "user", value: "No" });
    setchoosen("No");
    if (object.type == "About us") {
      loopsteps(65);

    } else {
      loopsteps(64);
    }
  };
  if (!choosen) {
    return (
      <BotMessageContainer>
        {console.log(object.type)}
        <YesNoContainer>
          <YesNoQuestion>{object.type=="About us"?"Want to know more?":"Do you need help with anything else?"}</YesNoQuestion>
          <YesNoButtons>
            <YesButton onClick={handleyesclick}>Yes sure!</YesButton>
            <NoButton onClick={handlenoclick}>No Thanks</NoButton>
          </YesNoButtons>
        </YesNoContainer>
      </BotMessageContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}
