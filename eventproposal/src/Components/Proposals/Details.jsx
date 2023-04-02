
import {  useNavigate, useLocation } from 'react-router-dom';
import Userhead from "../User/header/Userhead";

import './details.css';
import { Link } from 'react-router-dom'
import Selected from './Selected';


const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const proposal = location.state?.proposal;

  return (
    
    <div>
      <Userhead />
      {proposal && (
        <div className="main">
          <h4 style={{marginLeft:"5%", marginTop:"1%"}}> Proposal {proposal.eventName} Contract </h4>{' '}
          <Link to="/selected">
        <button id='sel'> Select </button>
      
        </Link>
          <div className="allproposals">
            <div id="ven-details">
              <div id="main-ig">
                {proposal.images && (
                  <div id="ven-img">
                    <img
                      src={`https://event-proposal-project.onrender.com/images/${proposal.images[0]}`}
                      alt="event" id="img"
                    />
                  </div>
                )}
                
              </div>
              <div id="ven-id" > ID : 001 </div>
              <div id='details-con'> 
              
              <div id="ven-name" >Name: {proposal.eventName}</div>
              <div id="email">Email: </div>
              <div id="frmdte">Start Date: {proposal.fromDate}</div>
              <div id="tdat"> End Date {proposal.toDate}</div>
              <div id="etp">Event Type: {proposal.eventType}</div>
              <div id="evcl">Event Class: {proposal.eventClass}</div></div>
              
            </div>
            <div id="ven-ar" style={{fontSize: "larger", fontWeight:"bold"}}>
           
              Venue and Arrangements : {proposal.description}
            </div>
            <div id="fdp"  style={{fontSize: "larger", fontWeight:"bold"}}>Food Preferences : {proposal.foodPreferences}</div>
            <div id="mul-images"  style={{fontSize: "larger", fontWeight:"bold"}}>
              My albums :<img src={`https://dhas-proposal-server.onrender.com/images/${proposal.images}`} alt="random" style={{width
              :"30%" , marginBottom: "10px"}}
               />
              <img src="https://media.istockphoto.com/id/1281090402/photo/happy-new-year-to-all.jpg?s=612x612&w=0&k=20&c=zJB3jPor4WyNt3cKsfmzJufmH1CueAg7Tzlk7DNZtHM=" alt="fake" style={{width
            :"30%" ,marginBottom: "10px"}}/>
              <img src='https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.jpg?s=612x612&w=0&k=20&c=BG0BHvW98AiLFyhiNy3NzlPZlGTUwHS-I8iYVvWmR78=' alt='fake' style={{width
              :"30%",marginBottom: "10px"}}/>


            </div>
            <div id="con"  style={{fontSize: "larger", fontWeight:"bold"}}>
              Contacts :
              <span>Contact 1 </span>
              <span> +91 XXXXXXXXXX</span>
              <span>Contact 2</span>
              <span> +91 XXXXXXXXXX</span>
              <span>Contact 3</span>
              <span> +91 XXXXXXXXXX</span>
            </div>
            <div id="desc-ev"  style={{fontSize: "larger", fontWeight:"bold"}}>Events: {proposal.events}</div>
          </div>
        </div>
      )}
      
    </div>
  
  );
};

export default Details;
