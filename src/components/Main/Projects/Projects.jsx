import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    
    <div className="projects">
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
