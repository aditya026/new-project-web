import React, { useState, useEffect } from 'react';
import { IoMdMenu } from "react-icons/io";
import './navbar.css'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar-main'>
      <div className='nav01'>
        <img src="logo.png" alt="Logo" />
      </div>
      {!isMobile && (
        <>
          <div className='nav02'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>
          <div className='nav03'>
            <button>Login</button>
          </div>
        </>
      )}
      {isMobile && (
        <div className='nav-mobile'>
          <IoMdMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
