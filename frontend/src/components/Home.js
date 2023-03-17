import React from "react";
import "../styles/Home.css";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {Link} from "react-router-dom"
import '../styles/Footer.css'

const Home = () => {

  const handleLogout = ()=>{
      if(localStorage.getItem('token')){
        localStorage.clear();
      }
  }

  return (
    <>
      <NavBar />
      <div className="home">
        <div className="herosection">
          <div className="left">
            <h1>If the farmer is rich, then so is the nation</h1>
            <div className="hsbuttons">
              <Link onClick={()=>handleLogout()} className="pre-link" to="/signup"><button className="logout-btn btn1">{!localStorage.getItem('token') ? "Sign up" : "Logout"}</button></Link>
              <button className="btn2">About Us</button>
            </div>
          </div>
          <div className="right">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_sgn7zslb.json"
              background="transparent"
              speed="1"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="about">
          <div className="left"></div>
          <div className="right">
            <h1>About Us</h1>
            <p>
              Atmanirbhar Kisan is a Platform that tries to solve the issues faced by Farmers
              and reduce the suicide rates of farmers. It is a Platform where
              Farmers can connect with each other and express the issues they
              are facing and seek the required help from others ultimately
              making a Community. get funds without falling into debt traps.
              sell their products directly to the consumers.
            </p>
          </div>
        </div>
      </div>
      <>
      <div className='footer'>
        <div className='left'>
            <h1>Atmanirbhar Kisan</h1>
        </div>
        <div className='right'>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-twitter"></i>
        </div>
    </div>
    </>
    </>
  );
};

export default Home;
