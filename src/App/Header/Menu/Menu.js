import React from 'react'
import './menu.css'

const Menu = () =>{
    return (
        <nav className="navigation hidden-menu">
                            <ul className="menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Themes</a></li>
                                <li> <a href="/">Blog</a> </li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Contact</a> </li>
                            </ul>
        </nav>
                       
    )
}
export default Menu