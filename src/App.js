import React from "react";
import { ChatbotContext } from "./Context/ChatbotContext";
import { useContext,useEffect } from "react";

import MainLayout from "./MainLayout";
function App() {
  const { screen } = useContext(ChatbotContext);
  const [mobile, setmobile] = screen;

  useEffect(() => {
    window.parent.postMessage("checksize", "*");
  },[])

  useEffect(() => {
    const handleMessage = (evt) => {
      if (evt.data === "notMobile" || evt.data === "Mobile") {
        setmobile(evt.data);
      }
    };
  
    window.addEventListener("message", handleMessage);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <MainLayout mobile={mobile} />;
}

export default App;
