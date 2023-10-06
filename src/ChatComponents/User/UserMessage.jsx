import React from 'react'
import {Message,UserMessageContainer} from "./styles"
export default function UserMessage({message}) {
  return (
    <UserMessageContainer>
      <Message>{message}</Message>
    </UserMessageContainer>  )
}
