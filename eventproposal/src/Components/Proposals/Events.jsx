import React, { useState, useEffect } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa"
import Header from './VendorHead'
import { FaFilter } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './eventheader.css'
import "./events.css"
import Edit from './Edit'

const Events = () => {
  const [proposal, setProposal] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState("");
  const [searchType, setSearchType] = useState("");
  // const navigate = useNavigate()
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    let url = "https://dhas-proposal-server.onrender.com/allproposals"
    if (searchType) {
      console.log(searchType)
      url = `https://dhas-proposal-server.onrender.com/allproposals/${searchType}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        setProposal([...data.proposals])
        if (selectedEventType) {
          console.log(selectedEventType)
          const filteredProposals = proposal.filter(
            (proposal) => proposal.eventType === selectedEventType
          );

          console.log(filteredProposals);

          if (filteredProposals.length === 0) {
            alert("No events found")
          }

          setProposal(filteredProposals);

        }

      })
      .catch((err) => console.log(err))
  }, [searchType, selectedEventType])


  const handleDelete = (index, event) => {
    event.preventDefault();
    const proposalId = proposal[index]._id;
    console.log(proposalId)
    fetch(`https://dhas-proposal-server.onrender.com/delete/${proposalId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        const updatedProposals = proposal.filter((_, i) => i !== index);
        setProposal(updatedProposals);
      });
    alert('Proposals deleted successfully')
  };

  const handleEdit = (index, updatedProposal) => {
    const updatedProposals = [...proposal];
    updatedProposals[index] = updatedProposal;
    setProposal(updatedProposals);
    setEditIndex(-1);
  };

  return (
    <div className='ev'>
      <Header />
      <div className='head'>
        <h1 className='pro'> Proposals </h1>
        <input type="search" placeholder="Search projects" className='search-bar' value={searchType} onChange={(e) => setSearchType(e.target.value)} />
        <span className='filter'>
          <FaFilter />
          <div className="filter-dropdown">
            <select value={selectedEventType} onChange={(e) => setSelectedEventType(e.target.value)}>
              <option value=''>All</option>
              <option value='Birthday'>Birthday</option>
              <option value='Wedding'>Wedding</option>
              <option value='Casual'>Casual</option>
              <option value='Engagement'>Engagement</option>
              <option value='Awareness Campaign'>Awareness Campaign</option>
              <option value='Other'>Other</option>
            </select>
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
                {editIndex === index ? (
                  <Edit
                    proposal={proposal}
                    handleEdit={handleEdit}
                    index={index}
                  />
                ) : (
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
                          <FaTrash id='trash' size={20} onClick={(event) => handleDelete(index, event)} /></div>
                        <div className='bin'>  <FaEdit size={20} onClick={() => setEditIndex(index)} />
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

export default Events
