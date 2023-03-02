import React from 'react'

const Register = () => {
  return (
    <div>
    <div className='container1'> 
    <div className='user-register' style={{border: "1px solid black"}}>
      
      <input type="text" placeholder='Name' className='user-fields'/>
      
      <input type="email" placeholder='Email' className='user-fields'/>
      
      
      <input type= "number" placeholder='Contact' className='user-fields'/>

      <input type="password" placeholder='Password' className='user-fields'/>

      <input type="password" placeholder='Confirm Password' className='user-fields'/>
      
      <button>REGISTER </button>


      
    </div>
    </div>
    </div>
  )
}

export default Register
