import React from "react";
import googleIcon from "../../assets/google.png"
import facebookIcon from "../../assets/fb.png"
import "./loginForm.css"; // Import the CSS file

const LoginForm = () => {
  return (
    <div className="login">
      <h3>Login Here</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <button type="submit">Login</button>
      </form >
      <div className="social">
          <a href="#"><img src={googleIcon} /></a>
          <a href="#"><img src={facebookIcon} /></a>
        </div>
    </div >
  )
};

export default LoginForm;
