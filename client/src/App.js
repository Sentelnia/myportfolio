
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/////////////////////////////Import  Component//////////////////////
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Intro from "./components/intro/Intro"
import Footer from "./components/Footer"

import './App.css'


class App extends Component{
  state={
    show:true, //Pour l'intro
    projects:[]
  }
 
  updateState = (introShow) =>{
    this.setState({
      show : introShow,
    })
  }

  componentDidMount(){
    window.scrollTo(0,0)
  }
  
  render() {
   
    return (
      <div className="App">
        <Intro show={this.state.show} updateState={this.updateState} />
        <Navbar />
        <Switch>
          {/////////////////////* HOMEPAGE *////////////////////////
          }
          <Route exact path="/" render={() => (
            <Homepage/>
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default App;
