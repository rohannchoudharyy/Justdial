import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <ul className="menu-items">
            <li><NavLink to="/hiring">Hiring</NavLink></li>
            <li><NavLink to="/investor">Investor</NavLink></li>
            <li><NavLink to="/leads">Leads</NavLink></li>
            <li><NavLink to="/advertise">Advertise</NavLink></li>
            <li><NavLink to="/listing">Listing</NavLink></li>
        </ul>
        <Link to="/">
        <img src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" alt="" className="logo" />
        </Link>
    </div>
</nav>
  )
}

export default Navbar