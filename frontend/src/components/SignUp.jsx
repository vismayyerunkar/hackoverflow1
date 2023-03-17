import React, { useState } from "react";
import "../styles/signup.css";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [adhar, setadhar] = useState("");
  const [password, setPassword] = useState("");
  const [role , setRole] = useState("");
  const [document, setDocument] = useState("");
  const [place , setPlace] = useState("")



  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const res = await axios.post('http://172.17.29.30:5000/api/v1/u/signup', {
     name, contact, adhar, password, role, location: place
    })
    // console.log(res)
    localStorage.setItem('token', res.data.token);
    navigate('/')
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !contact || !email || !password || !role) {
//       toast.success("Enter all field value");
//       return;
//     }

//     if (password.length < 8) {
//       toast.success("Password must be greater than 8");
//       return;
//     }

//     const res = await axios
//       .post(`http://localhost:4000/api/signup`, {
//         name,
//         contact,
//         email,
//         password,
//         role
//       })
//       .then((res) => {
//         setCookie("token", res.data.token);
//         toast.success(`Hello ${res.data.createdUser.name}! Welcome`);
//         sessionStorage.setItem('user' , JSON.stringify(res.data.createdUser));
//         // getuser();
//         navigate("/");
        
//       })
//       .catch((err) => {
//         toast.success(`Enter correct credentail`);
//         console.log(err);
//       });
//   };

  return (
    <>
      <form>
        <div className="signin-div">
          <div className="signin-left">
            <div className="signin-left-upper">
              <h3>Sign Up</h3>
            </div>
            <div className="signin-left-lower">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                onChange={(e) => setContact(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Enter Location"
                name="place"
                onChange={(e) => setPlace(e.target.value)}
                required
              />

              <input
                type="adhar Number"
                name="adhar"
                placeholder="Enter adhar number"
                required
                onChange={(e) => setadhar(e.target.value)}
              />

              {/* <input
              type="file"
              name="document"
              placeholder="verification docs"
              onChange={(e) => setDocument(e.target.file)}
              required
              className="file-input"/> */}

              <select name="role" required onChange={(e) => setRole(e.target.value)}>
                <option>Select Role</option>
                <option value="user">Farmer</option>
                <option value="organisation">Cunsumer</option>
              </select>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button onClick={handleSubmit}>Sign up</button>

              <Link className="pre-link" to="/login">
              <small className="lower-small">
                Already have an account ? <a href="/login"> LOGIN </a>
              </small>
              </Link>
              
            </div>
          </div>

          <div className="signin-right">
            <img
              src="https://media.istockphoto.com/id/1312423107/vector/stealing-data-concept-flat-vector-illustration-online-registration-form-login-to-social.jpg?s=612x612&w=0&k=20&c=7Trftif8xV9FCDO5B4M7JiBpZUFlXo51m5lfI6hYCog="
              alt="sign in Logo"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;