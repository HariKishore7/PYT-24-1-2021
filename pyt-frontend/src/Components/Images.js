import React from "react";
import './Images.css';

const Images = (props) => {
  const data = props.imageData;
  return data.map((data,i) => {
    return(
      <span className={data.className} key={i} >
          <img className={data.divclass} src={data.src} alt={data.id}></img>
          <span className={data.middleclass}>
              <span className={data.textclass} >{data.name}</span>
          </span>
      </span>
    );
  });
}

export default Images;