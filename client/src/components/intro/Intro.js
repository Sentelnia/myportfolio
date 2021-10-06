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
    animLetter('Bienvenue', 2000, '.letters')
    animLetter('Entrer',4000, '.letters1')
  }

  render(){
    return (
      <>
        {this.props.show && 
        <div className='show' onWheel={(e) => this.onClose(e)}>
          <img className="lampionRond" src ={lampionRond} alt="Lampion_rond"/>
          <img className="lampionLong" src ={lampionLong} alt="Lampion_long"/>
          <h1 className='introTittle'><span className='letters'></span></h1>
          <button className='enter' onClick={this.onClose}><span className='letters1'></span></button>
        </div>} 
      </>
    )
  }
}

export default Intro;