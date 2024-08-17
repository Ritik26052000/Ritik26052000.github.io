import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiNetlify, SiPostman, SiVercel } from "react-icons/si";
import { AiFillThunderbolt } from 'react-icons/ai';

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        Thunderclient: <AiFillThunderbolt />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
        Netlify: <SiNetlify />,
        Java: <FaJava />,
    };

    return (
        <div title={skill} className='skill-box'>
            {icon[skill] || <span>Unknown Skill</span>} {/* Default case */}
        </div>
    );
}

export default Skills;
