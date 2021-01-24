import react from "react";
import "./BookingForm.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Profile from '../Navbar/Profile';
import logo from "./FormImg.svg";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Form(props) {
  function CostSlider(){
    return(
        <div class="slidecontainerbf">
            <h1>Calculate the cost of  trip</h1>
            <input type="range" min="10" max="96" value="24" className="slider" id="myRange1"></input>
            <p>Hours: <span id="hours"></span></p>
            <p>Price: <span id="price1"></span></p>
            <input type="range" min="5" max="15" value="1" className="slider" id="myRange2"></input>
            <p>Days: <span id="days"></span></p>
            <p>Price: <span id="price2">0</span></p>
        </div>
    )
  }
  let history = useHistory();

  const bookingHandler = (e, name, age, phoneNumber, licence, noOfTravellers, fromDate, toDate) => {
    e.preventDefault();
    fetch("http://localhost:8000/Booking", {
      method: "POST",
      body: JSON.stringify({name, age, phoneNumber, licence, noOfTravellers, fromDate, toDate}),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        // history.push("/successScreen");
        console.log("Booking data",r);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };

  return (
    <>
      <NavBar />
      <img className="sideimgbook" src={logo} alt="sideimg"></img>
        <CostSlider/>
        <div className="form-containerbook">
          <form action="#">
            <h1>Fill the Form</h1>
            <div className="inputfieldsbook">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Age" />
              <input type="tel" placeholder="Phone Number" />
              <input type="text" disabled placeholder="city" value={props.city}/>
              <input type="password" placeholder="Driving Licence Number" />
              <input type="number" placeholder="Number of travellers"/>
              <input type="text" placeholder="Please provide your current Address" />
              <div className="chooseacar">Choose a car : </div>
              <select id="cars" required>
                <option value="Selectacar">Select a Car</option>
                <optgroup label="Five Seater">
                  <option value="Swift Dezire">Swift Dezire</option>
                  <option value="Renault Kwid">Renault Kwid</option>
                  <option value="Hyundai Creta">Hyundai Creta</option>
                </optgroup>
                <optgroup label="Seven Seater">
                  <option value="Innova">Innova</option>
                  <option value="Duster">Duster</option>
                  <option value="Fortuner">Fortuner</option>
                </optgroup>
                <optgroup label="Luxury">
                  <option value="MgHector">MgHector</option>
                  <option value="Kia">Kia</option>
                  <option value="Jeep">Jeep</option>
                </optgroup>
              </select>
              <p>FROM:</p>
              <input type="date" placeholder="date of trip" />
              <p>TO:</p>
              <input type="date" placeholder="date of trip" />
            </div>
            <button onClick={bookingHandler} className="booknowbook">Book Now</button>
          </form>
        </div>
        <Footer/>
        <Router>
          <Switch>
            <Route path="/Profile" >
              <Profile name age phoneNumber licence noOfTravellers fromDate toDate/>
            </Route>
          </Switch>
        </Router>
  </>
  );
}
