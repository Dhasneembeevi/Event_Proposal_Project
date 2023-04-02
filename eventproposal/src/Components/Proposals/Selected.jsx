import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Userhead from "../User/header/Userhead";
import "./display.css";
import img4 from "../../Assets/bg party.jpg"

const DisplayProposals = () => {
  const [proposals, setProposals] = useState([]);


  useEffect(() => {
    fetch("https://dhas-proposal-server.onrender.com/allproposals")
      .then((res) => res.json())
      .then((data) => {
        setProposals(data.proposals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Userhead />
      <h1 style={{ marginLeft: "13%", fontWeight: "bolder", marginTop: "2%" }}> Selected </h1>
      <div className="card-container" style={{ textDecoration: "none", marginLeft: "7%", width: "17%" }}>
        <div className="img-container">
          <img src={img4} alt="selected" className="eventpic"/>
          <div className="text-container" style={{ justifyContent: "center" }}>
            <h2 id="en">Wedding</h2>
            <h4>1200000</h4>
            <p>Bangalore</p>
            <Link to="/">
            <button className="delete-button"> Delete</button></Link>
          </div>
        </div>
      </div>

      <div className="allproposals">
      {proposals.map((proposal, index) => {
        return (
          <div
            className="card-container"
            style={{ textDecoration: "none" }}
            key={index}
            
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
