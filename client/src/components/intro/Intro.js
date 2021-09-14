import React, { Component } from 'react';
import "./Intro.css"

class Intro extends Component{

  onClose = e =>{
   this.props.updateState(false)
  }
  

  render(){
    return (
      <>
        {this.props.show && <div className='show' onClick={this.onClose}>
        <h1>Bienvenue</h1>
        </div>} 
      </>
    )
  }
}

export default Intro;