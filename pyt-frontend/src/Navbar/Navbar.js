import React from 'react';
import './Navbar.css';

function NavBar() {
  return (
    <div className="nav">
      <a href="/" className="logoname">Road Trip</a>
      <a href="/Welcome" className="name login"><button className="btn">Logout</button></a>
      <a href="/Profile" className="name profile"><button className="btn">Profile</button></a>
      <a href="/Cars" className="name cars"><button className="btn">Cars</button></a>
      <a href="/Contact" className="name contact"><button className="btn">Contact</button></a>
      <a href="/About" className="name about"><button className="btn">About</button></a>
      <a href="/" className="name home"><button className="btn">Home</button></a>
    </div>
  );
}
export default NavBar;