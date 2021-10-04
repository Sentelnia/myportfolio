import React, { Component } from 'react';
import "./Intro.css";
import { animLetter } from "./anime_intro"
import { enterButton } from "./anime_intro"

class Intro extends Component{

  onClose = e =>{
   this.props.updateState(false)
  }
 

  componentDidMount(){
    window.scrollTo(0,0)
    animLetter()
    .then(enterButton())
  }

  render(){
    return (
      <>
        {this.props.show && <div className='show' onWheel={(e) => this.onClose(e)} onScroll={(e) => this.onClose(e)}>
        <h1 className='introTittle'><span className='letters'></span></h1>
        <span className='enter' onClick={this.onClose}>Entrer</span>
        </div>} 
      </>
    )
  }
}

export default Intro;