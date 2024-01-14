import React, { useEffect, useState } from "react";
import { social } from "../assets/svg/social/index.js";
import "../assets/svg/social/github.svg";
import create, { themes } from "../utils/Theme";
import { Ripple, initTE } from "tw-elements";
import { getAbout } from "../axios/dashboard.js";
import { useQuery, useQueryClient, useMutation } from "react-query";
import MyData from "../data/MyData.jsx";

const About = ({ username, profile }) => {
  const queryClient = useQueryClient();
  console.log("nikjmi", username);

  if (username === undefined) {
    username = "vikramnegi-9162604468";
  }
  initTE({ Ripple });
  const socialLinks = [
    social.github,
    social.linkedin && social.linkedin,
    social.twitter && social.twitter,
    social.instagram && social.instagram,
    social.facebook && social.facebook,
  ];

  const [about, setAbout] = useState();
  // const { isLoading, isSuccess, isError, error, data } = useQuery(
  //   ["data"],
  //   getAbout(props.username)
  // );
  // if (data) {
  //   console.log("about : ", data?.data?.data);
  // }

  if (username == "vikramnegi-9162604468") {
    setAbout(MyData.about);
  }

  const mutation = useMutation((id) => getAbout(username), {
    onSuccess: () => {
      queryClient.invalidateQueries("avatar");
    },
    onError: (error) => {
      setAbout(MyData.about);
    },
  });
  var data = null;

  useEffect(() => {
    const fetchData = async () => {
      const result = await mutation.mutateAsync(); // Use mutateAsync to get data
      setAbout(result?.data?.data);
      console.log("about : ", result?.data?.data?.passion);
    };
    fetchData();
  }, []);

  const store = create();

  return (
    <section id="about" className="section about-section" tabIndex="11">
      {about && (
        <div className="about-ill">
          <img src={profile.image} alt="VikramNegi" />
        </div>
      )}

      {about && (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            fugiat quos assumenda nulla exercitationem est nisi odit quam amet
            corrupti officiis inventore aut impedit explicabo id distinctio
            ullam, libero error rem magni consequuntur provident voluptate! Odio
            numquam blanditiis fugit minus.
          </p>
          <br />
          <a
            className="button"
            href={about?.resume}
            target="_blank"
            tabIndex="12"
          >
            Resume<ion-icon name="document-outline"></ion-icon>
          </a>
        </div>
      )}
      {about && (
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
      )}
    </section>
  );
};

export default About;
