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
    
      <div id='main-box'><h2 className='header'> Create Proposals</h2>
        <button id='add-button-1'>Add</button>
        <label htmlFor="event_name" id='ev'>Event-Name</label>
        <input id='name' value={eventName} onChange={(e) => seteventName(e.target.value)} placeholder='eventName' />

        <label htmlFor="event_place" id='ep'>Place of event</label>
        <select id='place' value={eventplace} onChange={(e) => seteventPlace(e.target.value)} placeholder='eventPlace' name='event_place'>
        <option value="bengaluru">bengaluru</option>
        <option value="nainital">nainital</option>
        <option value="ooty">ooty</option>
        </select>
       
        {/* <input id='event_place' value={eventplace} onChange={(e) => seteventPlace(e.target.value)} placeholder='eventPlace' /> */}
       
        <label htmlFor="proposal_type" id='prop_label'>proposal_type</label>
        <select id='proposalType' value={proposalType} onChange={(e) => setproposalType(e.target.value)} placeholder='proposalType' name='proposal_type'>
          <option value="marriage">marriage</option>       
          <option value="party">party</option>       
          <option value="others">others..</option>       
        </select>
        {/* <input id='proposal_type' value={proposalType} onChange={(e) => setproposalType(e.target.value)} placeholder='proposalType' /> */}

        <label htmlFor="event_type" id='etp'>event_type</label>
        <input id='eventType' value={eventType} onChange={(e) => seteventType(e.target.value)} placeholder='eventType' />

        <label htmlFor="event_class" id="ecls">event_class</label>
        <input id='evess' value={eventClass} onChange={(e) => seteventClass(e.target.value)} placeholder='eventClass' />

        <label htmlFor="budget" id='bd'>budget</label>
        <input id='budget' type="number" value={budget} onChange={(e) => setbudget(e.target.value)} placeholder=' budget ' />

        <label htmlFor="from_date" id='dt'>from_date</label>
        <input id='dateForm' type="date" value={fromDate} onChange={(e) => setfromDate(e.target.value)} placeholder='fromDate' />

        <label htmlFor="to_date" id='tta'>to_date</label>
        <input id='dateTo' type="date" value={toDate} onChange={(e) => settoDate(e.target.value)} placeholder='toDate' />

        <label htmlFor="description" id='des'>description</label>
        <textarea id='description' value={description} onChange={(e) => setdescription(e.target.value)} placeholder='description'></textarea>

        <label htmlFor="foodPreferences" className='fp'>Food_preferences</label>
        <textarea id='food_preferences' value={foodPreferences} onChange={(e) => setfoodPreferences(e.target.value)} placeholder='foodPreferences'> 
        </textarea>
        <label htmlFor="events" id='ets'>events</label>
        <textarea id='events' value={events} onChange={(e) => setevents(e.target.value)} placeholder=' events'></textarea>

        <label htmlFor="images" id='ei'>images</label>
        <input id='image' type="file" onChange={(e) => setimages(e.target.files[0])} multiple />

        <Link to="/events">
          <button id='add_button' onClick={uploadEvent}> ADD </button>
        </Link>
      </div>
    </div>
  )
}

export default CreateProposals
