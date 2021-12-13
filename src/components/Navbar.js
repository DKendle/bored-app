import React from 'react'
import {NavLink} from 'react-router-dom'


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "14px",
    margin: "0 6px 6px",
    background: "purple",
    textDecoration: "none",
    color: "white",
  };

export default function Navbar() {
    return (
        <div id='navbar'>
            <NavLink to='/' style={linkStyles}>Home</NavLink>
            <NavLink to='/activities' style={linkStyles}>Activities</NavLink>
        </div>
    )
}
