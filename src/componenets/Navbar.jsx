import { React, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeMode } from "../context/ThemeContext";

import { styled } from "styled-components";
import create, { themes } from "../utils/Theme";
// import useStore from "../store";

const StyledThemeSelector = styled.select`
  padding: 4px;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Navbar() {
  console.log("Navbar");
  const [activeSection, setActiveSection] = useState("home");
  const [smStyle, setSmStyle] = useState("right-0");
  const [lightMode, setLightMode] = useState(true);
  const { themeMode, toggleThemeMode } = useThemeMode();

  const toggleNav = () => {
    console.log("toggleNav");
    console.log(smStyle);
    if (smStyle === "right-0") {
      setSmStyle("right-[225px]");
    } else {
      setSmStyle("right-0");
    }
  };
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const store = create();

  const switchTheme = (themeName) => {
    console.log(themeName);
    store.setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <header className="header" id="header">
      {/* <div className="logo img"><img className=""
        src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
        alt="logo"/></div> */}
      <p className="logo initials" tabIndex="1"></p>
      <div className={` navbar ${smStyle}`}>
        <ul className="navbar-list">
          <li>
            <Link
              className={`${activeSection === "home" && "active"} navbar-link`}
              name="home"
              to="/"
              onClick={() => handleSectionClick("home")}
              tabIndex="4"
            >
              Home
            </Link>
          </li>
          {/* <li><a className={`${""} navbar-link`} name="about" onClick={toggleNav()} tabIndex="5">About</a></li> */}
          <li>
            <Link
              className={`${
                activeSection === "skills" && "active"
              } navbar-link`}
              name="skills"
              onClick={() => handleSectionClick("skills")}
              tabIndex="6"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "projects" && "active"
              } navbar-link`}
              name="projects"
              onClick={() => handleSectionClick("projects")}
              tabIndex="7"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "education" && "active"
              } navbar-link`}
              name="education"
              to="/"
              onClick={() => handleSectionClick("education")}
              tabIndex="8"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "experience" && "active"
              } navbar-link`}
              name="experience"
              to="/experiences"
              onClick={() => handleSectionClick("experience")}
              tabIndex="9"
            >
              Experience
            </Link>
          </li>
        </ul>
        {/* <ion-icon
          tabIndex="9"
          name="close-outline"
          className="mobile-nav-icon"
          onClick={() => toggleNav()}
        ></ion-icon> */}
      </div>
      <button
        onClick={() => toggleNav()}
        className="hover:color-[#c2c2c2] z-500"
      >
        <FontAwesomeIcon
          icon={smStyle === "right-0" ? `bars` : "times"}
          className="mobile-nav-icon"
        />
      </button>
      <ul className="extra-navbar-list">
        <i
          onClick={(e) =>
            switchTheme(store.theme === "light" ? "dark" : "light")
          }
          className={`${
            store.theme == "light" ? "fas fa-moon" : "fas fa-sun"
          } text-[28px] cursor-pointer mt-1
        
              `}
        ></i>

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
            className={`${""} navbar-link`}
            name="about"
            to="admin/login"
            // onClick={handleSectionClick}
            tabIndex="5"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}
