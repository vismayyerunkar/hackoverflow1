import React from 'react'
import "../styles/rentalMarket.css";

function Card({owner , imgUrl , rent , location , tool , phoneNumber}) {
  return (
    <div className='card-main'>
        <div className="card-main-upper">
            <img src={imgUrl} alt="card-img" />
        </div>
        <div className="card-main-lower">
            <div className="lower-left">
                <h2>
                    {tool}
                </h2>

                <p>₹ {rent}/ Day</p>
                <small> <i class="fa-solid fa-location-dot"></i> {location}</small>
            </div>
            <div className="lower-right">
                <a href={`tel:+${phoneNumber}`}><i class="fa-solid fa-phone"></i></a>
            </div>
        </div>

       
    </div>
  )
}

export default Card