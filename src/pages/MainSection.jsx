import React from "react";

export default function MainSection(props) {
  return (
    <section className="section home-section only-bg" id="home" tabIndex="42">
      <div>
        <h1>
          Hey, I'm <span className="name">{props.name}</span>
        </h1>
        <p className="aboutShort">{props.profile.shortAbout}</p>
        <button
          className="button"
          name="about"
          // onClick="scrollToSection(this)"
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
