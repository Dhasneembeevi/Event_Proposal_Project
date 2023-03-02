import React from 'react'
import { useState } from 'react';
import { Link } from  "react-router-dom";
// form page for vendor to create proposals

const CreateProposals = () => {
const [eventName, seteventName] = useState("");
const [eventplace, seteventPlace] = useState('');
const [proposalType, setproposalType] = useState('');
const [eventType, seteventType] = useState('')
const [eventClass, seteventClass] = useState("");
const [budget, setbudget] = useState('');
const [fromdate, setfromdate] = useState('');
const [todate, settodate] = useState('');
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
  formData.append('fromdate', fromdate);
  formData.append('todate', todate);
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
    <div>
      <input  value={eventName} onChange={(e)=> seteventName(e.target.value)} placeholder='eventName'/>
      <input  value={eventplace} onChange={(e)=> seteventPlace(e.target.value)} placeholder='eventPlace'/>
      <input  value={proposalType} onChange={(e)=> setproposalType(e.target.value)} placeholder='proposalType'/>
      <input  value={eventType} onChange={(e)=> seteventType(e.target.value)} placeholder='eventType'/>
      <input  value={eventClass} onChange={(e)=> seteventClass(e.target.value)} placeholder='eventClass'/>
      <input type="number"  value={budget} onChange={(e)=> setbudget(e.target.value)} placeholder=' budget '/>
      <input type="date" value={fromdate} onChange={(e)=> setfromdate(e.target.value)} placeholder='fromDate'/>
      <input type="date" value={todate} onChange={(e)=> settodate(e.target.value)} placeholder='toDate'/>
      <textarea value={description} onChange={(e)=> setdescription(e.target.value)} placeholder='description'></textarea>
      <textarea value={foodPreferences} onChange={(e)=> setfoodPreferences(e.target.value)} placeholder='foodPreferences'> </textarea>
      <textarea value={events} onChange={(e)=> setevents(e.target.value)} placeholder=' events'></textarea>
      <input type="file"  onChange={(e)=> setimages(e.target.files[0])} multiple/>
<Link to="/allproposals">
      <button onClick={uploadEvent}> ADD </button></Link>
    </div>
  )
}

export default CreateProposals


//eventName,  eventPlace, proposalType, eventType, eventClass, budget, fromDate, toDate, description, foodPreferences, events,images