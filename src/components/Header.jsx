import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <div>
   <ul className='navbar'>
    <li><NavLink to="/" className="nav-bar-link" 
    style={({isActive})=>{ return {color: isActive? "skyblue": ""}}}>Home</NavLink></li>
    <li><NavLink to="/about" className="nav-bar-link" style={({isActive})=>
    { return {color: isActive? "skyblue": ""}}}>About</NavLink></li>
     
   </ul>
    </div>
  )
}

export default Header
