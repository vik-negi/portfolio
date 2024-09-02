import React, { useEffect, useState } from "react";
import StringUtils from "../utils/String";
import { useQuery } from "react-query";
import { publicInfo } from "../axios/dashboard";
import MyData from "../data/MyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MainDashboard from "./MainDashboard";

export default function MainSection() {
  const userInfo = MyData.publicInfo;
  return (
    <section
      className="section home-section mt-24 only-bg"
      id="home"
      tabIndex="42"
    >
      {userInfo && (
        <div>
          <h1>
            Hey, I'm{" "}
            <span className="name text-center">
              {StringUtils.capitalizeString(userInfo?.user.firstName) +
                " " +
                StringUtils.capitalizeString(userInfo?.user.lastName)}
            </span>
          </h1>
          <p className="aboutShort">{userInfo?.profileDescription}</p>

          <button
            className={`text-2xl px-8 py-4 mt-4 bg-[#efcf5e]  rounded-full text-black font-semibold hover:bg-[#f0c14b] hover:text-black cursor-pointer`}
            name="about"
            // onClick="scrollToSection(this)"
            tabIndex="2"
          >
            About Me
            {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
          </button>
        </div>
      )}
      <div className="img_sec">
        <div className={`${"imgDiv"}`}>
          <img
            src={userInfo?.user?.profilePic}
            className={`profile-image ${
              userInfo?.user?.profilePic !== null
                ? "rounded-full w-[200px] h-[200px]"
                : "rounded-lg"
            }`}
            alt="ProfileImage"
          />
        </div>
      </div>
    </section>
  );
}
