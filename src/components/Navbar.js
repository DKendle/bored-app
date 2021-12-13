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
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/activities'>Activities</NavLink>
        </div>
    )
}
