import React from 'react';
import Emoji from 'react-emoji-render';
import Response from './ShowChats.styled';
import { useChat } from '../Chat.context';
const ShowChats = () => {
  const { chats } = useChat();
  return (
    <>
      {chats && chats.length
        ? chats.map((chat, index) => (
            <Response key={index} $authorType={chat.type}>
              <Emoji text={chat.message} />
            </Response>
          ))
        : null}
    </>
  );
};

export default ShowChats;
