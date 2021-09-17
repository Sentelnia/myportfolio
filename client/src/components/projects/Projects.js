import React, { Component } from 'react';
import projectsServices from './projects_services';
import './Projects.css'

class Project extends Component {
  state = {
    projects:[]
  }



  componentDidMount() {
    window.scrollTo(0,0)
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
            <div className='project' key={project._id}>
              {project.title === "L'Alcôve" ? 
              <img src={project.imgUrl} className='gif' alt={`Miniature de ${project.title}`}/>
              : <img src={project.imgUrl} className='miniature' alt={`Miniature de ${project.title}`}/>}
              <h2>{project.title}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Project