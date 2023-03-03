import React from 'react'
import { useState } from 'react';
import { Link } from  "react-router-dom";
// form page for vendor to create proposals
import "./create.css"

const CreateProposals = () => {
const [eventName, seteventName] = useState("");
const [eventplace, seteventPlace] = useState('');
const [proposalType, setproposalType] = useState('');
const [eventType, seteventType] = useState('')
const [eventClass, seteventClass] = useState("");
const [budget, setbudget] = useState('');
const [fromDate, setfromDate] = useState('');
const [toDate, settoDate] = useState('');
const [description, setdescription] = useState('');
const [foodPreferences, setfoodPreferences] = useState('');
const [events, setevents] = useState('');
const [images, setimages] = useState('');

const uploadEvent = () =>{
  const formData = new FormData();
  formData.append('eventName', eventName);
  formData.append('eventPlace', eventplace);
  formData.append('proposalType', proposalType);
  formData.append('eventType', eventType);
  formData.append('eventClass', eventClass);
  formData.append('budget', budget);
  formData.append('fromDate', fromDate);
  formData.append('toDate', toDate);
  formData.append('description', description);
  formData.append('foodPreferences', foodPreferences);
  formData.append('events', events);
  formData.append('images', images)

  // for(let i = 0; i < images.length; i++) {
  //   formData.append('images', images[i]);
  // }

  formData.forEach((val, key) => {
    console.log(key, val);
  })
  //console.log(formData);
  fetch('http://localhost:5000/createproposals', {
    method: 'POST',
    body: formData,
  })
}

  return (

    <div id="containers-prop">
    
      <div id='main-box'><h2> Create Proposals</h2>
        <button id='add-button-1'>Add</button>
        <label htmlFor="event_name">Event-Name</label>
        <input id='event_name' value={eventName} onChange={(e) => seteventName(e.target.value)} placeholder='eventName' />

        <label htmlFor="event_place">Place of event</label>
        <select id='event_place' value={eventplace} onChange={(e) => seteventPlace(e.target.value)} placeholder='eventPlace' name='event_place'>
        <option value="bengaluru">bengaluru</option>
        <option value="nainital">nainital</option>
        <option value="ooty">ooty</option>
        </select>
       
        {/* <input id='event_place' value={eventplace} onChange={(e) => seteventPlace(e.target.value)} placeholder='eventPlace' /> */}
       
        <label htmlFor="proposal_type" id='prop_label'>proposal_type</label>
        <select id='proposal_type' value={proposalType} onChange={(e) => setproposalType(e.target.value)} placeholder='proposalType' name='proposal_type'>
          <option value="marriage">marriage</option>       
          <option value="party">party</option>       
          <option value="others">others..</option>       
        </select>
        {/* <input id='proposal_type' value={proposalType} onChange={(e) => setproposalType(e.target.value)} placeholder='proposalType' /> */}

        <label htmlFor="event_type">event_type</label>
        <input id='event_type' value={eventType} onChange={(e) => seteventType(e.target.value)} placeholder='eventType' />

        <label htmlFor="event_class">event_class</label>
        <input id='event_class' value={eventClass} onChange={(e) => seteventClass(e.target.value)} placeholder='eventClass' />

        <label htmlFor="budget">budget</label>
        <input id='budget' type="number" value={budget} onChange={(e) => setbudget(e.target.value)} placeholder=' budget ' />

        <label htmlFor="from_date">from_date</label>
        <input id='from_date' type="date" value={fromDate} onChange={(e) => setfromDate(e.target.value)} placeholder='fromDate' />

        <label htmlFor="to_date">to_date</label>
        <input id='to_date' type="date" value={toDate} onChange={(e) => settoDate(e.target.value)} placeholder='toDate' />

        <label htmlFor="description">description</label>
        <textarea id='description' value={description} onChange={(e) => setdescription(e.target.value)} placeholder='description'></textarea>

        <label htmlFor="food_preferences">Food_preferences</label>
        <textarea id='food_preferences' value={foodPreferences} onChange={(e) => setfoodPreferences(e.target.value)} placeholder='foodPreferences'> 
        </textarea>
        <label htmlFor="events">events</label>
        <textarea id='events' value={events} onChange={(e) => setevents(e.target.value)} placeholder=' events'></textarea>

        <label htmlFor="images">images</label>
        <input id='images' type="file" onChange={(e) => setimages(e.target.files[0])} multiple />

        <Link to="/allproposals">
          <button id='add_button' onClick={uploadEvent}> ADD </button>
        </Link>
      </div>
    </div>
//     <div className='prop-container'>
//    <div className='main'>
//       <input  value={eventName} onChange={(e)=> seteventName(e.target.value)} placeholder='eventName'/>
//       <input  value={eventplace} onChange={(e)=> seteventPlace(e.target.value)} placeholder='eventPlace'/>
//       <input  value={proposalType} onChange={(e)=> setproposalType(e.target.value)} placeholder='proposalType'/>
//       <input  value={eventType} onChange={(e)=> seteventType(e.target.value)} placeholder='eventType'/>
//       <input  value={eventClass} onChange={(e)=> seteventClass(e.target.value)} placeholder='eventClass'/>
//       <input type="number"  value={budget} onChange={(e)=> setbudget(e.target.value)} placeholder=' budget '/>
//       <input type="date" value={fromDate} onChange={(e)=> setfromDate(e.target.value)} placeholder='fromDate'/>
//       <input type="date" value={toDate} onChange={(e)=> settoDate(e.target.value)} placeholder='toDate'/>
//       <textarea value={description} onChange={(e)=> setdescription(e.target.value)} placeholder='description'></textarea>
//       <textarea value={foodPreferences} onChange={(e)=> setfoodPreferences(e.target.value)} placeholder='foodPreferences'> </textarea>
//       <textarea value={events} onChange={(e)=> setevents(e.target.value)} placeholder=' events'></textarea>
//       <input type="file"  onChange={(e)=> setimages(e.target.files[0])} multiple/>
// <Link to="/allproposals">
//       <button onClick={uploadEvent}> ADD </button></Link>
//     </div>
//     </div>

  )
}

export default CreateProposals


//eventName,  eventPlace, proposalType, eventType, eventClass, budget, fromDate, toDate, description, foodPreferences, events,images