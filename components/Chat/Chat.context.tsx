import React, { useReducer, useContext, createContext } from "react";

const ChatContext = createContext({} as any);

export const INITIAL_STATE = {
  chats: [],
  listen: false,
  message: "",
};

const ChatReducer = (state, action) => {
  switch (action.type) {
    case "NEW_BOT_MESSAGE":
      return {
        ...state,
        chats: [...state.chats, action.payload],
        listen: false,
        message: "",
      };
    case "NEW_HUMAN_MESSAGE":
      return {
        ...state,
        chats: [...state.chats, action.payload],
        listen: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider
      value={{
        chats: state.chats,
        listen: state.listen,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
