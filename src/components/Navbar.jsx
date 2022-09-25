import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/White_logo_fixed.svg'
export default function Navbar(){
    return (
        <nav class="navbar">
            <NavLink to="/"><img src={Logo} class = "logo" alt="Logo" height="60" width="120" /></NavLink>
        <ul class="nav-links">
        <div class="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Try it Now!</NavLink></li>
            <li class="services"><NavLink to="/">FAQ</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    )
}