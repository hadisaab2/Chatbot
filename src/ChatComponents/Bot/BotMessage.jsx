import React, { useEffect, useState } from "react";
import {
  MessageConatiner,
  BotMessage,
  BotDots,
  Dot1,
  Dot2,
  Dot3,
  Message,
  MessageButton,
} from "./styles";
import { getdata } from "../../utils.js/localstorageutility";
export default function ({ object, userinfo }) {
  const [delay, setdelay] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setdelay(false);
    }, 1100);

    setTimeout(function () {
      var objDiv = document.getElementById("chatbotbody");
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1200);
  }, []);

  return (
    <MessageConatiner>
      {!delay ? (
        <>
          <BotMessage>
            {object.key ? (
              <Message>
                {object.message.replace(
                  "${previousvalue}",
                  getdata(object.key)
                )}
              </Message>
            ) : (
              <Message>{object.message}</Message>
            )}

            {object.button && (
              <MessageButton
                onClick={() => {
                  window.parent.postMessage({
                    eventid:"redirect",
                    url:object.button.url
                  }, "*");                }}
              >
                {object.button.text}
              </MessageButton>
            )}
          </BotMessage>
        </>
      ) : (
        <BotDots>
          <Dot1></Dot1>
          <Dot2></Dot2>
          <Dot3></Dot3>
        </BotDots>
      )}
    </MessageConatiner>
  );
}
