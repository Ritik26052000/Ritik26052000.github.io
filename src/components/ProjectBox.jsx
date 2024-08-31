import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ER_Diagram: {
      Description:
        "ER diagram looks very similar to the flowchart. However, ER Diagram includes many specialized symbols, and its meanings make this model unique. The purpose of ER Diagram is to represent the logical structure & entity framework infrastructure.",
      Github: "https://github.com/PKalyanReddy/Declaration-DevOps_032.git",
      Website: "https://er-diagram-builder01.netlify.app/",
    },
    Music: {
      Description:
        "Embarking on a mission to revolutionize the music streaming landscape, our team has set out to develop a cutting-edge, open-source music streaming application...",
      Github: "https://github.com/alfaj7/SAP-Sultans_056.git",
      Website: "https://beet-pulse-music.netlify.app",
    },
    DMart: {
      Description:
        "The core functionality of the project revolves around streamlining the retail process to make shopping more convenient and cost-effective for the users...",
      Github: "https://github.com/arnabBaruah009/Yamuna-Variable-002.git",
      Website: "https://dmart-cw.netlify.app/",
    },
  };

  const project = desc[projectName] || {};
  const { Description = "", Github = "", Website = "" } = project;

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
