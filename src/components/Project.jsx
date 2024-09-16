import React from 'react';
import DMart from '../images/DMart.png';
import Music from '../images/Music.png';
import DocEase from '../images/DocEase.jpg';
import ER_Builder from '../images/ER_Builder.png';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-heading">My <b>Projects</b></h1>
      <div className="projects-list">
      <ProjectBox projectPhoto={DocEase} projectName="DocEase" />
        <ProjectBox projectPhoto={ER_Builder} projectName="ER_Diagram" />
        <ProjectBox projectPhoto={Music} projectName="Music" />
        <ProjectBox projectPhoto={DMart} projectName="DMart" />
      </div>
    </section>
  );
}

export default Projects;
