import React, { useState, useEffect, useRef } from "react";
import { Chatbot } from "./styles";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { chatbotsteps } from "../steps";
import { findjson } from "../utils.js/Functions";
import ChatButton from "./Components/ChatButton";
import { getdata, insertstep } from "../utils.js/localstorageutility";
import BotMessage from "../ChatComponents/Bot/BotMessage";
// import { ChatbotContext } from "../Context/ChatbotContext";

export default function Index({ mobile }) {
  const [components, setcomponents] = useState([]);
  const [userinfo, setuserinfo] = useState({});
  const [userinput, setuserinput] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [stepobject, setstepobject] = useState({});
  const [finishtrigger, setfinishtrigger] = useState(false);
  const [storagesteps, setstoragesteps] = useState([]);
  const messagesEndRef = useRef(null);
  const [tmp, settmp] = useState(false);

  useEffect(() => {
    const chatdata = localStorage.getItem("data");
    if (chatdata === null) {
      localStorage.setItem(
        "data",
        JSON.stringify({
          chatstorage: [],
          id: null,
          choice: null,
          info: {},
        })
      );
    } else {
      const stepsparsed = JSON.parse(chatdata);
      setstoragesteps(stepsparsed.chatstorage);
    }

    // Save the JSON object to localStorage whenever it changes
  }, []);

  const userinfohandle = (key, value) => {
    setuserinfo({ ...userinfo, [key]: value });
  };
  const AddBotMessage = (object) => {
    setcomponents((oldArray) => [
      ...oldArray,
      <BotMessage object={object} userinfo={userinfo} />,
    ]);
    if (object.key) {
      insertstep({
        type: "bot",
        value: object.message.replace("${previousvalue}", getdata(object.key)),
      });
    } else {
      insertstep({ type: "bot", value: object.message });
    }
  };
  const AddCustomComponent = (object) => {
    setcomponents((oldArray) => [
      ...oldArray,
      <object.Component
        loopsteps={loopsteps}
        setfinishtrigger={setfinishtrigger}
        finishtrigger={finishtrigger}
        object={object}
        userinfohandle={userinfohandle}
      />,
    ]);
  };

  const loopsteps = async (i) => {
    const jsonstoredData = JSON.parse(localStorage.getItem("data"));    
    const updatedObject={...jsonstoredData,id:i}
    localStorage.setItem('data', JSON.stringify(updatedObject));

    let object = findjson(chatbotsteps, i);
    await new Promise((r) => setTimeout(r, object.await));

    if (object.message !== null) {
      AddBotMessage(object);
      settmp(true)

    }

    if (object.Component) {
      AddCustomComponent(object);
      var objDiv = document.getElementById("test");
      objDiv.scrollTop = objDiv.scrollHeight;
      return;
    }
    if (object.user) {
      setuserinput(true);
      setstepobject(object);
      //for saving json step in state for passing it to footer
      return;
    }
    if (object.endchat) {
      localStorage.setItem(
        "data",
        JSON.stringify({
          chatstorage: [],
          id: null,
          choice: null,
          info: {},
        }))
      return;
    }
        // if(object.id==61){
    //   setfinishtrigger(true)
    // }
    loopsteps(object.trigger);
  };

  useEffect(() => {
    // var objDiv = document.getElementById("test")
    // const scrollHeight = objDiv.scrollHeight;
    // const clientHeight =objDiv.clientHeight;
    // const maxScroll = scrollHeight - clientHeight;
    // objDiv.style.transform=`translateY(-${maxScroll}px)`;
    // console.log("hii")

    var objDiv = document.getElementById("test");
    objDiv.scrollTop = objDiv.scrollHeight;
    // objDiv.scrollTop = objDiv.scrollHeight;

  });

  // useEffect(() => {
  //   var objDiv = document.getElementById("test");
  //   objDiv.scrollTop = objDiv.scrollHeight;
  // },[tmp]);

  return (
    <>
      <ChatButton toggle={toggle} settoggle={settoggle} loopsteps={loopsteps} />
      <Chatbot toggle={toggle} mobile={mobile} ref={messagesEndRef}>
        <Header settoggle={settoggle} />
        <Body storagesteps={storagesteps} components={components} />
        <Footer
          setcomponents={setcomponents}
          setuserinput={setuserinput}
          stepobject={stepobject}
          loopsteps={loopsteps}
          userinput={userinput}
        />
      </Chatbot>
    </>
  );
}
