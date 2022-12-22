import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    
    <div className="projects">
      <a href="https://pugga-mel-test.netlify.app/">
        <div className="projectItem">
          <img src="./images/mel.png" alt="" className="projectImage" />
          <div className="projectText">
            <p className="projectName">(in developing/only PC version)</p>
            <p className="projectTitle">Videoproduction</p>
          </div>
        </div>
      </a>
      <a href="https://pugga-champions-dev-agency.netlify.app/">
        <div className="projectItem">
          <img src="./images/champ.png" alt="" className="projectImage" />
          <div className="projectText">
            <p className="projectName">Champions</p>
            <p className="projectTitle">Marketing Agency</p>
          </div>
        </div>
      </a>
      
    </div>
    
  );
};

export default Projects;
