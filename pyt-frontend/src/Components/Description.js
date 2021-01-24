import React, { useState } from "react";

import Images from "./Images";
import "./Description.css";

function Description(props) {
  const [showReligiousPlaces, setshowReligiousPlaces] = useState(true);
  const [showParks, setshowParks] = useState(false);
  const [showTouristPlaces, setshowTouristPlaces] = useState(false);

  const showOnlyReligiousPlaces = () => {
    setshowReligiousPlaces(true);
    setshowParks(false);
    setshowTouristPlaces(false);
  };

  const showOnlyParks = () => {
    setshowReligiousPlaces(false);
    setshowParks(true);
    setshowTouristPlaces(false);
  };

  const showOnlyTouristPlaces = () => {
    setshowReligiousPlaces(false);
    setshowParks(false);
    setshowTouristPlaces(true);
  };

  return (
    <div className="description">
        <div className="btnpart">
            <button className="buttons" onClick={showOnlyReligiousPlaces}>{props.firsttab}</button>
            <button className="buttons" onClick={showOnlyParks}>{props.secondtab}</button>
            <button className="buttons" onClick={showOnlyTouristPlaces}>{props.thirdtab}</button><br></br>
        </div>
        {showReligiousPlaces ? <Images imageData={props.religiousImages} /> : null}
        {showTouristPlaces ? <Images imageData={props.touristImages} /> : null}
        {showParks ? <Images imageData={props.beachImages} /> : null}  
    </div>
  );
}

export default Description;