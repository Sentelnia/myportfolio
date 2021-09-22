import React, { Component } from 'react';
import "./Intro.css"

class Intro extends Component{

  onClose = e =>{
   this.props.updateState(false)
  }
 

  componentDidMount(){
    window.scrollTo(0,0)
  }

  render(){
    return (
      <>
        {this.props.show && <div className='show' onClick={this.onClose} onWheel={(e) => this.onClose(e)} onScroll={(e) => this.onClose(e)}>
        <h1>Bienvenue</h1>
        <button>Entrer</button>
        </div>} 
      </>
    )
  }
}

export default Intro;