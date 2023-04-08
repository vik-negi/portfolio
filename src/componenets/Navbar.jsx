import React from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

export default function Navbar() {
  const header = document.querySelector(".header");

  const toggleNav = () => {
    const sections = document.querySelectorAll("section, footer");

    header.classList.toggle("active");

    header.classList.contains("active")
      ? sections.forEach((section) => {
          section.addEventListener("click", toggleNav);
        })
      : sections.forEach((section) => {
          section.removeEventListener("click", toggleNav);
        });
  };

  return (
    <header class="header" id="header">
      {/* <div class="logo img"><img class=""
        src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
        alt="logo"/></div> */}
      <p class="logo initials" tabindex="1"></p>
      <div class="navbar">
        <ul class="navbar-list">
          <li>
            <Link
              class="navbar-link active"
              name="home"
              to="/"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="4"
            >
              Home
            </Link>
          </li>
          {/* <li><a class="navbar-link" name="about" onclick="scrollToSection(this),toggleNav()" tabindex="5">About</a></li> */}
          <li>
            <Link
              class="navbar-link"
              name="skills"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="6"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              class="navbar-link"
              name="projects"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="7"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              class="navbar-link"
              name="education"
              to="/education"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="8"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              class="navbar-link"
              name="experience"
              to="/experiences"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="9"
            >
              Experience
            </Link>
          </li>
        </ul>
        {/* <a class="contactBtn button" name="getInTouch" tabindex="10" href="https://www.gmail.com"
        target="_blank">Contact</a> */}
        <ion-icon
          tabindex="9"
          name="close-outline"
          class="mobile-nav-icon"
          onClick={toggleNav}
        ></ion-icon>
      </div>
      <VscThreeBars
        tabindex="3"
        name="menu-outline"
        class="mobile-nav-icon"
        onClick={toggleNav}
      />

      <ul class="extra-navbar-list">
        <li>
          {/* <a class="contactBtn" name="getInTouch" tabindex="10" href="contact"> */}
          <Link
            class="contactBtn"
            name="getInTouch"
            tabindex="10"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            class="navbar-link"
            name="about"
            to=""
            onclick="scrollToSection(this),toggleNav()"
            tabindex="5"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}
