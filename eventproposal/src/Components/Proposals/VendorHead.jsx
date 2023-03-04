import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform logout logic here
    // ...
    navigate('/loginvendor', { replace: true }); // navigate to login page without adding to the history stack
  };

  return (
    <div className='headt'>
      <div className='textt'>
        <Link to='/loginvendor' style={{ textDecoration: 'none' }}>
          <span className='logot'>LOGO</span>
        </Link>
        <div className='name'>
          <Link to='/loginvendor' style={{ textDecoration: 'none' }}>
            <span className='vendort'>Vendor Name</span>
          </Link>
          <span>
            <img
              className='imgt'
              src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
              alt='head'
            />
          </span>
          <button className='logoutt' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

