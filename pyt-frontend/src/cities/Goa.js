import React, { useState } from "react";
import "./Goa.css";
import Description from "../Components/Description";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import {
  religiousImages,
  touristImages,
  beachImages,
} from "../CityImages/GoaImg";
import BookingForm from "../BookingForm/BookingForm";

function Navbars() {
  return (
    <div>
      <img
        className="goa"
        alt="bgimage"
        src="https://images.thrillophilia.com/image/upload/s--AdMFxeHB--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/039/872/original/1607412230_shutterstock_1301320006.jpg.jpg"
      ></img>
      <h2 className="goaname">Goa</h2>
    </div>
  );
}

function Body(props) {
  return (
    <div className="infogoa">
      <button className="booknow" value="Hyderabad" onClick={props.handler}>
        Book now
      </button>
      <h1>About Goa</h1>
      <p>
        East meets West in this sun-soaked state, where Indian culture
        intertwines with Portuguese influences left over from a 500-year
        occupation. The beaches have long served as a magnet for serene
        hedonists. To the north, the tourist-centric scene is prevalent, with an
        international flair that is now skewing more hip than hippie. Travel
        south for stretches of unspoiled sand and an escape from large resorts.
        Temples, mosques and wildlife sanctuaries provide diversions from the
        beach.
      </p>
    </div>
  );
}

function Goa(props) {
  const [showform, setshowForm] = useState(false);
  const updateState = () => {
    setshowForm(true);
  };
  return (
    <div>
      {showform ? (
        <BookingForm city="Goa" />
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

export default Goa;
