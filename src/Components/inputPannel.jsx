import React from "react";
import ".//ChatMessage.css";
import Img from "..//image//picture.png";
import Attach from "..//image//attach.png";

const inputPannel = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something.." />
      <div className="send">
        <img src={Img} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default inputPannel;
