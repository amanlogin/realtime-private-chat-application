import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import "./NavBar.css";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Viper Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="profile" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logut</button>
      </div>
    </div>
  );
};

export default Navbar;
