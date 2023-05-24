import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function SignUp() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Sign Up</title>
      <Link rel="stylesheet" href="styles/authentication.css" />
      <div className="auth-container">
        <div className="auth2-container">
          <div className="username">Username</div>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <div className="mail">Email</div>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
          <div className="pass">Password</div>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <a href="welcome"><button className="buttonsignup">Sign Up</button></a>
          <p className="signmessage">Already have an account? <a href="login" className="bold-italic">Login</a> now!</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp