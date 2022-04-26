import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../themes/Navbar.css'
import logo from '../images/logo.png'

class Navbar extends React.Component {
    render() { 
        return (
            <div className='App'>
            
                <nav>
                <img className='img-Logo' src={logo} alt="Portfolio-logo"></img>
                <div className='List'>
                <NavLink className='nav-Link' to='/Home'>Home</NavLink>
                <NavLink className='nav-Link' to='/Games'>Games</NavLink>
                <NavLink className='nav-Link' to='/Memo'>Memo</NavLink>
                </div>
                </nav>
               
                
            </div>
        )
       
    }
}
 
export default Navbar;