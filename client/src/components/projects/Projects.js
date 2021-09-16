import React, { Component } from 'react';
import projectsServices from './projects_services';

class Project extends Component {
  state = {
    projects:[]
  }

  componentDidMount() {
    projectsServices.getProjects()
    .then(data => {
      console.log('data',data)
      this.setState({
        projects: data.allProjectsFromDB
      })
    
    })
    .catch(err => {
      console.log(err)
    });
  }

  render(){
    return (
      <div>
        {this.state.projects.map(project =>{
          return (
            <div className='project' key='{project._id'>
              <img src={project.imgUrl} alt={`Miniature de ${project.title}`}/>
              <h2>{project.title}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Project