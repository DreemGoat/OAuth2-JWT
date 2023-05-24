import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div>
      {/* <style>
        body {
            background: url("../authenticationbg.png";)
        }
      </style> */}
      <meta charSet="utf-8" />
      <title>Sign In</title>
      <Link rel="stylesheet" href="styles/authentication.css" />
      <div className="auth-container">
        <div className="auth2-container">
          <div className="mail">Email</div>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
          <div className="pass">Password</div>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <a href="match"><button className="buttonsignup">Log in</button></a>
          <p className="signmessage">Don’t have an account yet? <a href="signup" className="bold-italic">Sign up</a> now!</p>
        </div>
      </div>
    </div>
  );
};

export default Login