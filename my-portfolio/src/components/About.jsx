import React from "react";
import Skills from "./Skills";
import profile from "../images/profile.png";


const About = () => {
  return (
    <>
      <div id="about" className="about-section">
        <div className="about-text">
          <h1 className="about-heading" id="user-detail-name">
            Get to <b>know</b> me!
          </h1>
          <p id="user-detail-intro">
            Hi, my name is <b>Ritik Sonwani</b> and I am from Kanpur, Uttar
            Pradesh, India. I'm a <b>MERN stack web developer</b> and have
            completed my graduation in <b>Bachelor of Science (IT)</b> in 2022.
            <br />
            <br />
            Currently, I have completed my <b>Full Stack development</b> course
            from <b>Masai</b>. I love to create original projects with beautiful
            designs. You can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me; links are in the
            footer.
          </p>
        </div>

        <img
          src={profile}  // Replace with your actual static image path
          className="home-img"
          alt="Profile"
        />
      </div>

      <h1 className="skills-heading">Professional Skillset</h1>
      <div className="skills-section" id="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Java" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Thunderclient" />
        <Skills skill="Figma" />
        <Skills skill="Netlify" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
