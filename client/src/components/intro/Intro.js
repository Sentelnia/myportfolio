import React, { Component } from 'react';
import "./Intro.css";
import { animLetter } from "./anime_intro"
import lampionRond from "../../images/LAMPION_ARRONDI_SVG.svg"
import lampionLong from "../../images/LAMPION_ALLONGE_SVG.svg"

class Intro extends Component{

  onClose = e =>{
   this.props.updateState(false)
  }
 

  componentDidMount(){
    window.scrollTo(0,0)
    animLetter('Bienvenue', 2000, '.introTittle')
    animLetter('Entrer',4000, '.letters1')
  }

  render(){
    return (
      <>
        {this.props.show && 
        <div className='show' onWheel={(e) => this.onClose(e)} onClick={this.onClose}>
          <img className='lampionFond' src={lampionRond} alt = 'lampion rond'/>
          <div className="lampionRond">
            <img src ={lampionRond} alt="Lampion_rond"/>
            <div className="haloRond"></div> 
          </div>
          <div className="lampionLong">
            <img src ={lampionLong} alt="Lampion_long"/>
            <div className="haloLong"></div>
          </div>
          {/* que pour une certaine taille 
          <div className="shadowLong"></div>
          <div className="shadowRond"></div> */}
          <h1 className='introTittle'></h1>
          <button className='enter' onClick={this.onClose}><span className='letters1'></span></button>
        </div>} 
      </>
    )
  }
}

export default Intro;