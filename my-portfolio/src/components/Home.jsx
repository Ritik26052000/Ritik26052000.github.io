import React from "react";
import Avatar from "../images/Avatar.png";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Lottie from "lottie-react";

export const Home = () => {
  return (
    <div>
      <div className="home-page" id="home">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Ritik Sonwani</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="home-img" animationData={SpaceBoy} loop={true} />
      </div>

      <div id="about" className="about-section">
        <div className="about-text">
          <h1 className="about-heading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>Java and JavaScript</b> and know a bit of{" "}
            <b>C and C++</b> and am working on a few projects in the <b>MERN</b>{" "}
            stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b>, and{" "}
            <b>TypeScript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b> ☕
          </p>
        </div>

        <img className="avatar-image" src={Avatar} alt="" />
      </div>
    </div>
  );
};
