import "../styles/Home.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
      
      <div id="loginbody">
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <link rel="stylesheet" href="styles/landing.css" />
        <header>
          <div className="homenav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact Us</a>
            <a href="/login">Log In</a>
          </div>
        </header>
        <div className="app">
      </div>
        <section id="home">
          <div className="flex-container">
            <img className="logonamehome" src= "./image/dogfence.png" alt=""/>
            <div className="homecaption">
              <div className="homecaption1">Asia’s 1st Dog Dating Site</div>
              <div className="homecaption2">Download our app now!</div>
              <div className="downloadbutton">
                <div className="appstore-container">
                  <a href="https://www.apple.com/id/app-store/"><img className="appstore" src="image/appstore.png" /></a>
                </div>
                <div className="googleplay-container">
                  <a href="https://play.google.com/store/games?device=windows&hl=id"><img className="googleplay" src="image/googleplay.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="title">About</div>
          <div className="aboutapp">INUKOI</div>
          <div className="aboutcaption">A website created for dog owners to easily find partners and play buddies for their dogs!</div>
          <div className="founders">Founders</div>
          <ul className="foundersname">
            <li className="name">Filbert Federico</li>
            <li className="name"> Jocelin Wilson</li>
            <li className="name">Tiffany Widjaja</li>
          </ul>
        </section>
        <section id="features">
          <div className="title">Features</div>
          <div className="feature">
            <div className="feature1-container">
              <div className="num">1</div>
              <div className="featuredesc">Customize your dog’s bio with our features!</div>
              <img className="phone1" src="image/phone1.png" />
            </div>
            <div className="feature2-container">
              <div className="num">2</div>
              <div className="featuredesc">Connect with your pups matches!</div>
              <img className="phone2" src="image/phone2.png" />
            </div>
            <div className="feature3-container">
              <div className="num">3</div>
              <div className="featuredesc">Meet nearby pups your area!</div>
              <img className="phone3" src="image/phone3.png" />
            </div>
          </div>
        </section>
        <section id="community">
          <div className="com-container">
            <div className="title">Community</div>
            <div className="comcaption">Share your Pawsitive moments with us.</div>
            <div className="comcaption2">
              <div className="comcap">Join the community to</div>
              <div className="comcap">Like, Comment, and Share posts!</div>
            </div>
            <a href><button className="buttonhome">Join now!</button></a>
            <img className="featureicon" src="image/featureicon.png" />
          </div>
          <img className="postexample" src="image/postexample.png" />
        </section>
        <section id="contact">
          <div className="contact-container">
            <div className="contacttitle">Contact Us!</div>
            <div className="email-container">
              <img className="contacticon-container" src="image/email.png" />
              <div className="contactinfo">inukoi@gmail.com</div>
            </div>
            <div className="phone-container">
              <img className="contacticon-container" src="image/phone.png" />
              <div className="contactinfo">0811177669</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
    
export default Home;