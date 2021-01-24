import React from 'react';
import './Cars.css';
import Description from '../Components/Description';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import car_image from './car_image.svg';
import {fiveSeater,sevenSeater,luxury} from "./CarImages";

function IntroImage(){
    return(
        <div>
            <img className="carImage" alt="bgimage" src={car_image}></img>
        </div>
    );
}

function Body(){
    return(
        <div className="infocar">
            <h1>Pick As You Wish</h1>
        </div>
    );
}
 
function CostSlider(){
    // var slider1 = document.getElementById("myRange1");
    // var slider2 = document.getElementById("myRange2");
    // var hours = document.getElementById("hours");
    // var price1 = document.getElementById("price1");
    // price1.innerHTML = slider1.value*65;
    // var price2 = document.getElementById("price2");
    // price2.innerHTML = slider2.value*1560;
    // var days = document.getElementById("days");
    // hours.innerHTML = slider1.value;
    // days.innerHTML = slider2.value;

    // slider1.oninput = function() {
    //     hours.innerHTML = this.value;
    //     price1.innerHTML = this.value*65;
    // }
    // slider2.oninput = function() {
    //     days.innerHTML = (this.value);
    //     price2.innerHTML = this.value*1560;
    // }
    return(
        <div class="slidecontainer">
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

export default function Cars(){
    let firsttab="Five Seater";
    let secondtab="Seven Seater";
    let thirdtab="Luxury";

    return(
        <div>
            <NavBar/>
            <IntroImage/>
            <Body/>
            <Description firsttab={firsttab} secondtab={secondtab} thirdtab={thirdtab} religiousImages={fiveSeater} touristImages={sevenSeater} beachImages={luxury}/>
            <CostSlider/>
            <Footer/>
        </div>            
    );
}