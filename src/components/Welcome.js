import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
    return (
      <div className="welcomeBody">
        <meta charSet="utf-8" />
        <title>Welcome to InuKoi</title>
        <link rel="stylesheet" href="styles/welcome.css" />
        <div className="messagewelcome1">Welcome to</div>
        <img className="logonamewelcome" src="image/logoname.png" />
        <div className="messagewelcome2">Create Your Dog’s Profile now</div>
        <a href="humandetails"><button className="buttonwelcome">Start</button></a>
      </div>
    );
  };
export default Welcome