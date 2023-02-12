import React from "react";
import Message from "..//Components//Messages";
import ".//ChatMessage.css";

const ChatMessage = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default ChatMessage;
