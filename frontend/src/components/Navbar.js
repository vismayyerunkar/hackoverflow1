import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    const [activeTab,setActiveTab] = useState(location.pathname.split('/')[1]?.toUpperCase());

    const googleTranslateElementInit = React.useCallback(() => {
        new window.google.translate.TranslateElement(
          "google_translate_element"
        );
      },[]);
    
      useEffect(() => {
        console.log("use effect")
        // var addScript = document.createElement("script");
        // addScript.setAttribute(
        //   "src",
        //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        // );
        // document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        
        return ()=>{
           
        }
      }, []);

  return (
    <nav className='nav-bar'>
        <div className='nav-logo'>
            <Link className='pre-link' to="/"><img width="90px" height="90px" src={logo}/></Link>
        </div>
        <ul className='nav-items'>
            <li style={{color:activeTab === "" ? 'var(--primary-color)' : ""}} className='nav-item'><Link className='pre-link' to="/">Home</Link></li>
            <li style={{color:activeTab === "COMMUNITY" ? 'var(--primary-color)' : ""}} className='nav-item'><Link className='pre-link' to="/community">Community</Link></li>
            <li style={{color:activeTab === "MARKETPLACE" ? 'var(--primary-color)' : ""}} className='nav-item'><Link className='pre-link' to="/marketplace">Marketplace</Link></li>
            <li style={{color:activeTab === "RENTAL" ? 'var(--primary-color)' : ""}} className='nav-item'><Link className='pre-link' to="/rental">Rental</Link></li>
            {/* <li style={{color:activeTab === "UPDATES" ? 'var(--primary-color)' : ""}} className='nav-item'><Link className='pre-link' to="/updates">Updates</Link></li> */}
        </ul>

        <div className='nav-options'>
            <div id='google_translate_element'></div>
            { localStorage.getItem('token') ? location.pathname.split('/')[1]?.toUpperCase() != "PROFILE" && (<Link className='pre-link' to="/profile"><button className='profile-btn'>Visit Profile</button></Link>) :null}
        </div>
    </nav>
  )
}

export default React.memo(Navbar);
