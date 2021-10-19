import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "./Footer.css";
import Branche from "../images/BRANCHE_CERISIER_LIGHT_SVG.svg";
import Likedin from "../images/kisspng-linkedin-computer-icons-logo-advertising-community-5ac706ee380906.0987186415229928782295.png"
import Github from "../images/25231.svg"
import Codewars from "../images/codewars-pngrepo-com.png"
import Sakura from "../images/SAKURA_SVG.svg"
import MediaQuery from "react-responsive";

class Footer extends Component {
  render() {
    return (
      <footer>
        <MediaQuery maxWidth={766}>
        <img className="brancheFooter" src={Branche} alt="branche de cerisier" />
        </MediaQuery>
        <MediaQuery minWidth={767}>
        <div className='branches'>
          <img className="branchestart" src={Branche} alt="branche de cerisier" />
          <img className="brancheend" src={Branche} alt="branche de cerisier" />
        </div>
        </MediaQuery>
        <div className="infos">
          <div className="contact">
            <ul>
              <li><ExternalLink href="mailto:mathilde.tomba@gmail.com">Me contacter par mail : mathilde.tomba@gmail.com</ExternalLink></li>
              <li><ExternalLink href="tel:+33630196429">M'appeler : 0630196429</ExternalLink></li>
            </ul>
          </div>
          <div className="contactLink">
            <ul>
              <li>
                <ExternalLink href="https://www.linkedin.com/in/mathilde-tomba/"><img src={Likedin} alt="Icône Likedin"/></ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://github.com/Sentelnia"><img src={Github} alt="Icône Github"/></ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.codewars.com/users/Sentelnia"><img src={Codewars} alt="Icône Codewars"/></ExternalLink>
              </li>
            </ul>
          </div>
          <div className="credit">
            <ul>
              <li><img src={Sakura} alt="fleur de cerisier"/> © Create & design by Mathilde Tomba</li>
              <li><img src={Sakura} alt="fleur de cerisier"/> © Illustration by <ExternalLink href="https://vimeo.com/tompetitjean"
                > Tom PetitJean </ExternalLink></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
