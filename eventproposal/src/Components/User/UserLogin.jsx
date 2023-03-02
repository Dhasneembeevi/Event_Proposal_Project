
import { useState } from "react"

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
            naviagte("/allproposals")
        }
    }
const handle = () =>{
       naviagte("/registeruser")
}

    return(
        <section className="form2">
      
        <div className="loginform">
        
        <input type="number" placeholder="Enter your contact" value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  ></input>
       
        <input type="password" placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} ></input>       
        <button className="btn" onClick={handlelogin} id="login">LOGIN</button>
        {msg}
        <button className="btn" onClick={handle} id="des" >Don't have an account? Register</button>
        </div>
        </section>
    )
}

export default Login
// // import { useState } from "react"

// // import { useNavigate } from "react-router-dom"

// // const Login = () =>{
// //     const [data , updatelogin] = useState({contact:"" , password:""})
// //     const [msg , updatemsg] = useState()
// //     const naviagte = useNavigate()
// //     const handlelogin = async () =>{
// //         const formdata = new FormData()
// //         formdata.append("contact", data.email)
// //         formdata.append("password", data.password)
// //         const response = await fetch("http://localhost:5000/loginuser", {
// //           method: 'POST',
// //           body: formdata
// //         })
// //         const resp = await response.json()
// //         if(resp.status === "failure"){
// //             updatemsg(<div className="msg2">user not exists</div>)
// //         }else if(resp.status === "failure2"){
// //             updatemsg(<div className="msg2">Incorrect Password</div>)
// //         }else{
// //             naviagte("/allproposals")
// //         }
// //     }
// //     const handle = () =>{
// //       naviagte("/registeruser")
// // }


// //     return(
// //         <section className="form2">
       
// //         <div className="loginform">
       
// //         <input type="number" placeholder="Enter your email" value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }} ></input>
       
// //         <input type="password" placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} ></input>       
// //         <button  onClick={handlelogin} >LOGIN</button>
// //         {msg}
// //         <button className="btn" onClick={handle} id="des" >Don't have an account? Register</button>
// //         </div>
// //         </section>
// //     )
// // }

// // export default Login