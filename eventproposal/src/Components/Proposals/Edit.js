import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { FaTimes } from "react-icons/fa"
import axios from 'axios';
const Edit = ({ proposal }) => {
  const navigate = useNavigate();
  const [newProposal, setNewProposal] = useState({
    eventName: proposal.eventName,
    eventPlace: proposal.eventPlace,
    eventType: proposal.eventType,
    proposalType: proposal.proposalType,
    fromDate: proposal.fromDate,
    toDate: proposal.toDate,
    budget: proposal.budget,
    description: proposal.description,
    foodPreferences: proposal.foodPreferences,
    events: proposal.events
  });

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setNewProposal(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const proposalId = proposal._id;
    try {
      const formdata = new FormData();
      for (let key of Object.keys(newProposal)) {
        formdata.append(key, newProposal[key]);
      }

      await axios.put(`https://dhas-proposal-server.onrender.com/update/${proposalId}`, formdata)
      navigate('/update')

    } catch (err) {
      console.log(err);

    }
    console.log(newProposal);

  };

  return (
    <div className="edit-modal">

      <div>
        <section className="edit-form-container">
          <h1 className="proposal-form-heading">Edit Proposal</h1>
          <form onSubmit={handleSubmit}>
            <div className="proposal-form-input-container">
              <div className="proposal-form-column">
                <div className="input-container">
                  <label htmlFor="name">Event Name</label>
                  <input
                    type="text"
                    id='name'
                    name='eventName'
                    placeholder='Name' value={newProposal.eventName} onChange={handleInputValues}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="place">Place of Event</label>
                    <select name="eventPlace" id="place" required value={newProposal.eventPlace} onChange={handleInputValues}>
                      <option value="Select">Select</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                  <div className="input-container">
                    <label htmlFor="proposalType">Proposal Type</label>
                    <select name="proposalType" id="proposalType" required value={newProposal.proposalType} onChange={handleInputValues}>
                      <option value="Select">Select</option>
                      <option value="Venue">Venue</option>
                      <option value="Food">Food</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="eventType">Event Type</label>
                    <select name="eventType" id="eventType" required value={newProposal.eventType} onChange={handleInputValues}>
                      <option value="Select">Select</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Casual">Casual</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Awareness Campaigns">Awareness Campaigns</option>
                      <option value="Other">other</option>
                    </select>
                  </div>
                  <div className="input-container">
                    <label htmlFor="budget">Budget</label>
                    <input
                      type="number"
                      name="budget"
                      placeholder='0000'
                      id="budget"
                      autoComplete="off"
                      required
                      value={newProposal.budget} onChange={handleInputValues}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="dateFrom">From</label>
                    <input
                      type="date"
                      name="fromDate"
                      placeholder='DD-MM-YYYY'
                      id="dateFrom"
                      autoComplete="off"
                      required
                      value={newProposal.fromDate} onChange={handleInputValues}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="dateTo">To</label>
                    <input
                      type="date"
                      name="toDate"
                      placeholder='DD-MM-YYYY'
                      id="dateTo"
                      autoComplete="off"
                      required
                      value={newProposal.toDate} onChange={handleInputValues}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30" rows="10"
                    placeholder='Description' value={newProposal.description} onChange={handleInputValues}
                  ></textarea>
                </div>
              </div>

            </div>
            <div className="proposal-form-btn-container">
              <button>Update</button>
            </div>
          </form>
        </section>

      </div>
    </div>

  )

}

export default Edit;


