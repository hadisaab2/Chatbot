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
      // var objDiv = document.getElementById("test")
      // const scrollHeight = objDiv.scrollHeight;
      // const clientHeight =objDiv.clientHeight;
      // const maxScroll = scrollHeight - clientHeight;
      // objDiv.style.transform=`translateY(-${maxScroll}px)`;

      var objDiv = document.getElementById("test");
objDiv.scrollTop = objDiv.scrollHeight;
    }, 1200);

  }, []);
  
  return (
    <MessageConatiner>
      {/* {console.log(userinfo)}
      {console.log(object.key)} */}
      {/* {console.log(userinfo)} */}

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
                  window.location.href = object.button.url;
                }}
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
