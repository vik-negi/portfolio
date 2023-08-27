import { React, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeMode } from "../context/ThemeContext";

import { styled } from "styled-components";
import create, { themes } from "../utils/Theme";
import { Collapse, Dropdown, initTE } from "tw-elements";
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
          <i class="fas fa-check"></i>
        </button>

        <button className="text-[18px] text-neutral-700 dark:text-neutral-200">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default function Navbar() {
  initTE({ Collapse, Dropdown });
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
      <ul className="extra-navbar-list items-center">
        <i
          onClick={(e) =>
            switchTheme(store.theme === "light" ? "dark" : "light")
          }
          className={`${
            store.theme == "light" ? "fas fa-moon" : "fas fa-sun"
          } text-[28px] cursor-pointer text-white
         
              `}
        ></i>

        <li className="li-item">
          {/* <a className="contactBtn" name="getInTouch" tabIndex="10" href="contact"> */}
          <Link
            className="contactBtn text-white"
            name="getInTouch"
            tabIndex="10"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="li-item">
          <Link
            className={`${""} navbar-link text-white`}
            name="about"
            to="admin/login"
            // onClick={handleSectionClick}
            tabIndex="5"
          >
            Login
          </Link>
        </li>
        <div className="relative flex items-center">
          <div className="relative" data-te-dropdown-ref>
            <a
              class="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <span className="[&>svg]:w-15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-10 w-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute -mt-8 ml-6 rounded-full bg-danger px-2 py-1 text-[1rem] font-bold leading-none text-white">
                1
              </span>
            </a>
            <ul
              className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block p-4"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <NotificationItems />
              <NotificationItems />
            </ul>
          </div>

          <div className="relative" data-te-dropdown-ref>
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: "25px", width: "25px" }}
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="absolute left-auto w-[150px] right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent p-4 text-xl font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent p-4 text-xl font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent p-4  text-xl font-normal text-neutral-700 hover:bg-red-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30 dark:hover:text-red-900"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </header>
  );
}
