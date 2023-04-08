import React from "react";

export default function MainSection(props) {
  return (
    <section class="section home-section" id="home" tabindex="42">
      <div>
        <h1>
          Hey, I'm <span class="name">{props.name}</span>
        </h1>
        <p class="aboutShort">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          accusamus.
        </p>
        <button
          class="about-me-btn button"
          name="about"
          onclick="scrollToSection(this)"
          tabindex="2"
        >
          About Me<ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <div class="img_sec">
        <div class="imgDiv">
          <img
            src={`public/images/about_t.png`}
            class="profile-image"
            alt="ProfileImage"
          />
        </div>
      </div>
    </section>
  );
}
