import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'underline'
        }
      }

  return (
    <nav>
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='login' style={navLinkStyles}>Login</NavLink>
        <NavLink to='register' style={navLinkStyles}>Register</NavLink>
    </nav>
  )
}

export default Navbar