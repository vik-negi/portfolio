import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProjects } from "../axios/dashboard";
import MyData from "../data/MyData";
import { CommonToolTip } from "../utils/CommonToolTip";
import create, { themes } from "../utils/Theme";

export default function Project({ username }) {
  // const Projects = [
  //   {
  //     img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg",
  //     title: "Evika - An Event Management Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
  //     link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg",
  //   },
  //   {
  //     img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png",
  //     title: "Evika - An Event Management Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
  //     link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg",
  //   },
  //   {
  //     img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg",
  //     title: "Evika - An Event Management Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
  //     link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
  //   },
  //   {
  //     img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-4.png",
  //     title: "Evika - An Event Management Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
  //     link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
  //   },
  //   {
  //     img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-5.png",
  //     title: "Evika - An Event Management Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
  //     link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
  //   },
  // ];

  const [Projects, setProjects] = useState();
  const [isFirstTime, setIsFirstTime] = useState(true);
  if (username == "vikramnegi-9162604468" && isFirstTime) {
    setIsFirstTime(false);
    setProjects(MyData.projects);
  }
  useQuery("projects", () => getProjects(username), {
    onSuccess: (data) => {
      console.log(data.data?.data);
      setProjects(data.data?.data);
    },
    onError: (error) => {
      setProjects(MyData.projects);
    },
  });

  const theme = create();

  return (
    <section className="section main project-section" id="projects">
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        // data-aos="zoom-in-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div className="section-header">
          <h1 className="title">
            My recent work
            <p className="sectionDesc">
              Here are a few past projects I've worked on. Want to see more?
              <a href="https://www.gmail.com">Email me </a>
            </p>
          </h1>
        </div>
        <div className="project card-cont-project">
          {Projects &&
            Projects.map((project, i) => {
              return (
                <CommonToolTip
                  maxWidth={"w-[400px]"}
                  children={
                    <article
                      key={i}
                      style={{
                        height: "200px",
                      }}
                      className="card-p"
                    >
                      <img
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                        className="card__background"
                        src={
                          project.image[0]
                          // "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
                        }
                        alt="project-1"
                        // width="1920"
                        // height="2193"
                      />
                      <div className="card__content | flow">
                        <div className="card__content--container | flow">
                          <h2 className="card__title">{project.title}</h2>
                          <p className="card__description">
                            {project.description}
                          </p>
                        </div>
                        <button className="card__button">Read more</button>
                      </div>
                    </article>
                  }
                  content={
                    <div
                      className={`flex flex-col gap-2 ${
                        theme.theme !== "light" ? "bg-blue-gray" : "bg-white"
                      }  z-10 w-full sm:w-[400px]`}
                    >
                      <img
                        src={project.image[0]}
                        alt="projetimg"
                        className="w-full h-[200px] object-cover rounded-md"
                      />
                      <h1 className="text-2xl text-left font-semibold">
                        {project.title}
                      </h1>
                      <p
                        className={`text-sm ${
                          theme.theme === "light" ? "text-black" : "text-white"
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-row gap-2">
                        {project.tags.map((tag, i) => {
                          return (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 rounded-md bg-gray-200 text-gray-700"
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  }
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
