import React from 'react';
import icon from "../images/icon.png";
import "../css/navbar.css";
import 'boxicons';

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={icon} alt="Uber-Icon" className="logo"/>
            <ul className="menu menu-left">
              <li><a href="">Ride</a></li>
              <li><a href="">Drive</a></li>
              <li><a href="">Business</a></li>
              <li><a href="">About</a></li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul className="menu menu-right">
                <li><box-icon name='globe' animation='spin' color='#ece9e9' ></box-icon><a href="">EN</a></li>
                <li><a href="">Help</a></li>
                <button className="btn-sign">Sign up</button>
                <button className="btn-login">Login</button>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
