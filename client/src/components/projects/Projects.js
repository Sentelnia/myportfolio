import React, { Component } from "react";
import projectsServices from "./projects_services";
import "./Projects.css";
import Sakura from "../../images/SAKURA_SVG.svg";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

class Project extends Component {
  state = {
    projects: [],
    details: {},
  };

  componentDidMount() {
    projectsServices
      .getProjects()
      .then((data) => {
        this.setState({
          projects: data.allProjectsFromDB,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // détails du projet
  details = (e, id) => {
    e.preventDefault();

    projectsServices
      .getProject(id)
      .then((detailsProject) => {
        console.log(detailsProject);
        this.setState({
          details: detailsProject,
        });
        document.querySelector(".detailsproject").classList.add("shows");
        window.scrollTo(0,0)
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  detailsClose = () => {
    this.setState({
      details: {},
    });
    document.querySelector(".detailsproject").classList.remove("shows");

  };

  render() {
    return (
      <div className="projects">
        {/* Détails du projet cliqué */}
          {Object.keys(this.state.details).length > 0 && (
            <div className="detailsproject ">
            <div className="detailscontainer">
              <div className="detailsTitle">
                <h2>{this.state.details.title}</h2>
                <h3>{this.state.details.subtitle}</h3>
              </div>
              <div className="detailsInterlude">
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
              </div>
              <p className="description">{this.state.details.description}</p>
              <div className="detailsInterlude">
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
                <img src={Sakura} alt="fleur de cerisier" />
              </div>
              <div className="fonctionality">
                <h3>Fonctionalités</h3>
                <p>{this.state.details.fonctionalite}</p>
              </div>
              <div className="tech">
                <h3>Tech</h3>
                <p>{this.state.details.tech}</p>
              </div>
              <div className='action'>
                <button>Accéder au site</button>
                <button onClick={this.detailsClose} >Retourner aux projets</button>
              </div>
              
            </div>
            </div>
          )}
        
        {/* La liste des projets */}
        <h1>Mes projets</h1>
        <div className="allProjects">
          {this.state.projects.map((project) => {
            return (
              <div className="project" key={project._id}>
                {/* <Link to={{ pathname : project.linkUrl}} target="_blank"> */}

                {project.title === "L'Alcôve" ? (
                  <img
                    src={project.imgUrl}
                    className="gif"
                    alt={`Miniature de ${project.title}`}
                    onClick={(e) => this.details(e, project._id)}
                  />
                ) : (
                  <img
                    src={project.imgUrl}
                    className="miniature"
                    alt={`Miniature de ${project.title}`}
                    onClick={(e) => this.details(e, project._id)}
                  />
                )}

                {/* </Link> */}
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
                <MediaQuery orientation="portrait">
                  <div className="interlude">
                    <img src={Sakura} alt="fleur de cerisier" />
                    <img src={Sakura} alt="fleur de cerisier" />
                    <img src={Sakura} alt="fleur de cerisier" />
                    <img src={Sakura} alt="fleur de cerisier" />
                    <img src={Sakura} alt="fleur de cerisier" />
                    <img src={Sakura} alt="fleur de cerisier" />
                  </div>
                </MediaQuery>
              </div>
            );
          })}
        </div>
        <MediaQuery orientation="landscape">
          <div className="interlude">
            <img src={Sakura} alt="fleur de cerisier" />
            <img src={Sakura} alt="fleur de cerisier" />
            <img src={Sakura} alt="fleur de cerisier" />
            <img src={Sakura} alt="fleur de cerisier" />
            <img src={Sakura} alt="fleur de cerisier" />
            <img src={Sakura} alt="fleur de cerisier" />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Project;
