import React, { useEffect, useState } from 'react'
import '../styles/Profile.css'
import Navbar from './Navbar'
import List from './List'
import List2 from './List2'
import axios from 'axios';


const Profile = () => {

  const [user, setUser] = useState("");
  const getUser = async () => {
    // const 
  }
  
  return (
    <>
      <Navbar />
      <div className='profile'>
        <div className='upperdiv'>
          <div className='uppperleft'>
            <i class="fa-solid fa-user"></i>
          </div>
          <div className='uppperight'>
            <span className='username'>Anish Ghogare</span>
            <span className='userdata'>9076018994</span>
            <span className='userdata'>Mumbai</span>

            <span className='userdata adhaar'>1234567887654321 <button className='adhaarbtn'><i class="fa-solid fa-paperclip"></i></button> </span>
            <span className='acc-balance'>Acc Balance : ₹ 10000</span>

          </div>

        </div>

        <div className='lowerdiv'>
          <List />
          <List2 borrowed="false" />
        </div>
      </div>
    </>
  )
}

export default Profile