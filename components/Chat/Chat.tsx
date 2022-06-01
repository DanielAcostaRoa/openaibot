import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ShowChats from "./ShowChats/ShowChats";
import ChatInput from "./ChatInput/ChatInput";
import Wrapper, { Message, Header, Body, Footer } from "./Chat.styled";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "styletron.config";
import { fetchAiBot } from "../../lib/fetchAiBot";
import { useChat } from "./Chat.context";

const Chat = () => {
  const { listen, message, chats, dispatch } = useChat();
  useEffect(() => {
    const setReply = async () => {
      const reply = await fetchAiBot(message);
      dispatch({
        type: "NEW_BOT_MESSAGE",
        payload: { id: Date.now(), type: "AiBot", message: reply },
      });
    };
    if(listen)  setReply();
    const chatBody = document.getElementById("chatBody");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [listen, message, chats, dispatch]);

  return (
    <StyletronProvider value={styletron}>
      <Wrapper>
        <Message>
          <Header>
            <ChatHeader />
          </Header>
          <Body id="chatBody">
            <ShowChats />
          </Body>
          <Footer>
            <ChatInput />
          </Footer>
        </Message>
      </Wrapper>
    </StyletronProvider>
  );
};

export default Chat;
