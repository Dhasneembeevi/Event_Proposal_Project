import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header';
// summary page --> proposals selected by user

const Details = () => {
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
        <h1>one Proposal's details pages summary</h1>
        <Header/>
          <div className='allproposals'>
          {proposal?.proposals?.map?.((proposal,index)=>{
            return(
              <div className='container' key={index}>
             <div ><img src='https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg' alt='event'/></div>
              <div>{proposal?.proposals?.proposal.eventName}</div>
              <div> {proposal.budget}</div>
              <div>{proposal.eventPlace}</div>
              <div>{proposal. foodPreferences}</div>
              <div>{proposal.events}</div>
              <div>{proposal.images}</div>
              <div>contact : 9898989898</div>
              </div>
            )
          })}
          
          </div>
        </div>
      )
    }

export default Details
