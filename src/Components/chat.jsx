import React from "react";
import ".//chat.css";
import AddFriend from "..//image//add-friend.png";
import Camera from "..//image//camera.png";
import More from "..//image//more.png";
import ChatMessage from "./ChatMessage";
import InputPannel from "..//Components//inputPannel";

const chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>Aman</span>
        <div className="chaticons">
          <img src={AddFriend} alt="" />
          <img src={Camera} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <ChatMessage />
      <InputPannel />
    </div>
  );
};

export default chat;
