import React from "react";
import "./Welcome.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router,Link} from "react-router-dom";

export default function Welcome(props) {
  return (
    <div className="welcomeDiv">
        <h1 className="roadtripname">Road-Trip</h1>
        <h1 className="welcome">
          Welcome to <span>Road-Trip</span>
        </h1>
        <div className="welname">
          Find the best place you want and Explore the places wherever you go
        </div>
        <Router>
        <Link to="/login">
          <button className="getstarted" onClick={props.handler}>
            Get Started
          </button>
        </Link>
        </Router>
    </div>
  );
}
