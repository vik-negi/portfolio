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
import { darkBorder, lightBorder } from "../data/constants.jsx";

const About = () => {
  initTE({ Ripple });

  const about = MyData.about;
  const store = create();

  return (
    <section
      id="about"
      style={{
        backgroundColor: store.theme === "light" ? "#f5f5f5" : "#1b1b1b",
        border:
          store.theme === "light" ? "2px solid #d7d7d7" : "2px solid #1c1c1c",
      }}
      className="section about-section border-2 rounded-2xl sm:p-6 p-3 mb-[128px]"
      tabIndex="11"
    >
      {!about && (
        <div className="about-ill">
          <img src={about?.image} alt="VikramNegi" />
        </div>
      )}

      {
        <div
          className="aboutMe "
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
          <div className="professionContainer flex flex-wrap gap-2">
            {about?.passion == null && (
              <>
                <p className="profession ">Your Passion</p>
                <p className="profession">E.g., Singing</p>
              </>
            )}
            {about?.passion.map((profession, index) => {
              return (
                <p
                  key={index}
                  className={`profession sm:text-[14px] text-[8px] px-6 py-2 rounded-lg
                    ${
                      store.theme === "light"
                        ? `text-[#121212] bg-[#dbd8da] border-[1px] border-[${lightBorder}]`
                        : `text-[#fff] bg-[#100a0d] border-[1px] border-[${darkBorder}]`
                    }`}
                >
                  {profession}
                </p>
              );
            })}
          </div>
          <br />
          <p className="aboutLong md:text-[16px] sm:text-[14px] text-[12px]">
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
