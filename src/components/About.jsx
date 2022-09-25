import React from 'react';
import bgimage from "../images/1567736.png"
import Logo from '../images/White_logo_fixed.svg'
import { NavLink } from 'react-router-dom'

export default function About(){
    return(
        <div className="container">
                <div className="child1">
                    <img src={bgimage} alt="bgimage" height="600" width="1440"/>
                </div>
                <div className="child2">
                    <img src={Logo} alt="Logo" height="180" width="350"/>
                    <h1 className="about-amorse"></h1>
                    <h5 className="about-desc">We help you better manage your waste by providing you with handy disposal tips.<br/>
                    Learn how and where to drop off your trash responsibly.<br/> Let’s get rid of your stuff together !</h5>
                    <NavLink to="/Explore"><button class="button_about" role="button">Get Started</button></NavLink>
                </div>
        </div>
    )
}