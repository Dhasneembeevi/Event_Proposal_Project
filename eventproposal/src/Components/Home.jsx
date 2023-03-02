import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <Link to="/loginvendor"> Vendor </Link> 
      <Link to="/loginuser"> User </Link>
    </div>
  )
}

export default Home;
