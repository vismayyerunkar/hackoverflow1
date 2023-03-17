import React, { useState,useEffect } from "react";
import "../styles/createRental.css"
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRental() {
  const [name, setName] = useState("");
  const [crop, setCrop] = useState("");
  const [phone, setPhone] = useState(0);
  const [price, setPrice] = useState();
  const [quantity , setQuantity] = useState(0);
  const [images, setImages] = useState();
  const [detail, setDetail] = useState("");

  const navigate = useNavigate()

  const createrental = async (e) =>{
    e.preventDefault();
    const formData = new FormData();

      formData.append('file',images);

      formData.append('upload_preset','my-uploads');

      const url = await fetch('https://api.cloudinary.com/v1_1/drcymcfus/image/upload',{
          method:'POST',
          body:formData
      }).then((r=>r.json()));

      console.log(url?.secure_url);

      axios.post("http://172.17.29.30:5000/api/v1/product/create",{
        description:detail,
        imageUrl:url?.secure_url,
        price:price,
        title:crop
      },{headers: {
        token: localStorage.getItem('token')
    }}).then((res)=>{
      console.log(res.data);
      navigate("/marketplace");
    });
  }



  return (
    <>
      <form action="#">
        <div className="create-donation-main">
          <div className="create-donation-left">
            <div className="create-donation-left-div1">
              <h2>Create Crop Request</h2>
              <p>
                <i className="fa-solid fa-envelope"></i>
              </p>
            </div>

            <div className="create-donation-left-div2">
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Crop Name"
                  name="crop"
                  onChange={(e) => setCrop(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  name="number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="number"
                  placeholder="Enter Price"
                  name="description"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              {/* <div className="input-div">
                <input
                  type="number"
                  placeholder="Enter Qunatity in Kg" 
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div> */}

              <div className="input-div file-input-div">
                <input
                  type="file"
                  name="document"
                  placeholder="crop image"
                  onChange={(e) => setImages(e.target.files[0])}
                  required
                  className="file-input"
                />

                <button>
                <i class="fa-sharp fa-solid fa-upload"></i>
                </button>
                <br />
                <small> *attach crop photo </small>
              </div>
            </div>

            <div className="create-donation-left-div3">
              <textarea
                name="info"
                cols="80"
                rows="2"
                placeholder="Crop Details"
                onChange={(e) => setDetail(e.target.value)}
                
              ></textarea>
            </div>

            <div className="create-donation-left-div4">
              {/* <progress className="progress" value={progress} max="100" /> */}

              <div onClick={(e)=>createrental(e)} className="btn">
                <input type="submit" value="Create" />
                <p>
                  <i className="fa-solid fa-paper-plane"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="create-donation-right">
            <img
              src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1674544571~exp=1674545171~hmac=79c08793a6a7e77875aa17fa919180ccdbeadd9dac0c0d036225fee52cbc0b2e"
              alt=""
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateRental;