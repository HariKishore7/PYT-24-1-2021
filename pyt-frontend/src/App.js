import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Authentication/Login";
import Welcome from "./WelcomePage/Welcome";
import Hyderabad from "./cities/Hyderabad";
import Goa from "./cities/Goa";
import Vizag from "./cities/Vizag";
import Kerala from "./cities/Kerala";
// import BookingForm from "./BookingForm/BookingForm";
// import { useHistory } from "react-router-dom";
import Profile from './Navbar/Profile';
import Cars from './finalpages/Cars';
import Contact from './Navbar/Contact';
import About from './Navbar/About';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [showLogin, setshowLogin] = useState(false);
  // const [city, setCity] = useState("");

  const getUserName=()=>{
    return fetch("http://localhost:8000/userinfo",{credentials:"include"})
    .then(r=>{
      if(r.ok){
        return r.json();
      }
      else{
        setLoggedIn(false);
        setUserEmail(undefined);
        setUserName(undefined);
        return {success:false};
      }
    })
    .then(r=>{
      if(r.success!==false){
        setLoggedIn(true);
        setUserEmail(r.userEmail);
        setUserName(r.userName);
      }
    });
  }

  // useEffect(()=>{
  //   getUserName();    
  // },[]);

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
    })
    .then((r) => {
      if(r.success === true) {
        return getUserName();
      } else {
        setError(r.err);
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
        console.log("Logging in kishorek");
        setLoggedIn(true);
        return { success: true };
      } else {
        return r.json();
      }
    })
    .then((r) => {
      if(r.success === true) {
        return getUserName();
      } else {
        setError(r.err);
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
    console.log("slogin lower : "+showLogin);
  };
  
  return (
    <>
      <Router>        
        <Switch>
          <Route path="/startpage">
            {loggedIn ? (
              <Redirect from="/"  to="/home"/>
            ) : showLogin ? (
              <Redirect from="/"  to="/login"/>
            ) : 
            <Redirect from="/" to ="/welcome"/>
            }             
          </Route>
          <Route exact path="/login">
            <Login loginHandler={loginHandler} signupHandler={signupHandler} error={error} />
          </Route>
          <Route exact path ="/welcome">
            <Welcome handler={updatedState}/>
          </Route>
          <Route exact path ="/home">
            <HomePage logoutHandler={logoutHandler}/>
          </Route>
          <Route exact path="/Hyderabad">
            <Hyderabad/>
          </Route>           
          <Route exact path="/Goa">
            <Goa/>
          </Route>
          <Route exact path="/Kerala">
            <Kerala/>
          </Route>
          <Route exact path="/Vizag">
            <Vizag/>
          </Route>
          <Route exact path="/Profile">
            <Profile userName={userName}/>
          </Route>
          <Route exact path="/Cars">
            <Cars/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
