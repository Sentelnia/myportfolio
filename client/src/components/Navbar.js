import React, { Component } from "react";
import "./Navbar.css";
import Branche from "../images/BRANCHE_CERISIER_LIGHT_SVG.svg";
import MediaQuery from "react-responsive";

class Navbar extends Component {
  render() {
    return (
      <nav>
      <div className="gradient">
        <ul>
          <li>
            <h1>Mathilde TOMBA</h1>
          </li>
          <li>Developpeuse Web</li>
        </ul>
        <MediaQuery maxWidth={766}>
        <img className="branche" src={Branche} alt="branche de cerisier" />
        </MediaQuery>
        <MediaQuery minWidth={767}>
        <div className='branches'>
          <img className="branchestart" src={Branche} alt="branche de cerisier" />
          <img className="brancheend" src={Branche} alt="branche de cerisier" />
        </div>
        </MediaQuery>
        </div>
      </nav>
    );
  }
}

export default Navbar;
