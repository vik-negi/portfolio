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
    <section class="section main project-section" id="projects" tabindex="18">
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
        <div class="section-header">
          <h1 class="title">
            My recent work
            <p class="sectionDesc">
              Here are a few past projects I've worked on. Want to see more?
              <a href="https://www.gmail.com" tabindex="22">
                Email me{" "}
              </a>
            </p>
          </h1>
          <img
            class="ProjectHeaderImage"
            src={`/public/images/project-head.png`}
            alt="Project-header"
          />
        </div>
        <div class="project card-cont-project">
          {Projects.map((project) => {
            return (
              <article class="card-p">
                <img
                  class="card__background"
                  src={project.img}
                  alt="project-1"
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title">{project.title}</h2>
                    <p class="card__description">{project.description}</p>
                  </div>
                  <button class="card__button">Read more</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
