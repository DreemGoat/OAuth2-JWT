import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Match.css";

function Dashboard() {
    return (
      <div>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="styles/Match.css" />
        <header>
        <div className="header-container">
          <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
          <div className="nav">
            <a className="active" href="dashboard">Home</a>
            <a className="inactive" href="match">Match</a>
            <a className="inactive" href="chat">Chat</a>
            <a className="inactive" href="explore">Explore</a>          
          </div>
          <a href="index.html">
            <button className="logout">Log Out</button>
          </a>
        </div>
      </header>
        <section id="dashb">
          <div className="dmessage">
            <div className="dmessage1">
                <div className="dwelcome">Welcome Back</div>
                <div className="duser">user123!</div>
            </div>
            <div className="dmessage2">
                <div className="dlog">You are logged in with</div>
                <div className="dmail">user123@gmail.com</div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default Dashboard