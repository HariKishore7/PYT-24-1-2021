import React, { useState } from "react";
import "./Login.css";

function signUpButton() {
  document.getElementById("container").classList.add("right-panel-active");
}
function signInButton() {
  document.getElementById("container").classList.remove("right-panel-active");
}

export default function Login(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <img
        className="sideimgguy"
        src="https://thepointsguy.com/wp-content/themes/tpg-2016/client/images/tpg-weekly-update-man-left.svg"
        alt="sideimg"
      ></img>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="inputfields">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {props.error ? <div className="error">{props.error}</div>:null}
            <button
              className="sinsup"
              onClick={(e) => props.signupHandler(e, name, email, password)}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="inputfields">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {props.error ? <div className="error">{props.error}</div>:null}
            <button
              className="sinsup"
              onClick={(e) => props.loginHandler(e, email, password)}
            >
              Sign In
            </button>
            <a href="#">Forgot your password?</a>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="authbtn" onClick={signInButton} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="authbtn" onClick={signUpButton} id="signUp">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
