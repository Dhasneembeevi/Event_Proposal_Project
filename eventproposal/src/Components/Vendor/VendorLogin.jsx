import React from 'react';
import "../css/vendorlogin.css"
import {Link} from "react-router-dom";
import img1 from "../../assets/party.png";
import img2 from "../../assets/symbol.png";

const Login = () => {
  return (
    <div className='vendorlogin'>
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

export default Login
