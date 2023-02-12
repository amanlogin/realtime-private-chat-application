import React from "react";
import NavBar from "..//Components/Navbar";
import Search from "./Search";
import Chatlist from "./Chatlist";

const sidebar = () => {
  return (
    <div className="sidebar">
      <NavBar />
      <Search />
      <Chatlist />
    </div>
  );
};

export default sidebar;
