import React from "react";

export default function About(props) {
  return (
    <section id="about" class="section about-section" tabindex="11">
      <div class="about-ill">
        <img src={`public/images/${props.profile.image}`} alt="VikramNegi" />
      </div>

      <div
        class="aboutMe"
        // data-aos="fade-left"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h2 class="name">{props.profile.name}</h2>
        <div class="professionContainer">
          {props.profile.profession.map((profession, index) => {
            return (
              <p key={index} class="profession">
                {profession}
              </p>
            );
          })}
        </div>
        <br />
        <p class="aboutLong">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat
          quos assumenda nulla exercitationem est nisi odit quam amet corrupti
          officiis inventore aut impedit explicabo id distinctio ullam, libero
          error rem magni consequuntur provident voluptate! Odio numquam
          blanditiis fugit minus.
        </p>
        <br />
        <a
          class="button"
          href="https://novoresume.com"
          //   target="_blank"
          tabindex="12"
        >
          Resume<ion-icon name="document-outline"></ion-icon>
        </a>
      </div>
      <ul
        class="social-menu"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <li>
          <a
            href="https://www.linkedin.com"
            aria-label="linkedin"
            class="linkedin"
            tabindex="13"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com"
            aria-label="github"
            class="github"
            tabindex="14"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            aria-label="instagram"
            class="instagram"
            tabindex="15"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            aria-label="twitter"
            class="twitter"
            tabindex="16"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}
