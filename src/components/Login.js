import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOAuth2 from "./useOAuth2"
import OAuth2Popup from "./OAuth2Popup"

import "../styles/Login.css";
import ErrorMessage from "./ErrorMessage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext("");

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/api/token", requestOptions);
    const data = await response.json();

    // if (!response.ok) {
    //   setErrorMessage(data.detail);
    // } else {
    //   setToken(data.access_token);
    // } 
    //token
  };

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
          <input type="email" id="email" name="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
          
          <div className="pass">Password</div>
          <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
          
          <a href="dashboard"><button className="buttonsignup">Log in</button></a>
          <a href="dashboard"><button className="buttonoauth">Log in with OAuth2</button></a>
          <p className="signmessage">Don't have an account yet? <a href="signup" className="bold-italic">Sign up</a> now!</p>


        </div>
      </div>
    </div>
  );
};

export default Login;
