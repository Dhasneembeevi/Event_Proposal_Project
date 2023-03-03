import React from 'react'
import { useState } from 'react';
import { Link } from  "react-router-dom";
// form page for vendor to create proposals
import "../Components/css/home.css"

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
   <div id='main-box'>
    <button id='add-button-1'>Add</button>
      <input id='event_name'  value={eventName} onChange={(e)=> seteventName(e.target.value)} placeholder='eventName'/>
      <input id='event_place' value={eventplace} onChange={(e)=> seteventPlace(e.target.value)} placeholder='eventPlace'/>
      <input  id='proposal_type' value={proposalType} onChange={(e)=> setproposalType(e.target.value)} placeholder='proposalType'/>
      <input  id='event_type' value={eventType} onChange={(e)=> seteventType(e.target.value)} placeholder='eventType'/>
      <input  id='event_class' value={eventClass} onChange={(e)=> seteventClass(e.target.value)} placeholder='eventClass'/>
      <input id='budget' type="number"  value={budget} onChange={(e)=> setbudget(e.target.value)} placeholder=' budget '/>
      <input  id='from_date' type="date" value={fromDate} onChange={(e)=> setfromDate(e.target.value)} placeholder='fromDate'/>
      <input  id='to_date' type="date" value={toDate} onChange={(e)=> settoDate(e.target.value)} placeholder='toDate'/>
      <textarea id='description' value={description} onChange={(e)=> setdescription(e.target.value)} placeholder='description'></textarea>
      <textarea id='food_preferences' value={foodPreferences} onChange={(e)=> setfoodPreferences(e.target.value)} placeholder='foodPreferences'> </textarea>
      <textarea id='events' value={events} onChange={(e)=> setevents(e.target.value)} placeholder=' events'></textarea>
      <input id='images' type="file"  onChange={(e)=> setimages(e.target.files[0])} multiple/>
<Link to="/allproposals">
      <button id='add_button' onClick={uploadEvent}> ADD </button></Link>
    </div>
    </div>

  )
}

export default CreateProposals


//eventName,  eventPlace, proposalType, eventType, eventClass, budget, fromDate, toDate, description, foodPreferences, events,images
