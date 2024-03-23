import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProjects } from "../axios/dashboard";
import MyData from "../data/MyData";
import create, { themes } from "../utils/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
  faArrowRight,
  faGlobeAsia,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { social } from "../assets/svg/social/index.js";
import CustomCarousel from "../utils/CustomCarousel.jsx";
import AddNew from "./admin/utils/AddNew.jsx";

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
  const [selectedProject, setSelectedProject] = useState();
  const [readMore, setRedeMore] = useState(false);
  if (username == "vikramnegi-9162604468" && isFirstTime) {
    setIsFirstTime(false);
    setProjects(MyData.projects);
  }
  if (username === undefined) {
    username = "vikramnegi-9162604468";
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
        <div className="section-header mb-5">
          <h1 className="title">
            My recent work
            <p className="sectionDesc">
              Here are a few past projects I've worked on. Want to see more?
              <a href="https://www.gmail.com">Email me </a>
            </p>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projects &&
            Projects.map((project, i) => {
              return (
                <article
                  key={i}
                  className="max-w-xl mx-auto border-2 rounded-xl overflow-hidden"
                >
                  <div className="flex flex-row gap-2 h-[200px] overflow-hidden">
                    {/* <img
                      className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-500 ease-in-out hover:shadow-2xl hover:cursor-pointer"
                      src={
                        project.image[0]
                        // "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
                      }
                      alt="project-1"
                    /> */}

                    <CustomCarousel images={project.image} />
                  </div>
                  <div className="m-4">
                    <div className="">
                      <h2
                        className={`text-3xl  mb-2 ${
                          theme.theme === "light"
                            ? "text-black-200"
                            : "text-white"
                        }`}
                      >
                        {project.title}
                      </h2>
                      <p
                        className=" text-xl mb-5
                    "
                      >
                        {project.description.length > 150
                          ? project.description.substring(0, 150) + "..."
                          : project.description}
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        setSelectedProject(project);
                        setRedeMore(true);
                      }}
                      className="flex flex-row gap-2 justify-between "
                    >
                      <button className="bg-slate-300 px-4 py-2 text-black rounded-md flex items-center justify-center gap-2">
                        Read more
                        <FontAwesomeIcon icon={faArrowRight} className="p-2" />
                      </button>
                      <div className="flex flex-row gap-2 items-center">
                        <img
                          className="h-10 w-10 hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                          src={social.github}
                        />
                        <FontAwesomeIcon
                          icon={faGlobeAsia}
                          onClick={() => window.open(project.link, "_blank")}
                          className="text-[20px] hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
      {selectedProject && (
        <AddNew
          open={readMore}
          showCancel={false}
          width={"max-w-[95%]"}
          cancel={() => {
            setRedeMore(false);
          }}
          title={"Add New Project"}
          body={
            <article className="mx-auto  border-2 rounded-xl overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-[100%] min-w-[700px] max-w-[900px] w-[100%] flex flex-row gap-2  overflow-hidden">
                {/* <img
                      className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-500 ease-in-out hover:shadow-2xl hover:cursor-pointer"
                      src={
                        project.image[0]
                        // "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
                      }
                      alt="project-1"
                    /> */}

                <CustomCarousel images={selectedProject.image} />
              </div>
              <div className="m-4">
                <div className="">
                  <h2
                    className={`text-3xl  mb-2 ${
                      theme.theme === "light" ? "text-black-200" : "text-white"
                    }`}
                  >
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-row gap-10 items-center">
                    <p
                      className={`text-3xl  mb-2 font-semibold ${
                        theme.theme === "light"
                          ? "text-[#111111]"
                          : "text-white"
                      }`}
                    >
                      {selectedProject.name}
                    </p>
                    <div
                      className="flex flex-row gap-2 items-center"
                      style={{ marginTop: "auto" }}
                    >
                      <img
                        className="h-10 w-10 hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                        src={social.github}
                      />
                      <FontAwesomeIcon
                        icon={faGlobeAsia}
                        onClick={() =>
                          window.open(selectedProject.link, "_blank")
                        }
                        className="text-[20px] hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 justify-start mb-5">
                    <p className="text-xl font-semibold">Level</p>
                    <p className="text-xl">{selectedProject.level}</p>
                  </div>
                  <p
                    className=" text-xl mb-5
                    "
                  >
                    {selectedProject.description}
                  </p>
                </div>
                <div className="flex flex-row gap-2 justify-start ">
                  {selectedProject.skillsUsed.map((skill, i) => {
                    return (
                      <button
                        key={i}
                        className="bg-slate-300 px-4 py-2 text-black rounded-md flex items-center justify-center gap-2"
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-row gap-10 justify-start mt-5">
                  <div className="flex flex-row gap-2 justify-between mt-5">
                    <p className="text-xl font-semibold">Duration:</p>
                    <p className="text-xl">{"1 month"}</p>
                  </div>
                  <div className="flex flex-row gap-2 justify-between mt-5">
                    <p className="text-xl font-semibold">Status:</p>
                    <p className="text-xl">{"Completed"}</p>
                  </div>
                  <div className="flex flex-row gap-2 justify-between mt-5">
                    <p className="text-xl font-semibold">Platform:</p>
                    <p className="text-xl">{"Vercel"}</p>
                  </div>
                </div>
              </div>
            </article>
          }
        />
      )}
    </section>
  );
}
