import React, { useState } from "react";
import {
  InterestsContainer,
  InterestsList,
  Interest,
  InterestBtn,
} from "./styles";
import UserMessage from "../User/UserMessage";
import { getchoice, insertdata, insertstep } from "../../utils.js/localstorageutility";
export default function Interests({ object, loopsteps, finishtrigger}) {
  const [choosen, setchoosen] = useState(null);
  const optionclick = (option) => {
    setchoosen(option.value);
    insertstep({ type: "user", value: option.value });
    if(option.key){
      insertdata(option.key,option.value)
    }
    let choice=getchoice()
    if(choice=="Talk to an expert" && option.finishtrigger){
      loopsteps(option.finishtrigger);
    }else{
      loopsteps(option.trigger);
    }

  };
  if (!choosen) {
    return (
      <InterestsContainer>
        <InterestsList>
          {object.options.map((option) => {
            return (
              <Interest>
                <InterestBtn
                  onClick={() => {
                    optionclick(option);
                  }}
                >
                  {option.value}
                </InterestBtn>
              </Interest>
            );
          })}
        </InterestsList>
      </InterestsContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}
