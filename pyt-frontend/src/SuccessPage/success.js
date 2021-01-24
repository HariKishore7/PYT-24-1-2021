import React from 'react';
import './success.css';

export default function Success(){
    return(
        <div>
            <img src={donepic.svg}></img>
            <div className="successcard">Your trip Booked successfully</div>
            <button className="btnsuccess">Go back to Home</button>
        </div>
    )
}