
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/////////////////////////////Import  Component//////////////////////
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Intro from "./components/intro/Intro"



class App extends Component{
  state={
    show:true
  }
 
  updateState = (introShow) =>{
    this.setState({
      show : introShow
    })
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
      </div>
    );
  }
  
}

export default App;
