import React, { Component } from 'react';
import "./Navbar.css"
import Branche from "../images/BRANCHE_CERISIER_LIGHT_SVG.svg"

class Navbar extends Component {
  render(){
    return (
      <nav>
      <div className="gradient"></div>
        <ul>
          <li><h1>Mathilde TOMBA</h1></li>
          <li>Developpeuse Web</li>
        </ul>
        <img className="branche" src={Branche} alt='branche de cerisier'/>
      </nav>
    )
  }
}

export default Navbar