import React from "react"
import { NavLink } from "react-router-dom"
export default function Navbar(){
    return (
    <nav>
        <div class="nav-wrapper teal lighten-2">
        <NavLink to ="/">
            <img src="https://s4.aconvert.com/convert/p3r68-cdx67/aq1zd-zqnq5.svg" alt = "main logo"height="70" width="100"/> 
        </NavLink>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/GetStarted">Try it Now</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
        </ul>
        </div>
    </nav>
    )
}