import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Viper Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14783579/pexels-photo-14783579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile"
        />
        <span>Aman</span>
        <button onClick={() => signOut(auth)}>Logut</button>
      </div>
    </div>
  );
};

export default Navbar;
