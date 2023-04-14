import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleNav = () => {
    const header = document.querySelector(".header");

    const sections = document.querySelectorAll("section, footer");

    header.classNameList.toggle("active");

    header.classNameList.contains("active")
      ? sections.forEach((section) => {
          section.addEventListener("click", toggleNav);
        })
      : sections.forEach((section) => {
          section.removeEventListener("click", toggleNav);
        });
  };

  return (
    <header className="header" id="header">
      {/* <div className="logo img"><img className=""
        src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
        alt="logo"/></div> */}
      <p className="logo initials" tabIndex="1"></p>
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            <Link
              className="navbar-link active"
              name="home"
              to="/"
              onclick="scrollToSection(this),toggleNav()"
              tabIndex="4"
            >
              Home
            </Link>
          </li>
          {/* <li><a className="navbar-link" name="about" onclick="scrollToSection(this),toggleNav()" tabIndex="5">About</a></li> */}
          <li>
            <Link
              className="navbar-link"
              name="skills"
              onclick="scrollToSection(this),toggleNav()"
              tabIndex="6"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="navbar-link"
              name="projects"
              onclick="scrollToSection(this),toggleNav()"
              tabIndex="7"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="navbar-link"
              name="education"
              to="/"
              onclick="scrollToSection(this),toggleNav()"
              tabIndex="8"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="navbar-link"
              name="experience"
              to="/experiences"
              onclick="scrollToSection(this),toggleNav()"
              tabIndex="9"
            >
              Experience
            </Link>
          </li>
        </ul>
        {/* <a className="contactBtn button" name="getInTouch" tabIndex="10" href="https://www.gmail.com"
        target="_blank">Contact</a> */}
        <ion-icon
          tabIndex="9"
          name="close-outline"
          className="mobile-nav-icon"
          onClick={toggleNav}
        ></ion-icon>
      </div>
      <ion-icon
        tabIndex="3"
        name="menu-outline"
        className="mobile-nav-icon"
        onClick={toggleNav}
      ></ion-icon>
      <ul className="extra-navbar-list">
        <li>
          {/* <a className="contactBtn" name="getInTouch" tabIndex="10" href="contact"> */}
          <Link
            className="contactBtn"
            name="getInTouch"
            tabIndex="10"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="navbar-link"
            name="about"
            to=""
            onclick="scrollToSection(this),toggleNav()"
            tabIndex="5"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}
