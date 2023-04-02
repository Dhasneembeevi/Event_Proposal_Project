import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userhead from "../User/header/Userhead";
import "./display.css";
//import img5 from "../../Assets/mainpage.jpg"

const DisplayProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(false)
  const navigate = useNavigate();
  

  const fetchProposals = async () => {
    fetch("https://dhas-proposal-server.onrender.com/allproposals")
      .then((res) => res.json())
      .then((data) => {
        setProposals(data.proposals);
      })
      .catch((err) => console.log(err));
  };

  const handleProposalClick = (proposal) => {
    setSelectedProposal(proposal);
    navigate("/details", { state: { proposal: proposal } });
  };
 

useEffect(()=>{
  fetchProposals();
},[])

  return (
    <div>
      <Userhead />
      <img src="https://img.freepik.com/free-vector/party-crowd-silhouettes-dancing-nightclub_1048-11557.jpg" alt="main" id="main"/>
      <div className="allproposals">
        
        {proposals.map((proposal, index) => {
          return (
            <div
              className="card-container"
              style={{ textDecoration: "none" }}
              key={index}
              onClick={() => handleProposalClick(proposal)}
            >
              <div className="img-container">
                {proposal.images && (
                  <img
                    src={`https://dhas-proposal-server.onrender.com/images/${proposal.images[0]}`}
                    alt={proposal.eventName} className="eventpic"
                  />
                )}
                <div className="text-container">
                <h2 id="en">{proposal.eventName}</h2>
                <h4>{proposal.budget}</h4>
                <p>{proposal.eventPlace}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProposals;
