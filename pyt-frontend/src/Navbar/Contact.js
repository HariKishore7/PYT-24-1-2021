import React from 'react';
import NavBar from './Navbar';
import Footer from '../footer/Footer';
import './Contact.css';

function Contact() {
    return (
      <>
      <NavBar/>
        <div className="Contact">
        <iframe className="glocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.2358083851462!2d81.59402982918901!3d16.729683999279768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzQ2LjkiTiA4McKwMzUnNDAuNSJF!5e0!3m2!1sen!2sin!4v1610213678047!5m2!1sen!2sin" title="Location" width="1515px" height="550" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <h1 className="contactus">CONTACT <span>US</span></h1>
        <p className="contactpara">Please feel free to call us for Holiday Packages, car rental and for any other detail</p>       
        <div className="contactdetails">
            <h1 className="addressinfo">ADDRESS INFO</h1>
                <i className="markers fa fa-map-marker"></i>
                <p>Ramachandrapuram, Main Road, Meenavilluru, Pentapadu,Tadepalligudem, 534134</p>
            <i className="markers fa fa-mobile"></i>
            <p><a href="tel:+917993887618">+91 7993887618</a></p>
            <i className="markers fa fa-envelope-o"></i>
            <p><a href="milto:samplemail@gmail.com">samplemail@gmail.com</a></p>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  export default Contact;