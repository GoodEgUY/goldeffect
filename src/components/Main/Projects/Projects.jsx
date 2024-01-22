import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <a href="https://pods.com.ua">
        <div className="projectItem">
          <img src="./images/pods.png" alt="" className="projectImage" />

          <div className="projectText">
            <p className="projectName">PODS</p>
            <p className="projectTitle">Vape Shop</p>
          </div>
        </div>
      </a>
      <a href="https://vipkalyan.com">
        <div className="projectItem">
          <img src="./images/vip.png" alt="" className="projectImage" />
          <div className="projectText">
            <p className="projectName">VIPKALYAN</p>
            <p className="projectTitle">Hookah Shop</p>
          </div>
        </div>
      </a>
      <div className="projectItem">
        <img src="./images/champ.png" alt="" className="projectImage" />
        <div className="projectText">
          <p className="projectName">Coming Soon...</p>
          <p className="projectTitle">Marketing Agency</p>
        </div>
      </div>
      <div className="projectItem">
        <img
          src="./images/touch/homescreen196.png"
          alt=""
          className="projectImage"
        />
        <div className="projectText">
          <p className="projectName">Coming Soon...</p>
          <p className="projectTitle">Business Ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
