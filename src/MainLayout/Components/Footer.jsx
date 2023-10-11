import React, { useState, useEffect } from "react";
import { FooterContainer, Input, SendMessage, MdSend } from "../styles";
import { BsSend } from "react-icons/bs";
import UserMessage from "../../ChatComponents/User/UserMessage";
import { insertdata, insertstep } from "../../utils.js/localstorageutility";

export default function Footer({
  setcomponents,
  setgetinput,
  stepobject,
  loopsteps,
  userinput,
  setuserinput,
}) {
  const [input, setinput] = useState("");
  const handlesend = () => {
    if(input!=""){
    setuserinput(false);
    setcomponents((oldArray) => [...oldArray, <UserMessage message={input} />]);
    insertstep({ type: "user", value: input });
    insertdata(stepobject.key, input);
    setinput("");
    if (stepobject.validation) {
      if (!stepobject.validation(input)) {
        loopsteps(stepobject.errortrigger);
        return;
      }
    }
    loopsteps(stepobject.trigger);
  }
  };

  const handleinput = (e)=>{
    let newValue = e.target.value;

    if(stepobject.key=="name"){
     newValue = newValue.replace(/[^a-zA-Z0-9]/g, '');
    }
    if(stepobject.key=="email"){
      newValue = newValue.replace(/[^a-zA-Z0-9_@]/g, '');
    }
    if (e.target.value.length < stepobject.limit) {
      setinput(newValue);
    }
  }

  return (
    <FooterContainer>
      <Input
        value={input}
        onChange={handleinput}
        placeholder="Enter a Message"
        disabled={userinput ? false : true}
      />
      <SendMessage
        disabled={userinput}
        onClick={() => userinput && handlesend()}
      >
        <BsSend style={MdSend} size={20} />
      </SendMessage>
    </FooterContainer>
  );
}
