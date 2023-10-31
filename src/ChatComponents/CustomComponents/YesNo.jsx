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
    setchoosen("Yes, sure!");
    insertstep({ type: "user", value: "Yes, sure!" });
    if (object.type == "About us") {
      window.parent.postMessage({
        eventid:"redirect",
        url:"https://montymobile.com/"
      }, "*");   

      loopsteps(65);

    } else {
      loopsteps(2);
    }

}

  const handlenoclick = () => {
    insertstep({ type: "user", value: "No, thank you." });
    setchoosen("No, thank you.");
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
            <YesButton onClick={handleyesclick}>Yes, sure!</YesButton>
            <NoButton onClick={handlenoclick}>No, thank you.</NoButton>
          </YesNoButtons>
        </YesNoContainer>
      </BotMessageContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}
