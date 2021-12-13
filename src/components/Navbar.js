import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/activities'>Activities</NavLink>
        </div>
    )
}
