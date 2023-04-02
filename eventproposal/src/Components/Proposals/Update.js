import React from 'react'
import { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from "react-icons/fa"
import Header from './VendorHead'
import { FaFilter } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './eventheader.css'
import "./events.css"
const Update = () => {
    const [proposal, setProposal] = useState([]);
 
  
    useEffect(() => {
      let url = "https://dhas-proposal-server.onrender.com/allproposals"
     
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setProposal([...data.proposals])
        })
        .catch((err) => console.log(err))
    }, [])
  
  return (
    <div className='ev'>
      <Header />
      <div className='head'>
        <h1 className='pro'> Proposals </h1>
        <Link to="/events">
        <input type="search" placeholder="Search projects" className='search-bar'  style={{marginLeft:"70%"}}/>
        </Link>
        
        <span className='filter'>
        <Link to="/events"> <FaFilter /></Link>
          <div className="filter-dropdown">
          <Link to="/events"> <select>
              <option value=''>All</option>
              <option value='Birthday'>Birthday</option>
              <option value='Wedding'>Wedding</option>
              <option value='Casual'>Casual</option>
              <option value='Engagement'>Engagement</option>
              <option value='Awareness Campaign'>Awareness Campaign</option>
              <option value='Other'>Other</option>
            </select></Link> 
          </div>
        </span> 
        <div>
          <Link to="/createproposals">
            <button className='create-btn'> CREATE </button></Link>
        </div>


      </div>
      <div id='events-container'>
      {
        proposal.map((proposal, index) => {
          return (
            <div id='container' key={index}>
              {(
                <div className='proposal-card-container'>
        <div className='top-part'>
          <div className='head'>
            <h3 className='main-header'>{proposal.eventName}</h3>
          </div>
          <div className='para'>
            <p className='para-main'>{proposal.description}</p>
          </div>
        </div>
        <div className='lower-part'>
          <div>
            <div><p className='l-h'>Event type</p></div>
            <div><h3 className='l-l'>{proposal.eventType}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Proposal type</p></div>
            <div><h3 className='l-l'>{proposal.proposalType}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>From Date</p></div>
            <div><h3 className='l-l'>{proposal.fromDate}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>To Date</p></div>
            <div><h3 className='l-l'>{proposal.toDate}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Budget</p></div>
            <div><h3 className='l-l'>{proposal.budget}</h3></div>
          </div>
          <div className='icons'>
                  <div className='edit'>
                  <Link to="/events">  <FaTrash id='trash' size={20}  /></Link></div>
                  <div className='bin'> <Link to="/events">  <FaEdit size={20}  /></Link>
                  </div>
                  </div>
        </div>
      </div>
                  
                  
          
              )}
            </div>
          );
        })
        
      }
       
      </div>


    </div>
  )
}

export default Update
