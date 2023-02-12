import React from "react";
import "./Register.css";
import Add from "../image/profile1.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">VIPER'S CHAT</span>
        <span className="title">Register</span>
        <form className="form">
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="Add Avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>SignUp</button>
        </form>
        <p>You already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
