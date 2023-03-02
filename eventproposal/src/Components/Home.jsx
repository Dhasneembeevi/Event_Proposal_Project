import React from 'react';
import "../Components/css/home.css";
import img1 from "../assets/party.png";
import img2 from "../assets/symbol.png";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className='home'>
      <img src={img1} alt='party' className='party'/>
      <img src={img2} alt='symbol' className='symbol'/>
      <div className='formContainer'>
        <button className='vendor-btn'>Vendor</button>
        <button className='user-btn'>User</button>
        <div className='signup-text'>Sig in Your Account </div>
        <div className='input-boxes'>
          <input className='phone-input' placeholder='Phone...'/>
      <input className='password-input' placeholder='Password...'/>
        </div>
      
      <p className='forgot-text'>Forgot Password.?</p>
      <Link className="link-buttons"> 
      <p className='create-user'>Create Account</p>
      <span ><button className='sign-in'>Sign In</button></span>
      </Link>
     
      </div>
     
    </div>
  )
}

export default Home;
