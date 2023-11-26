import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="brand">Lasso</div>
      <ul>
        <li><a href="#home" onClick={()=>{window.location.replace('/')}}>Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul>
        <li><FontAwesomeIcon icon={faSun} style={{ color: "#e6e6e6" }} /></li>
      </ul>
    </nav>
  );
}

export default NavBar;
