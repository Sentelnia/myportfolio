import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

class Footer extends Component {
  render(){
    return (
      <footer>
        <div className='contactLink'>
          <ul>
            <li>
              <ExternalLink href="">
                ln
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="">
                Git
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="">
                CodeWars
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className='credit'>
        <ul>
          <li> © Create & design by Mathilde Tomba</li>
          <li> © Illustration by Tom PetitJean</li>
        </ul>
        </div>
      </footer>
    )
  }
}

export default Footer