import React from 'react'
import {NavLink} from 'react-router-dom'


const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "2px 6px 6px 2px",
    background: "#606c38",
    color: "white",
  };

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/activities' style={linkStyles}>Activities</NavLink>
            <NavLink to='/form' style={linkStyles}>Add</NavLink>
            <NavLink to='/' style={linkStyles}>Home</NavLink>
        </div>
    )
}
