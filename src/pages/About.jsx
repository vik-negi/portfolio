import React from "react";

export default function About(props) {
  return (
    <section id="about" className="section about-section" tabIndex="11">
      <div className="about-ill">
        <img src={props.profile.image} alt="VikramNegi" />
      </div>

      <div
        className="aboutMe"
        // data-aos="fade-left"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h2 className="name">{props.profile.name}</h2>
        <div className="professionContainer">
          {props.profile.profession.map((profession, index) => {
            return (
              <p key={index} className="profession">
                {profession}
              </p>
            );
          })}
        </div>
        <br />
        <p className="aboutLong">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat
          quos assumenda nulla exercitationem est nisi odit quam amet corrupti
          officiis inventore aut impedit explicabo id distinctio ullam, libero
          error rem magni consequuntur provident voluptate! Odio numquam
          blanditiis fugit minus.
        </p>
        <br />
        <a
          className="button"
          href="https://novoresume.com"
          //   target="_blank"
          tabIndex="12"
        >
          Resume<ion-icon name="document-outline"></ion-icon>
        </a>
      </div>
      <ul
        className="social-menu"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <li>
          <a
            href="https://www.linkedin.com"
            aria-label="linkedin"
            className="linkedin"
            tabIndex="13"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com"
            aria-label="github"
            className="github"
            tabIndex="14"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            aria-label="instagram"
            className="instagram"
            tabIndex="15"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            aria-label="twitter"
            className="twitter"
            tabIndex="16"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}
