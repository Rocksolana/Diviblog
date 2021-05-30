import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
 
const Logo = () => {
    return (
        <div>
      <Link to="/"> <img src={logo} alt="Logo" className="logo"/> </Link> 
        </div>
    )
 }
 export default Logo