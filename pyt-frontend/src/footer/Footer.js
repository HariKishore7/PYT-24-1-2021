import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
      <>
        <div className="footer">
          <div className="sidebar1">          
            <div className="details" style={{ color: "orange"}}>About Us</div>
            <div >We care for others to travel around the world</div>
            <div className="details" style={{color:"blue"}}>Contact Us:</div>
              <div>7993887618</div>
              <div>7993887619</div>
          </div>
          <div className="discover">
            <div style={{ color: "orange" }}>About</div>
            <div>Who Am I</div>
            <div>How it works</div>
          </div>
          <div className="events">
            <div style={{ color: "orange" }}>Things to do</div>
            <div>Events Home</div>
            <div>Upcoming Events</div>
          </div>
          <div className="blog">
            <div style={{ color: "orange" }}>Blog</div>
            <div>Guides</div>
            <div>Deals</div>
          </div>
          
        </div>
        <div className="hrline">
            <p style={{color:"white"}}>@Copyrights 2021</p>
        </div>
      </>
    );
  }