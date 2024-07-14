import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  

  return (
    <header>
        <div class="left">
            <h1>Lundry Services</h1>
        </div>
        <nav>
            <button><i class="ri-menu-line"></i></button>
            <div class="hamburger-menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact us</a>
            </div>
        </nav>
        <div class="right">
            <a href="#">Sign Up</a>
            <a href="#">LOGIN</a>
        </div>
    </header>
  );
};

export default Navbar;
