import React, { Component } from 'react';
import projectsServices from './projects_services';
import './Projects.css'
import Sakura from "../../images/SAKURA_SVG.svg"
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";


class Project extends Component {
  state = {
    projects:[],
    détails:{}
  }


  componentDidMount() {
    projectsServices.getProjects()
    .then(data => {
      this.setState({
        projects: data.allProjectsFromDB
      })
    
    })
    .catch(err => {
      console.log(err)
    });
  }

  details = (e,id) =>{
    e.preventDefault();

    
    projectsServices.getProject(id)
    .then(details => {
      console.log(details)
      this.setState({
        details: details
      })
    })
    .catch(err => {
      console.log(err)
    });
    console.log(id)
  }

  render(){
    return (
      <div className ="projects">
      {/* Détails du projet cliqué */}
      <div className='detailsproject'>
      {this.state.details &&
        <div>
          <p>{this.state.details.title}</p>
        </div>}
      </div>
      {/* La liste des projets */}
        <h1>Mes projets</h1>
        <div className="allProjects">
        {this.state.projects.map(project =>{
          return (
            <div className='project' key={project._id}>
              {/* <Link to={{ pathname : project.linkUrl}} target="_blank"> */}
              
              {project.title === "L'Alcôve" ? 
              <img src={project.imgUrl} className='gif' alt={`Miniature de ${project.title}`} onClick={(e) => this.details(e, project._id)}/>
              : <img src={project.imgUrl} className='miniature' alt={`Miniature de ${project.title}`} onClick={(e) => this.details(e, project._id)}/>}    
              
              {/* </Link> */}
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
              <MediaQuery orientation="portrait">
                <div className="interlude">
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                </div>
              </MediaQuery>
            </div>
          )
        })}
        </div>
        <MediaQuery orientation="landscape">
                <div className="interlude">
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                  <img src={Sakura} alt="fleur de cerisier"/>
                </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Project