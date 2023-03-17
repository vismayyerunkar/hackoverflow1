import React,{useEffect,useState} from "react";
import "../styles/marketplace.css";
import { Link } from "react-router-dom";
import CropCard from "./CropCard";
import Navbar from "./Navbar";
import axios from "axios";


function MarketPlace() {

  const [cards,setCards] = useState([]);

  // const getList = async() => {
  //   const list = await axios.get("http://") 
  // }


  useEffect(() => {
    axios.get('http://172.17.29.30:5000/api/v1/product/get',{headers: {
      token: localStorage.getItem('token')
  }}).then((res)=>{
      setCards(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <>
    <Navbar/>
    <div className="marketplace-main">
      <div className="marketplace-upper">
        <h2>Market Place</h2>

        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search crops here"
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <a href="/croprequest" className="Add-More-btn">
          Create <i class="fa-solid fa-circle-plus"></i>
        </a>
      </div>
      <div className="marketplace-lower">
        {cards.map((item) => {
          return (
            <>
              <CropCard
                name={item.title}
                price={item.price}
                imgUrl={item.imageUrl}
                quantity={item.quantity}
                description={item.description}
                contact = {item.contact}
                seller={item.user}
              />
            </>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default MarketPlace;
