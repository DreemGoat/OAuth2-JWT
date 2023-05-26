import React, { useState } from "react";
import "../styles/Login.css";
import ErrorMessage from "./ErrorMessage";
import { OAuthPopup, useOAuth2 } from "@tasoskakour/react-use-oauth2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(""); // Define your TokenContext here

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

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const { data, loading, error, getAuth, logout } = useOAuth2({
    authorizeUrl: "https://example.com/auth", //change
    clientId: "YOUR_CLIENT_ID",
    redirectUri: `${document.location.origin}/callback`,
    scope: "YOUR_SCOPES",
    responseType: "code",
    exchangeCodeForTokenServerURL: "https://your-backend/token",
    exchangeCodeForTokenMethod: "POST",
    onSuccess: (payload) => console.log("Success", payload),
    onError: (error_) => console.log("Error", error_)
  });

  const isLoggedIn = Boolean(data?.access_token); // or whatever...

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return (
      <div>
        <pre>{JSON.stringify(data)}</pre>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return (
    <>
    <div>
      <meta charSet="utf-8" />
      <title>Sign In</title>
      <Link rel="stylesheet" href="styles/authentication.css" />
      <div className="auth-container">
        <div className="auth2-container">
          <div className="mail">Email</div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="pass">Password</div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="buttonsignup" onClick={submitLogin}>
            Log in
          </button>
          <button className="buttonoauth" type="button" onClick={() => getAuth()}>
            Log in with OAuth2
          </button>
          <p className="signmessage">
            Don't have an account yet?{" "}
            <Link to="/signup" className="bold-italic">
              Sign up
            </Link>{" "}
            now!
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
