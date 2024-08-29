import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";

// Separate component for individual skill icons
const SkillIcon = ({ skill, icon }) => (
  <div title={skill} className="skill-box" aria-label={skill}>
    {icon}
  </div>
);

const Skills = () => {
  const skillIcons = [
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Node", icon: <DiNodejs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "NPM", icon: <FaNpm /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Thunderclient", icon: <AiFillThunderbolt /> },
    // Add more skills as needed
  ];

  return (
    <React.Fragment>
      <h1 className="skills-heading">Professional Skillset</h1>
      <div className="skills-section" id="skills">
        {skillIcons.map((skill, index) => (
          <SkillIcon key={index} skill={skill.name} icon={skill.icon} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Skills;
