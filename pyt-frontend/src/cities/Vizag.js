import React, { useEffect, useState } from "react";
import "./Vizag.css";
import Description from "../Components/Description";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import {
  religiousImages,
  touristImages,
  beachImages,
} from "../CityImages/VizagImg";
import BookingForm from "../BookingForm/BookingForm";

function Navbars() {
  return (
    <div>
      <img
        className="vizag"
        alt="vizag"
        src="https://2.bp.blogspot.com/-Buywxcs0Lkc/Uq1shnU8_EI/AAAAAAAAALE/G6VspF4QQ6g/s1600/vizag-kilasagiri-wallpapers2.jpg"
      ></img>
      <h2 className="vizagname">Visakhapatnam</h2>
    </div>
  );
}

function Body(props) {
  return (
    <div className="infovizag">
      <button className="booknow" value="Hyderabad" onClick={props.handler}>
        Book now
      </button>
      <h1>About Vizag</h1>
      <p>
        Visakhapatnam truly offers something for every type of traveler, from
        the beach bum to the culture vulture. There are eight beaches in this
        southeast India port city, as well as hilltop parks, a nature preserve,
        caverns, wildlife sanctuaries, temples, sacred Buddhist monuments and a
        fascinating submarine museum. Take a day trip to visit the fragrant
        coffee plantations of the Araku Valley.
      </p>
    </div>
  );
}

export default function Vizag(props) {
  const [showform, setshowForm] = useState(false);
  const updateState = () => {
    setshowForm(true);
  };
  return (
    <div>
      {showform ? (
        <BookingForm city="Vigaz" />
      ) : (
        <>
          <div>
            <NavBar />
            <Navbars />
            <Body handler={updateState} />
            <Description
              religiousImages={religiousImages}
              touristImages={touristImages}
              beachImages={beachImages}
            />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
