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
      console.log(data)
      getProposal(data)
    })
    .catch((err)=>console.log(err))
    console.log(proposal)
  }, [proposal])

  return (
    <div>
      <div className='allproposals'>
      {proposal?.proposals?.map?.((proposal,index)=>{
        return(
          <div className='container' key={index}>
          <div> <img src={`http://localhost`} alt="proposal" /></div>
          <div>{proposal.eventName}</div>
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
 //<div> <img src={} alt="proposal" /></div>