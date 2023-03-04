import img2 from "../../Assets/logo.jpg";
import img1 from "../../Assets/bg party.jpg";
import { Link } from 'react-router-dom'
import { useState } from "react"
import "./userlogin.css"
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const [data , updatelogin] = useState({contact:"" , password:""})
    const [msg , updatemsg] = useState()
    const naviagte = useNavigate()
    const handlelogin = async () =>{
        const formdata = new FormData()
        formdata.append("contact", data.contact)
        formdata.append("password", data.password)
        const response = await fetch("http://localhost:5000/loginuser", {
          method: 'POST',
          body: formdata
        })
        const resp = await response.json()
        if(resp.status === "failure"){
            updatemsg(<div className="msg2">user not found</div>)
        }else if(resp.status === "failure2"){
            updatemsg(<div className="msg2">Invalid Password</div>)
        }else{
            naviagte("/")
        }
    }

const handle = () =>{
    naviagte("/registeruser")
}

const handleSymbol =()=>{
 naviagte("/loginvendor")
}

    return(
   
         <div className="form2">
        <img src={img1} alt='party' className='party'/>
        <img src={img2} alt='symbol' onClick={handleSymbol} className='symbol'/> 
         <div className="formContainer">
        <Link to="/loginvendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/loginuser"><button className='user-btn'>User</button> </Link>
     <div className='signup-text'>Sign in Your Account </div>
    <div className='input-boxes'>

         <input type="number" className='phone-input' placeholder="Enter your contact" value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  />
       
         <input type="password" className='password-input' placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} /> 
         </div>

        <p className='forgot-text'>Forgot Password.?</p>
        <div className="link-buttons">      
         <Link to="/registeruser" className='create-user' onClick={handle} >Create Account</Link>
        <span ><button  onClick={handlelogin}  className="signt">Login</button></span>
        <div className="msg"> {msg}
        </div>
        
        
         </div>
        </div>
         </div>
    )
}

export default Login
