import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomePage.css";
import Hyderabad from "../cities/Hyderabad";
import Goa from "../cities/Goa";
import Kerala from "../cities/Kerala";
import Vizag from "../cities/Vizag";
import Footer from "../footer/Footer";
import Routing from "../Navbar/Routing";
import Welcome from "../WelcomePage/Welcome";
import Login from "../Authentication/Login";
import Navbar from "../Navbar/Navbar";

const tourPlaces = [
  {
    className: "container1",
    img: "topleft1",
    src:
      "https://cdn.theculturetrip.com/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg",
    id: "Hyderabad",
    cityClass: "middle",
    cityName: "Hyderabad",
    textClass: "text",
  },
  {
    className: "container1",
    img: "topleft1",
    src:
      "https://images.thrillophilia.com/image/upload/s--AdMFxeHB--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/039/872/original/1607412230_shutterstock_1301320006.jpg.jpg",
    id: "Goa",
    cityClass: "middle",
    cityName: "Goa",
    textClass: "text",
  },
  {
    className: "container1",
    img: "topleft1",
    src:
      "https://images.thrillophilia.com/image/upload/s--73kqtYGX--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/098/852/original/1552476318_houseboat37.jpg.jpg",
    id: "Kerala",
    cityClass: "middle",
    cityName: "Kerala",
    textClass: "text",
  },
  {
    className: "container1",
    img: "topleft1",
    src: "https://live.staticflickr.com/1759/28654102158_47e5f69dc4_b.jpg",
    id: "Vizag",
    cityClass: "middle",
    cityName: "Vizag",
    textClass: "text",
  },
];

function Intro() {
  return (
    <div className="intro">
      <h1>Travel smarter,</h1>
      <h3>Making traveling more connected</h3>
      <h4>
        Immerse yourself in local culture by discovering<br></br> exciting
        opportunities at destinations around the<br></br> world. You tell us
        where you're going, and we'll<br></br> connect you to the services you
        need along your trip.
      </h4>
    </div>
  );
}
function BodyData() {
  return (
    <div className="bodydata">
      {tourPlaces.map((data) => {
        const name = data.cityName;
        return (
          <Router>
            <span className={data.className}>
              <img className={data.img} src={data.src} alt={data.id}></img>
              <span className={data.cityClass}>
                <a href={`${name}`}>
                  <span className={data.textClass}>{data.cityName}</span>
                </a>
              </span>
            </span>
          </Router>
        );
      })}
    </div>
  );
}

function App(props) {
  return (
    <div>
      <Navbar userName={props.username}/>
      <div className="main">
        <img
          className="background-img"
          alt="Plan your trip"
          src="https://images.unsplash.com/photo-1470074292333-06771ecb559e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwbGFuJTIweW91ciUyMHRyaXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ></img>
        <Intro />
        <BodyData />
        <Footer />
      </div>
    </div>
  );
}
export default App;
