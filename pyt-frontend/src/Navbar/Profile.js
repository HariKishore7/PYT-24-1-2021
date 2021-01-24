import React, { useState, useEffect } from 'react';
import './Profile.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

function UserProfile(props){
    // console.log("UserName",props.userName);
    return(
        <div className="profileInfo">            
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.phoneNumber}</div>
            <div>{props.licence}</div>
            <div>{props.noOfTravellers}</div>
            <div>{props.fromDate}</div>
            <div>{props.toDate}</div>
        </div>
    )
}

export default function Profile(props){
    const [prevTrips, setprevTrips] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9999/Booking",{credentials:"include"})
        .then((r)=>r.json())
        .then((arr)=>{
            setprevTrips(arr);
        });
    }, []);
    return(
        <div>
            <NavBar/>
            <div>{props.userName}</div>
            <div>Hari</div>            
            {prevTrips.map((name, age, phoneNumber, licence, noOfTravellers, fromDate,toDate) => (
                <UserProfile
                name age phoneNumber licence noOfTravellers fromDate toDate
                />
            ))}
            <Footer/>
        </div>
    );
}