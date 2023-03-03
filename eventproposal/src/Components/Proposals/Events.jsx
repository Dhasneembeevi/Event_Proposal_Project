import React from 'react'
import Eventheader from './Eventheader'
import "./events.css";
import { useState, useEffect } from 'react'
import { FaTrash } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import Header from './Header';

const Events = () => {
  const [proposal, getProposal] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allproposals")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        getProposal(data)
      })
      .catch((err) => console.log(err))
    //console.log(proposal)
  }, [])

  return (
    <div className='ev'>
      <Header />
      <Eventheader />

      <div id='events-container'>
        {proposal?.proposals?.map?.((proposal, index) => {
          return (
            <div id='container' key={index}>

              <h4 id='ename'>{proposal.eventName}</h4>
              <p id='description'>{proposal.description}</p>

              <div id='et'>
                <span id='eventtype'>Event Type </span><span className='proty'>     Proposal Type</span> <span className='fdate'> From Date</span> <span className='tdate'>To Date</span>
                <span id='bud'>Budget</span> </div>

             
                <div id='fi-ev'>
                  <span >{proposal.eventType}</span>
                  <span > {proposal.proposalType}</span>
                  <span >{proposal.fromDate}</span>
                  <span >{proposal.toDate}</span>
                  <span >{proposal.budget}</span>
                </div>
               

                <div id='icon'>
                <FaTrash id='trash' />
                <FaEdit />
              </div>
            </div>
          )
        })} 

      </div>
    </div>
  )

}
export default Events
