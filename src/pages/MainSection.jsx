import React from "react";

export default function MainSection(props) {
  return (
    <section className="section home-section" id="home" tabIndex="42">
      <div>
        <h1>
          Hey, I'm <span className="name">{props.name}</span>
        </h1>
        <p className="aboutShort">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          accusamus.
        </p>
        <button
          className="about-me-btn button"
          name="about"
          onclick="scrollToSection(this)"
          tabIndex="2"
        >
          About Me<ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <div className="img_sec">
        <div className="imgDiv">
          <img
            src={props.profile.image}
            className="profile-image"
            alt="ProfileImage"
          />
        </div>
      </div>
    </section>
  );
}
