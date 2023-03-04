import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./vendorlogin.css"
import { Link } from "react-router-dom";
import { useSignIn } from 'react-auth-kit';
import img2 from "../../Assets/logo.jpg";
import img1 from "../../Assets/bg party.jpg";
const VendorLogin = () => {
  const [data , updatelogin] = useState({contact:"" , password:""})
    const [msg , updatemsg] = useState();
    const Login = useSignIn();

    const naviagte = useNavigate()

    const handlelogin = async () =>{

      localStorage.setItem("contact")
      localStorage.setItem("password")
      const formdata = new FormData()
      formdata.append("contact", data.contact)
      formdata.append("password", data.password)
      const response = await fetch("http://localhost:5000/loginvendor", {
        method: 'POST',
        body: formdata
      })
  
      Login()
      const resp = await response.json()
      if(resp.status === "failure"){
          updatemsg(<div className="msg2">Vendor not found</div>)
      }else if(resp.status === "failure2"){
          updatemsg(<div className="msg2">Invalid Password</div>)
      }else{
          naviagte("/events")
      }
  
  
  }
  const handle = () =>{
    naviagte("/registervendor")
}


const handleSymbol =()=>{
naviagte("/loginvendor")
}
  return (
    <div className="form2">
        <img src={img1} alt='party' className='party'/>
      <img src={img2} alt='symbol' onClick={handleSymbol} className='symbol'/> 
    <div className="formContainer">
      <Link to="/loginvendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/loginuser"><button className='user-btn'>User</button> </Link>

       
        <div className='signup-text'>Sign-in Your Account </div>
        <div className='input-boxes'>
    <input type="number" className='phone-input' placeholder='Phone...' value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  ></input>
   
    <input type="password" className='password-input' placeholder='Password...' value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} ></input> 
    </div> 
    <p className='forgot-text'>Forgot Password.?</p>
    <div className="link-buttons">      
    <Link to="/registeruser" className='create-user' onClick={handle} >Create Account</Link>
    <span ><button  onClick={handlelogin}  className="sign-in">Login</button></span>
    <div className='msg'>{msg}
    </div>
    <div>{localStorage.getItem("contact")}</div>
    </div>
    </div>
    </div>
    // <section className="form2">
      
    // <div className="loginform">
    
    // <input type="number" placeholder="Enter your contact" value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  ></input>
   
    // <input type="password" placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} ></input>       
    // <button className="btn" onClick={handlelogin} id="login">LOGIN</button>
    // {msg}
    // <button className="btn" onClick={handle} id="des" >Don't have an account? Register</button>
    // </div>
    // </section>
  )
}

export default VendorLogin;
