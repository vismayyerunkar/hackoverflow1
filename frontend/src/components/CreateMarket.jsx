import React, { useState } from "react";
import "../styles/createRental.css"

function CreateMarket() {
  const [toolName, setToolName] = useState("");
  const [phone, setPhone] = useState(0);
  const [rent, setRent] = useState();
  const [image, setImage] = useState();
  const [location , setLocation] = useState("");

  return (
    <>
      <form action="#">
        <div className="create-donation-main">
          <div className="create-donation-left">
            <div className="create-donation-left-div1">
              <h2>Create Market Request</h2>
              <p>
                <i className="fa-solid fa-envelope"></i>
              </p>
            </div>

            <div className="create-donation-left-div2">
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Enter Tool Name"
                  name="tool"
                  onChange={(e) => setToolName(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
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
                  placeholder="Enter Rent per Day"
                  name="rent"
                  onChange={(e) => setRent(e.target.value)}
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
                  onChange={(e) => setImage(e.target.file)}
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

            {/* <div className="create-donation-left-div3">
              <textarea
                name="info"
                cols="80"
                rows="2"
                placeholder="Crop Details"
                onChange={(e) => setDetail(e.target.value)}
                
              ></textarea>
            </div> */}

            <div className="create-donation-left-div4">
              {/* <progress className="progress" value={progress} max="100" /> */}

              <div className="btn">
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

export default CreateMarket;