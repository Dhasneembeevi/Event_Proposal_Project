import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const UserLogin = () => {

const [data, setData]= useState({ contact: "" , password: ""})

const navigate = useNavigate();

const handleLogin = async() => {
  const formData = new FormData();
  formData.append('contact', data.contact);
  formData.append('password', data.password);
  const response = await fetch('http://localhost:5000/api/auth/loginuser', {
    method: 'POST',
    body: formData
  });
  console.log(formData)
  const resp = await response.json();
  if(resp.status === 'failure'){
    toast.error("contact was not found")
  }
  else if(resp.status === 'failure2'){
    toast.error(" Password is Incorrect" )
  }
  else{
    navigate('/allproposals')
  }

}

    return (
      <div className='user-login'>
        <h1>Login</h1>
        <form>
         
          <input type="text"  placeholder='Contact' value={data.contact} onChange={(e)=>{setData({...data, contact: e.target.value})}} />
        
          <input type="password" placeholder='Password' value={data.password} onChange={(e)=>{setData({...data, password: e.target.value})}}/>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    )

}

export default UserLogin;


