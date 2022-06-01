import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Input } from "baseui/input";
import Wrapper, { Send } from "./ChatInput.styled";
import { useChat } from "../Chat.context";

const ChatInput: React.FC = () => {
  const { listen, dispatch } = useChat();
  const [value, setValue] = useState("");
  const handleChat = (e) => {
    e.preventDefault();
    if (value.trim() === "" || listen) return;
    dispatch({
      type: "NEW_HUMAN_MESSAGE",
      payload: { id: Date.now(), type: "author", message: value },
    });
    setValue("");
  };
  return (
    <Wrapper onSubmit={handleChat}>
      <Input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Write Something"
        overrides={{
          EndEnhancer: {
            style: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        }}
        endEnhancer={
          <Send onClick={handleChat}>
            <IoIosSend size="18px" />
          </Send>
        }
      />
    </Wrapper>
  );
};

export default ChatInput;
