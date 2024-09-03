import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ER_Diagram: {
      Description:
        "ER diagram looks very similar to the flowchart. However, ER Diagram includes many specialized symbols, and its meanings make this model unique. The purpose of ER Diagram is to represent the logical structure & entity framework infrastructure.",
      TechStack: ["React", "Redux", "Github", "Netlify", "JavaScript", "NPM", "Chakra ui", "React-flow", "authO"],
      Github: "https://github.com/PKalyanReddy/Declaration-DevOps_032.git",
      Website: "https://er-diagram-builder01.netlify.app/",
    },
    Music: {
      Description:
        "Embarking on a mission to revolutionize the music streaming landscape, our team has set out to develop a cutting-edge, open-source music streaming application...",
      TechStack: ["JavaScript", "HTML", "CSS", "Github", "Custom API", "NPM", "cssAnimation", "boxicons"],
      Github: "https://github.com/alfaj7/SAP-Sultans_056.git",
      Website: "https://beet-pulse-music.netlify.app",
    },
    DMart: {
      Description:
        "The core functionality of the project revolves around streamlining the retail process to make shopping more convenient and cost-effective for the users...",
      TechStack: ["HTML", "CSS", "Bootstrap", "SCSS", "NPM", "Github"],
      Github: "https://github.com/arnabBaruah009/Yamuna-Variable-002.git",
      Website: "https://dmart-cw.netlify.app/",
    },
  };

  const project = desc[projectName] || {};
  const { Description = "", TechStack = [], Github = "", Website = "" } = project;

  return (
    <div className="project-item">
      <img
        className="project-image"
        src={projectPhoto}
        alt={`Project display for ${projectName}`}
      />
      <div>
        <h3>{projectName}</h3>
        <p>{Description}</p>
        {TechStack.length > 0 && (
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <ul>
              {TechStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {Github && (
          <a href={Github} target="_blank" rel="noopener noreferrer">
            <button className="project-button">
              <FaGithub /> Github
            </button>
          </a>
        )}
        {Website && (
          <a href={Website} target="_blank" rel="noopener noreferrer">
            <button className="project-button">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
