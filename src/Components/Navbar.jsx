import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <NavLink to={'/'}>List</NavLink>
            <NavLink to={'/Detail'}>RoomDetail</NavLink>
            <NavLink to={'/Roombook'}>RoomBook</NavLink>

        </div>
    )
}
