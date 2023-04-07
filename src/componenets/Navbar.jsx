import React from "react";

export default function Navbar() {
  return (
    <header class="header" id="header">
      {/* <div class="logo img"><img class=""
        src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
        alt="logo"/></div> */}
      <p class="logo initials" tabindex="1" href=""></p>
      <div class="navbar">
        <ul class="navbar-list">
          <li>
            <a
              class="navbar-link active"
              name="home"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="4"
            >
              Home
            </a>
          </li>
          {/* <li><a class="navbar-link" name="about" onclick="scrollToSection(this),toggleNav()" tabindex="5">About</a></li> */}
          <li>
            <a
              class="navbar-link"
              name="skills"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="6"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              class="navbar-link"
              name="projects"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="7"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              class="navbar-link"
              name="education"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="8"
            >
              Education
            </a>
          </li>
          <li>
            <a
              class="navbar-link"
              name="experience"
              onclick="scrollToSection(this),toggleNav()"
              tabindex="9"
            >
              Experience
            </a>
          </li>
        </ul>
        {/* <a class="contactBtn button" name="getInTouch" tabindex="10" href="https://www.gmail.com"
        target="_blank">Contact</a> */}
        <ion-icon
          tabindex="9"
          name="close-outline"
          class="mobile-nav-icon"
          onclick="toggleNav()"
        ></ion-icon>
      </div>
      <ion-icon
        tabindex="3"
        name="menu-outline"
        class="mobile-nav-icon"
        onclick="toggleNav()"
      ></ion-icon>
      <ul class="extra-navbar-list">
        <li>
          <a class="contactBtn" name="getInTouch" tabindex="10" href="contact">
            Contact
          </a>
        </li>
        <li>
          <a
            class="navbar-link"
            name="about"
            onclick="scrollToSection(this),toggleNav()"
            tabindex="5"
          >
            About
          </a>
        </li>
      </ul>
    </header>
  );
}
