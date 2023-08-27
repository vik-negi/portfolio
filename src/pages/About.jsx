import React from "react";
import { social } from "../assets/svg/social/index.js";
import "../assets/svg/social/github.svg";
import create, { themes } from "../utils/Theme";
import { Ripple, initTE } from "tw-elements";

export default function About(props) {
  initTE({ Ripple });
  const socialLinks = [
    social.github,
    social.linkedin && social.linkedin,
    social.twitter && social.twitter,
    social.instagram && social.instagram,
    social.facebook && social.facebook,
  ];

  const store = create();

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
        <h2
          className={`name ${
            store.theme === "light" ? "text-[#121212]" : "text-[#fff]"
          }`}
        >
          {props.profile.name}
        </h2>
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
        <div className="socialMedia w-[80px]">
          {Object.values(social).map((socialLink, index) => {
            console.log(socialLink);
            return (
              <button
                type="button"
                key={index}
                className="md:my-4 inline-block rounded-full text-xs font-medium uppercase leading-normal"
              >
                <img className="h-45 w-45" src={socialLink} />
              </button>
            );
          })}
        </div>
      }
    </section>
  );
}
