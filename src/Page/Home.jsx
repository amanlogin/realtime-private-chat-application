import React from "react";
import Sidebar from "..//Components/sidebar";
import Chat from "..//Components/chat";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
