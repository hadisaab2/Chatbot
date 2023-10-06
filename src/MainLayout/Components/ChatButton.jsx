import React, { useState } from "react";
import { ChatbotButton, ChatbotImage, SpeechBubble, Speech } from "../styles";
import chatbotimage from "../../assets/chatbotimage.png";

export default function ChatButton({toggle,loopsteps,settoggle}) {
  const [showbubble, setshowbubble] = useState(false);
  const [startloop, setstartloop] = useState(false); //state for checking if loop started on first toggele to avoid loading loop on each toggle click
  const bubbleenter = () => {
    setshowbubble(true);
  };
  const bubbleleave = () => {
    setshowbubble(false);
  };
  const handletoggle = () => {
    if(!toggle){
      window.parent.postMessage("shows", "*");
    }
    settoggle(!toggle);
    setstartloop(true);
    let jsonstoredData = JSON.parse(localStorage.getItem("data"));
    let id=jsonstoredData.id    
    if (!startloop) {
      if (id) {
        loopsteps(id);
      } else {
        loopsteps(1);
      }
    }
  };
  return (
    <>
      {showbubble ? (
        <SpeechBubble>
          <Speech>
            Hi! I’m Huston and I’m <br />
            here to help you.
            
          </Speech>
        </SpeechBubble>
      ) : null}
      <ChatbotButton
        toggle={toggle}
        onClick={handletoggle}
        onMouseOver={bubbleenter}
        onMouseLeave={bubbleleave}
      >
        <ChatbotImage src={chatbotimage} />
      </ChatbotButton>
    </>
  );
}
