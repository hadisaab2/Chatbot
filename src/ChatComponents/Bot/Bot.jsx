import React from 'react'
import {
    BotMessage,
    Message,
  } from "./styles";
export default function Bot({message}) {
  return (
    <BotMessage>
      <Message>{message}</Message>
  </BotMessage>  )
}
