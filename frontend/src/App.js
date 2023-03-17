import './styles/App.css';
import Home from './components/Home.js'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import MarketPlace from './components/MarketPlace';
import Rental from './components/Rental';
import Updates from './components/Updates';
import { Community } from './components/Community';
import { useEffect } from 'react';
import Profile from './components/Profile';
import RentalMarket from './components/RentalMarket';
import CreateRental from './components/CreateRental';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CropCard from './components/CropCard';
import CreateMarket from './components/CreateMarket';


function App() {

  const navigate = useNavigate();
  const location = useLocation()


  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(location.pathname === '/login' || location.pathname === '/signup'){
      if(token){
        navigate('/');
      }
    }else if(!token){
      navigate('/');
    }
  },[location.pathname]);
  
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/marketplace" element={<MarketPlace/>}/>
            <Route path="/rental" element={<RentalMarket/>}/>
            {/* <Route path="/updates" element={<Updates/>}/> */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/createRental" element={<CreateMarket/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/croprequest" element={<CreateRental/>}/>
        </Routes>
    </div>
  );
}

export default App;
