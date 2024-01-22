import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProjects } from "../axios/dashboard";
import MyData from "../data/MyData";
import { CommonToolTip } from "../utils/CommonToolTip";
import create, { themes } from "../utils/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGlobeAsia,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { social } from "../assets/svg/social/index.js";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Projects &&
            Projects.map((project, i) => {
              return (
                <article
                  key={i}
                  className="max-w-xl mx-auto border-2 rounded-xl overflow-hidden"
                >
                  <div className="flex flex-row gap-2 h-[200px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-500 ease-in-out hover:shadow-2xl hover:cursor-pointer"
                      src={
                        project.image[0]
                        // "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
                      }
                      alt="project-1"
                    />
                  </div>
                  <div className="m-4">
                    <div className="">
                      <h2
                        className="text-3xl  mb-2
                    "
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
                    <div className="flex flex-row gap-2 justify-between ">
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
                          className="text-[20px] hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                // <CommonToolTip
                //   maxWidth={"w-[400px]"}
                //   children={
                //     <article key={i} className="">
                //       <img
                //         className="w-[300px] h-[300px] object-contain rounded-md"
                //         src={
                //           project.image[0]
                //           // "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
                //         }
                //         alt="project-1"
                //         // width="1920"
                //         // height="2193"
                //       />
                //       <div className="">
                //         <div className="">
                //           <h2
                //             className="text-2xl
                //           "
                //           >
                //             {project.title}
                //           </h2>
                //           <p
                //             className=" text-sm
                //           "
                //           >
                //             {project.description}
                //           </p>
                //         </div>
                //         <button className="card__button">Read more</button>
                //       </div>
                //     </article>
                //   }
                //   content={
                //     <div
                //       className={`flex flex-col gap-2 ${
                //         theme.theme !== "light" ? "bg-blue-gray" : "bg-white"
                //       }  z-10 w-full sm:w-[400px]`}
                //     >
                //       <img
                //         src={project.image[0]}
                //         alt="projetimg"
                //         className="w-full h-[200px] object-cover rounded-md"
                //       />
                //       <h1 className="text-2xl text-left font-semibold">
                //         {project.title}
                //       </h1>
                //       <p
                //         className={`text-sm ${
                //           theme.theme === "light" ? "text-black" : "text-white"
                //         }`}
                //       >
                //         {project.description}
                //       </p>
                //       <div className="flex flex-row gap-2">
                //         {project.tags.map((tag, i) => {
                //           return (
                //             <span
                //               key={i}
                //               className="text-xs px-2 py-1 rounded-md bg-gray-200 text-gray-700"
                //             >
                //               {tag}
                //             </span>
                //           );
                //         })}
                //       </div>
                //     </div>
                //   }
                // />
              );
            })}
        </div>
      </div>
    </section>
  );
}
