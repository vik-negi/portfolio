import React from "react";
import { social } from "../assets/svg/social/index.js";
import "../assets/svg/social/github.svg";

export default function About(props) {
  const socialLinks = [
    social.github && social.github,
    social.linkedin && social.linkedin,
    social.twitter && social.twitter,
    social.instagram && social.instagram,
    social.facebook && social.facebook,
  ];

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

      {
        <div className="socialMedia w-[100px]">
          {socialLinks.map((socialLink, index) => {
            return (
              <a
                key={index}
                href={socialLink}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="13"
              >
                <img
                  src={socialLink}
                  width={45}
                  height={45}
                  alt="social_media_link"
                  className="md:my-4 bg-[#2c2c2c] rounded-full p-2 hover:bg-[#1a1a1a] transition duration-300 ease-in-out content-center fit-content"
                />
              </a>
            );
          })}
        </div>
      }
    </section>
  );
}
