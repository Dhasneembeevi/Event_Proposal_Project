import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./vendorregister.css"
import img1 from "../../Assets/bg party.jpg";
import { Link } from "react-router-dom"
import img2 from "../../Assets/logo.jpg";


const Register = () => {

    const [data, updatereg] = useState({ username: "" , email: "" , contact :"",password: "" , confirmPassword:""})
    const [msg, updatemsg] = useState()
    const navigate = useNavigate()
    const handlereg = async () => {
      if(data.username.length === 0){
        updatemsg(<div className="new2">Please enter your name</div>)
      }
      else if(data.password.length < 6){
        updatemsg(<div className="new2">Password must be min 6 characters</div>)
      }
      else{
      const formdata = new FormData()
      formdata.append("username", data.username)
      formdata.append("email", data.email)
      formdata.append("contact", data.contact)
      formdata.append("password", data.password);
      formdata.append("confirmpassword", data.confirmPassword)
      const response = await fetch("http://localhost:5000/registervendor", {
        method: 'POST',
        body: formdata
      })
      const resp = await response.json()
      if (resp.status === "failure") {
        updatemsg(<div className="new2">User already exists</div>)
      }
      else{
        navigate('/events')
      }
    }
  }
  const handle = () =>{
    navigate("/loginuser")
  }
  const handleSymbol =()=>{
    navigate("/loginvendor")
  }
  
    return (
      <div className='register-container'>
        <img src={img1} alt='party' className='party'/>
      <img src={img2} alt='symbol' onClick={handleSymbol} className='symbol'/> 
      <div className="registerContainer">
      <Link to="/registervendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/registeruser"><button className='user-btn'>User</button> </Link>

      <div className='signup-text'>Register in Your Account </div>
      <div className='input-box' >     <input type="text" placeholder='Name' className='phone-input' value={data.username} onChange={(e) => { updatereg({ ...data, username: e.target.value }) }} />
        
        <input type="email" placeholder='Email' className="email-input" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }}/>
        
        
        <input type= "number" placeholder='Contact'  value={data.contact} onChange={(e)=>{ updatereg({...data, contact: e.target.value})}} className="email-input"/>
  
        <input type="password" placeholder='Password' className='password-input' value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }}/>
  
        <input type="password" placeholder='Confirm Password' className='confirm-password-input' value={data.confirmPassword} onChange={(e) => { updatereg({ ...data, confirmPassword: e.target.value }) }}/>
        <Link to="/loginvendor" className='login-user' onClick={handle} >Login </Link>
    <Link to="/loginvendor">
    <span > <button onClick={handlereg} className="register" >REGISTER </button></span>
    </Link>
        {msg}
         </div>      
    
  
        </div>
      </div>
      // <div className='container1'> 
      // <div className='user-register' style={{border: "1px solid black"}}>
        
      //   <input type="text" placeholder='Name' className='user-fields' value={data.username} onChange={(e) => { updatereg({ ...data, username: e.target.value }) }} />
        
      //   <input type="email" placeholder='Email' className='user-fields'  value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }}/>
        
        
      //   <input type= "number" placeholder='Contact' value={data.contact} onChange={(e)=>{ updatereg({...data, contact: e.target.value})}} className='user-fields'/>
  
      //   <input type="password" placeholder='Password' className='user-fields' value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }}/>
  
      //   <input type="password" placeholder='Confirm Password' className='user-fields' value={data.confirmPassword} onChange={(e) => { updatereg({ ...data, confirmPassword: e.target.value }) }}/>
        
      //   <button onClick={handlereg} >REGISTER </button>
      //   {msg}
        
  
        
      // </div>
      // </div>
      
    )
  }

export default Register
