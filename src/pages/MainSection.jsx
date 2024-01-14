import React, { useEffect, useState } from "react";
import StringUtils from "../utils/String";
import { useQuery } from "react-query";
import { publicInfo } from "../axios/dashboard";
import MyData from "../data/MyData";

export default function MainSection({ username, profile }) {
  const [userInfo, setUserInfo] = useState();
  const [isFirstTime, setIsFirstTime] = useState(true);
  if (
    username === undefined ||
    (username === "vikramnegi-9162604468" && isFirstTime)
  ) {
    setUserInfo(MyData.publicInfo);
    setIsFirstTime(false);
  }

  const { isLoading } = useQuery(["data"], () => publicInfo(username), {
    onSuccess: (data) => {
      setUserInfo(data.data?.data);
    },
    onError: (error) => {
      setUserInfo(MyData.publicInfo);
    },
  });

  return (
    <section className="section home-section only-bg" id="home" tabIndex="42">
      {userInfo && (
        <div>
          <h1>
            Hey, I'm{" "}
            <span className="name">
              {StringUtils.capitalizeString(userInfo?.user.firstName) +
                " " +
                StringUtils.capitalizeString(userInfo?.user.lastName)}
            </span>
          </h1>
          <p className="aboutShort">{userInfo?.profileDescription}</p>
          <button
            className="button"
            name="about"
            // onClick="scrollToSection(this)"
            tabIndex="2"
          >
            About Me<ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      )}
      <div className="img_sec">
        <div className="imgDiv">
          <img
            src={profile.image}
            className="profile-image"
            alt="ProfileImage"
          />
        </div>
      </div>
    </section>
  );
}
