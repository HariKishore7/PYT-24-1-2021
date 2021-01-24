import React from 'react';
import NavBar from './Navbar';
import Footer from '../footer/Footer';
import './About.css';

function About() {
    return (
      <>
      <NavBar/>
        <div className="About">
        <img className="abtimg" src="http://www.travelicious.in/images/inner/about.jpg" alt="man"></img>
        <h2 className="whoweare">WHO WE ARE</h2>
        <p className="mission">Our mission</p><hr></hr>
        <p className="aboutdesc">Road-Trip makes easier to travel around the places, it gives an opportunity where the user can select whatever the city he want's to visit and the type of car that he wants. Explore the world with different feel and Experience.</p>
        <hr></hr>
        <h2 className="how">How it Works</h2>
        <div className="tipstab">         
            <h1 className="how howto">How to Travel With <span className="how">ROAD-TRIP</span></h1>
          <div className="tips">
            <div className="card">
              <h1 className="card1">Plan Your Trip 🛣</h1>
              <div className="detail">
                <p className="card2">Select your favourite destinations and Book them</p>
              </div>
            </div>
            <div className="card">
              <h1 className="card1">Explore opportunity 👍❤️</h1>
              <div className="detail">
                <p className="card2">Find opportunities while you travel.We'll show you the places which are famous in the selected location</p>
              </div>
            </div>
            <div className="card">
              <h1 className="card1">Book the Car🚗</h1>
              <div className="detail">
                <p className="card2">Book a car which is relevant for you to travel</p>
              </div>
            </div>
            </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  export default About;