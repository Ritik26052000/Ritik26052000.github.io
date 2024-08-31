import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import ResumeButton from "./ResumeButton";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setnavbarblur(true);
      } else {
        setnavbarblur(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  return (
    <nav id="nav-menu" className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        RS
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="home" smooth={true} duration={500} className="nav-link home">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="about" smooth={true} duration={500} className="nav-link about">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="projects" smooth={true} duration={500} className="nav-link projects">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="skills" smooth={true} duration={500} className="nav-link skills">
            <BsCodeSlash /> Skills
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="contact" smooth={true} duration={500} className="nav-link contact">
            <CgFileDocument /> Contact
          </Link>
        </li>
        <li onClick={hideMenu}>
          <div className="nav-link resume">
            <ResumeButton />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
