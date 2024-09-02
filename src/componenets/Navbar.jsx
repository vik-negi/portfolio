import { React, useState } from "react";
import { Link } from "react-router-dom";
import Brightness from "../assets/svg/brightness.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBook,
  faProjectDiagram,
  faHome,
  faSkiing,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeMode } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import create, { themes } from "../utils/Theme";
import { Collapse, Dropdown, initTE } from "tw-elements";
import NavbarOptionsDropdown from "./NavbarOptionsDropdown";
import { isAutheticated } from "../pages/admin/utils/auth";
import { currentUser } from "../axios/auth";
import { useQuery } from "react-query";
import MyData from "../data/MyData";
// import useStore from "../store";

const StyledThemeSelector = styled.select`
  padding: 4px;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

const NotificationItems = () => {
  const store = create();
  return (
    <li className="flex items-center justify-between mb-5">
      <div className="flex items-center">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          className="rounded-full"
          style={{ height: "35px", width: "35px" }}
          alt=""
          loading="lazy"
        />
        <div className="ml-5">
          <p className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-200">
            Vikram Negi
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
            2 hours ago
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-[18px] text-neutral-700 dark:text-neutral-200 mx-3">
          <i className="fas fa-check"></i>
        </button>

        <button className="text-[18px] text-neutral-700 dark:text-neutral-200">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default function Navbar() {
  initTE({ Collapse, Dropdown });

  const user = MyData.about.user;

  const [activeSection, setActiveSection] = useState("home");
  const [smStyle, setSmStyle] = useState("right-0");
  const [bgColor, setBgColor] = useState("");

  const toggleNav = () => {
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

  window.addEventListener("scroll", function () {
    if (window.scrollY > 120) {
      setBgColor(`#1b1b1b`);
    } else {
      setBgColor(`transparent`);
    }
  });

  return (
    <header className="header" id="header">
      {/* <div className="logo img">
        <img
          className=""
          src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
          alt="logo"
        />
      </div> */}
      <p className="logo initials" tabIndex="1"></p>
      <div
        style={{
          backgroundColor: `${bgColor}`,
        }}
        className={` navbar ${smStyle}`}
      >
        <ul className={`navbar-list `}>
          <li>
            <Link
              className={`${activeSection === "home" && "active"} navbar-link`}
              name="home"
              to="/"
              onClick={() => handleSectionClick("home")}
              tabIndex="4"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faHome} className="p-0 m-0" />
                </div>
                {activeSection === "home" ? "Home" : ""}
              </div>
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
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faSkiing} className="p-2" />
                </div>
                {activeSection === "skills" ? "Skills" : ""}
              </div>
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
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px]  flex justify-center items-center  border-white rounded-full">
                  <FontAwesomeIcon icon={faProjectDiagram} className="p-2" />
                </div>
                {activeSection === "projects" ? "Projects" : ""}
              </div>
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
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faBook} className="" />
                </div>
                {activeSection === "education" ? "Education" : ""}
              </div>
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
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] text-center mx-auto border-white rounded-full">
                  <FontAwesomeIcon icon={faLaptop} className="p-2" />
                </div>
                {activeSection === "experience" ? "Experience" : ""}
              </div>
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
        className="hover:color-[#c2c2c2] z-500 "
      >
        <FontAwesomeIcon
          icon={smStyle === "right-0" ? `bars` : "times"}
          style={{
            color: `${store.theme === "light" ? "black" : "white"}`,
          }}
          className="mobile-nav-icon"
        />
      </button>
      <ul className="extra-navbar-list items-center">
        <i
          onClick={(e) =>
            switchTheme(store.theme === "light" ? "dark" : "light")
          }
          className={`${
            store.theme == "light" && "fas fa-moon"
          } text-[25px] cursor-pointer text-black
         
              `}
        >
          {store.theme !== "light" && (
            <img src={Brightness} color="white" alt="" />
          )}
        </i>
      </ul>
    </header>
  );
}
