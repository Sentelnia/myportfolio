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
    console.log('ici')
    projectsServices
      .getProjects()
      .then((data) => {
        console.log(data.allProjectsFromDB)
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
        window.scrollTo(0, 0);
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
              <div className='infos'>
              <div className="fonctionality">
                <h3>Fonctionnalités</h3>
                <ul>
                  {this.state.details.fonctionalite.map((fonctionality) => {
                    return <li>{fonctionality} |</li>;
                  })}
                </ul>
              </div>
              <div className="tech">
                <h3>Tech</h3>
                <ul>
                  {this.state.details.tech.map((el) => {
                    return <li>{el} |</li>;
                  })}
                </ul>
              </div>
              </div>
              <div className="action">
                <Link
                  to={{ pathname: this.state.details.linkUrl }}
                  target="_blank"
                >
                  <button>Accéder au site</button>
                </Link>
                <button onClick={this.detailsClose}>
                  Retourner aux projets
                </button>
              </div>
            </div>
          </div>
        )}

        {/* La liste des projets */}
        <h1>Mes projets </h1>
        <div className="allProjects">
          {this.state.projects.map((project) => {
            return (
              <div className="project" key={project._id}>
               
                  <div className = "imgprojet">
                  <img
                    src={project.imgUrl}
                    className="portrait"
                    alt={`Miniature de ${project.title}`}
                    onClick={(e) => this.details(e, project._id)}
                  />
                  </div>
               
                <div className="textprojet">
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
                </div>
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
