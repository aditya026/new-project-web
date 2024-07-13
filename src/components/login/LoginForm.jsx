import React from "react";
import "./loginForm.css"; // Import the CSS file

const LoginForm = () => {
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button className="login" type="submit">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> register
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
