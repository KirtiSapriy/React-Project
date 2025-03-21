import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <NavLink to={'/'}>List</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={'/Detail'}>RoomDetail</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={'/Roombook'}>RoomBook</NavLink>&nbsp;&nbsp;&nbsp;

        </div>
    )
}
