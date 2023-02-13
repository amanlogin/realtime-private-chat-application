import React from "react";
import ".//Messages.css";

const Messages = () => {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img
          src="https://images.pexels.com/photos/15030788/pexels-photo-15030788.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messagecontent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/15030788/pexels-photo-15030788.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Messages;
