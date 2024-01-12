import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProjects } from "../axios/dashboard";

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
  useQuery("projects", () => getProjects(username), {
    onSuccess: (data) => {
      console.log(data.data?.data);
      setProjects(data.data?.data);
    },
  });

  return (
    <section
      className="section main project-section"
      id="projects"
      tabIndex="18"
    >
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
              <a href="https://www.gmail.com" tabIndex="22">
                Email me{" "}
              </a>
            </p>
          </h1>
        </div>
        <div className="project card-cont-project">
          {Projects &&
            Projects.map((project, i) => {
              return (
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
                      <p className="card__description">{project.description}</p>
                    </div>
                    <button className="card__button">Read more</button>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
