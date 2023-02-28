import React from 'react'
import { useState, useEffect } from 'react'
// display proposals created by vendor

const DisplayProposals = () => {
  const [proposal, getProposal] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/allproposals")
    .then((res)=>{
      res.json()
    })
    .then((data)=>{
      getProposal(data)
    })
    .catch((err)=>console.log(err))
  }, [proposal])

  return (
    <div>
      <div className='allproposals'>
      {proposal?.proposals?.map?.((proposal,index)=>{
        return(
          <div className='container' key={index}>
          <div> <img src={} alt="proposal" /></div>
          <div>{proposal.vendorName}</div>
          <div> {proposal.budget}</div>
          <div>{proposal.place}</div>
          </div>
        )
      })}
      
      </div>
    </div>
  )
}

export default DisplayProposals
