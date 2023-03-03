import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// display proposals created by vendor
import "./display.css"
import Header from "./Header";
import img3 from "../../Assets/bg party.jpg";
const DisplayProposals = () => {
  const [proposal, getProposal] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/allproposals")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      getProposal(data)
    })
    .catch((err)=>console.log(err))
    //console.log(proposal)
  }, [])

  return (
    <div>
 
    <Header/>
    <img src={img3} id="image" alt="user" />
    <Link to="/details" className='link' style={{textDecoration:"none"}}>
      <div className='allproposals'>
      {proposal?.proposals?.map?.((proposal,index)=>{
        return(
          <div className='container' key={index}>
         <div ><img src='https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg' alt='event'/></div>
          <div>{proposal.eventName}</div>
          <div> {proposal.budget}</div>
          <div>{proposal.eventPlace}</div>
  
          </div>
        )
      })}
      
      </div>

      </Link>
    </div>
  )
}

export default DisplayProposals;