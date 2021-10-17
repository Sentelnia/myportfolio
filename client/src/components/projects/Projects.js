import React, { Component } from 'react';
import projectsServices from './projects_services';
import './Projects.css'
import Sakura from "../../images/SAKURA_SVG.svg"
import { Link } from "react-router-dom";

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
      <div className ="projects">
        <h1>Mes projets</h1>
        <div>
        {this.state.projects.map(project =>{
          return (
            <div className='project' key={project._id}>
              <Link to={{ pathname : project.linkUrl}} target="_blank">
              {project.title === "L'Alcôve" ? 
              <img src={project.imgUrl} className='gif' alt={`Miniature de ${project.title}`}/>
              : <img src={project.imgUrl} className='miniature' alt={`Miniature de ${project.title}`}/>}
              </Link>
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
              <div className="interlude">
                <img src={Sakura} alt="fleur de cerisier"/>
                <img src={Sakura} alt="fleur de cerisier"/>
                <img src={Sakura} alt="fleur de cerisier"/>
                <img src={Sakura} alt="fleur de cerisier"/>
                <img src={Sakura} alt="fleur de cerisier"/>
                <img src={Sakura} alt="fleur de cerisier"/>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Project