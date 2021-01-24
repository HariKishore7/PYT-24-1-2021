import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Authentication/Login";
import Welcome from "./WelcomePage/Welcome";
import Hyderabad from "./cities/Hyderabad";
import Goa from "./cities/Goa";
import Vizag from "./cities/Vizag";
import Kerala from "./cities/Kerala";
import BookingForm from "./BookingForm/BookingForm";
import { useHistory } from "react-router-dom";
import Profile from './Navbar/Profile';
import Cars from './finalpages/Cars';
import Contact from './Navbar/Contact';
import About from './Navbar/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [showLogin, setshowLogin] = useState(false);
  const [city, setCity] = useState("");

  const getUserName=()=>{
    return fetch("http://localhost:8000/userinfo",{credentials:"include"})
    .then(r=>{
      if(r.ok){
        return r.json();
      }
      else{
        setLoggedIn(false);
        setUserEmail(undefined);
        return {success:false};
      }
    })
    .then(r=>{
      if(r.success!==false){
        setLoggedIn(true);
        setUserEmail(r.userEmail);
      }
    });
  }

  useEffect(()=>{
    getUserName();
  },[]);

  const signupHandler = (e, username, useremail, password) => {
    e.preventDefault();
    fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify({ username, email: useremail, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };

  const loginHandler = (e, useremail, password) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ email: useremail, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };

  const logoutHandler = () => {
    return fetch("http://localhost:8000/logout", {
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
        setUserEmail(undefined);
      }
    });
  };

  const updatedState = () => {
    setshowLogin(true);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <HomePage logoutHandler={logoutHandler}/>
            ) : showLogin ? (
              <Login
                loginHandler={loginHandler}
                signupHandler={signupHandler}
                error={error}
              />
            ) : (
              <Welcome handler={updatedState} />
            )}
          </Route>
          <Route path="/Hyderabad">
            <Hyderabad/>
          </Route>
          <Route path="/Goa">
            <Goa/>
          </Route>
          <Route path="/Kerala">
            <Kerala/>
          </Route>
          <Route path="/Vizag">
            <Vizag/>
          </Route>
          <Route path="/Profile">
            <Profile userName={userEmail}/>
          </Route>
          <Route path="/Cars">
            <Cars/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;