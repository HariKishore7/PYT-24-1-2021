import React, { useEffect, useState } from "react";
import "./Hyderabad.css";
import Description from "../Components/Description";
import NavBar from "../Navbar/Navbar";
import BookingForm from "../BookingForm/BookingForm";
import Footer from "../footer/Footer";
import { withRouter } from "react-router-dom";
import {
  religiousImages,
  touristImages,
  parkImages,
} from "../CityImages/HydImg";
function Navbars() {
  return (
    <div>
      <img
        className="hyd"
        alt="bgimage"
        src="https://www.wallpapertip.com/wmimgs/44-446351_hyderabad-wallpaper.jpg"
      ></img>
      <h2 className="hydname">Hyderabad</h2>
    </div>
  );
}

function Body(props) {
  return (
    <div className="infohyd">
      <button className="booknow" value="Hyderabad" onClick={props.handler}>
        Book now
      </button>

      <h1>About Hyderabad</h1>
      <p>
        Want a taste of being royal? Eat in Hyderabad, where culinary traditions
        have been passed down from the Nizam monarchy. Arabic, Turkish and
        Mughlai influences are easily recognisable. The city is famous for its
        rich, aromatic biryani made with lamb, chicken or vegetables and served
        with fragrant basmati rice. Satisfy your sweet tooth with
        double-ka-meetha, a bread pudding.
      </p>
    </div>
  );
}

function Hyderabad(props) {
  const [showform, setshowForm] = useState(false);
  const updateState = () => {
    setshowForm(true);
  };
  return (
    <div>
      {showform ? (
        <BookingForm city="Hyderabad" />
      ) : (
        <>
          {" "}
          <NavBar />
          <Navbars />
          <Body handler={updateState} />
          <Description
            religiousImages={religiousImages}
            touristImages={touristImages}
            beachImages={parkImages}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default withRouter(Hyderabad);
