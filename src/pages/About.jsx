import React, { useEffect, useState } from "react";
import { social } from "../assets/svg/social/index.js";
import "../assets/svg/social/github.svg";
import create, { themes } from "../utils/Theme";
import { Ripple, initTE } from "tw-elements";
import { getAbout } from "../axios/dashboard.js";
import { useQuery, useQueryClient, useMutation } from "react-query";
import MyData from "../data/MyData.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { parseStyledText } from "../utils/text_parser.jsx";
import StringUtils from "../utils/String.js";

const About = () => {
  initTE({ Ripple });

  const about = MyData.about;
  const store = create();

  return (
    <section id="about" className="section about-section" tabIndex="11">
      {!about && (
        <div className="about-ill">
          <img src={about?.image} alt="VikramNegi" />
        </div>
      )}

      {
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
            {/* {about?.title} */}
          </h2>
          <div className="professionContainer">
            {about?.passion == null && (
              <>
                <p className="profession">Your Passion</p>
                <p className="profession">E.g., Singing</p>
              </>
            )}
            {about?.passion.map((profession, index) => {
              return (
                <p key={index} className="profession">
                  {profession}
                </p>
              );
            })}
          </div>
          <br />
          <p className="aboutLong">
            {about?.description != null
              ? parseStyledText(
                  about?.description.length > 450
                    ? about?.description.slice(0, 450) + "..."
                    : about?.description
                )
              : ""}
          </p>
          <br />
          <a
            className="button "
            href={about?.resume}
            download={
              StringUtils.capitalizeString(about.user.firstName) +
              StringUtils.capitalizeString(about?.user.lastName) +
              "Resume"
            }
            target="_blank"
            tabIndex="12"
          >
            <FontAwesomeIcon icon={faDownload} />
            <p className="text-[14px]">Download Resume</p>
          </a>
        </div>
      }
      {
        <div className="socialMedia w-[80px]">
          {Object.values(social).map((socialLink, index) => {
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
};

export default About;
