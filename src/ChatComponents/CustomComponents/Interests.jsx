import React, { useState ,useEffect} from "react";
import {
  InterestsContainer,
  InterestsList,
  Interest,
  InterestBtn,
} from "./styles";
import UserMessage from "../User/UserMessage";
import { getchoice, insertdata, insertstep } from "../../utils.js/localstorageutility";
import Bot from "../Bot/Bot";
export default function Interests({ object, loopsteps, finishtrigger}) {
  const [choosen, setchoosen] = useState(null);
  useEffect(() => {
    insertstep({ type: "bot", value: "Please select your interest" });

  }, []);
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
    return (
      <>
      {object.interestmsg &&<Bot message={"Please select your interest. "} />}
      {
        !choosen?(<InterestsContainer>
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
        </InterestsContainer>)
        :(<UserMessage message={choosen} />)
      }
      
      </>
    );

}
