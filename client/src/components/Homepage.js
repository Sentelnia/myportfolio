
import React, { Component } from 'react';

import Project from './projects/Projects'

class Homepage extends Component{
  render(){
    return (
      <div className="homepage">
        <Project/>
      </div>
    );
  }
}

export default Homepage