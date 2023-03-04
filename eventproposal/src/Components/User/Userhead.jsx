import React, { useState } from 'react'
import "./userhead.css"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    // perform logout action here, e.g. clear local storage, reset state, etc.
    setLoggedIn(false)
    navigate('/loginuser', { replace: true })
  }

  return (
    <div className='headt'>
      <div className='textt'>
        <span className='logot'> LOGO </span>
        <div className='name'>
          {loggedIn ? (
            <><Link to='/loginuser' style={{ textDecoration: 'none' }}>
            <span className='vendort'>User name</span>
          </Link>
        
              <span>
                <img className='imgt' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt="head" />
              </span>
              <button className='logoutt' onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to='/loginuser' style={{textDecoration: "none"}}>
              <span className='vendor'>Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
