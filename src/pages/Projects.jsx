import React from "react";

export default function Project() {
  const Projects = [
    {
      img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg",
      title: "Evika - An Event Management Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg",
    },
    {
      img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png",
      title: "Evika - An Event Management Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg",
    },
    {
      img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg",
      title: "Evika - An Event Management Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
    },
    {
      img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-4.png",
      title: "Evika - An Event Management Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
    },
    {
      img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-5.png",
      title: "Evika - An Event Management Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      link: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.jpg",
    },
  ];
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
          <img
            className="ProjectHeaderImage"
            src={`/public/images/project-head.png`}
            alt="Project-header"
          />
        </div>
        <div className="project card-cont-project">
          {Projects.map((project, i) => {
            return (
              <article key={i} className="card-p">
                <img
                  className="card__background"
                  src={project.img}
                  alt="project-1"
                  width="1920"
                  height="2193"
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
