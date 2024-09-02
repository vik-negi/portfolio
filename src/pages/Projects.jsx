import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProjects } from "../axios/dashboard";
import MyData from "../data/MyData";
import create, { themes } from "../utils/Theme";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
  faArrowRight,
  faClose,
  faGlobeAsia,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { social } from "../assets/svg/social/index.js";
import CustomCarousel from "../utils/CustomCarousel.jsx";
import AddNew from "./admin/utils/AddNew.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import LoadingComponent from "../utils/loader.jsx";
import { getUsername } from "./admin/utils/auth.jsx";
import AddSectionDetailsBtn from "../utils/AddSectionDetailsBtn.jsx";
import ShowAnimatedDialog from "../utils/ShowAnimatedDialog.jsx";
import { useWindowWide } from "./admin/utils/useWindowWide.js";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfURL }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const link = pdfURL;
  // `https://drive.google.com/uc?export=view&id=${
  //   pdfURL.split("/")[5]
  // }`;
  const driveViewerUrl = pdfURL.split("view");
  console.log("pdf ", link);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <iframe
        src={driveViewerUrl[0] + "/preview"}
        onLoad={() => setLoading(false)}
        width={loading ? "0px" : "100%"}
        height="500px"
        allow="autoplay"
      ></iframe>
      {
        loading && <LoadingComponent width={50} />
        // (
        //   <div className="w-full h-96 flex items-center justify-center">
        //     <div
        //       class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-surface opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite] dark:text-white"
        //       role="status"
        //     >
        //       <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        //         Loading...
        //       </span>
        //     </div>
        //   </div>
        // )
      }
    </>
  );
};

export default function Project() {
  const Projects = MyData.projects;
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectedProject, setSelectedProject] = useState();
  const [readMore, setRedeMore] = useState(false);

  const theme = create();

  const width480 = useWindowWide(480);

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
              <a href="https://www.gmail.com"> Email me </a>
            </p>
          </h1>
        </div>
        {Projects?.length == 0 && getUsername() != null && (
          <AddSectionDetailsBtn
            title={"Add Projects"}
            route="/admin/Projects/"
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projects &&
            Projects?.map((project, i) => {
              return (
                <motion.div
                  onClick={() => setSelectedProject(project)}
                  key={i}
                  layoutId={project.id}
                  className={`max-w-xl mx-auto mb-10 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-500 ease-in-out border-[1px] p-4 ${
                    theme.theme == "light"
                      ? "border-gray-200"
                      : "border-gray-800"
                  } `}
                >
                  <motion.div className="flex flex-row gap-2 h-[200px] rounded-xl overflow-hidden">
                    <CustomCarousel height={"200px"} images={project.image} />
                  </motion.div>
                  <motion.div className="mt-8">
                    <motion.h2
                      className={`text-3xl  mb-2 ${
                        theme.theme === "light"
                          ? "text-black-200"
                          : "text-white"
                      }`}
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      className=" text-xl mb-5
                  "
                    >
                      {project.description.length > 150
                        ? project.description.substring(0, 150) + "..."
                        : project.description}
                    </motion.p>

                    <motion.div
                      onClick={() => {
                        setSelectedProject(project);
                        setRedeMore(true);
                      }}
                      className="flex flex-row gap-2 justify-between "
                    >
                      <motion.button className="bg-white px-4 text-black rounded-3xl flex items-center justify-center gap-2 text-sm font-semibold">
                        Curious
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="pl-2 text-sm font-semibold"
                        />
                      </motion.button>
                      <motion.div className="flex flex-row gap-2 items-center">
                        <img
                          className="h-10 w-10 hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                          src={social.github}
                        />
                        <FontAwesomeIcon
                          icon={faGlobeAsia}
                          onClick={() => window.open(project.link, "_blank")}
                          className="text-[20px] hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
        </div>
      </div>
      {selectedProject && (
        <ShowAnimatedDialog
          open={selectedProject != null}
          showCancel={false}
          cancel={() => setSelectedProject(null)}
          width={"max-w-[95%]"}
          title={""}
          body={
            <AnimatePresence>
              <motion.div
                layoutId={selectedProject.id}
                className={`mx-auto border-[2px] ${
                  theme.theme == "light" ? "border-gray-200" : "border-gray-800"
                } ${
                  theme.theme == "light" ? "bg-white" : "bg-[#070707]"
                } rounded-xl overflow-hidden flex flex-col md:flex-row`}
              >
                <motion.div
                  className="flex absolute t-0 r-0 flex-row hover:cursor-pointer gap-2 md:h-12 md:w-12 h-8 w-8 text-white items-center justify-center rounded-full bg-[#000]"
                  onClick={() => setSelectedProject(null)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </motion.div>
                <motion.div
                  className={`min-w-[340px] max-w-[450px] ${
                    selectedProject.projectDoc != null
                      ? "min-h-[450px]"
                      : "min-h-[250px]"
                  }  md:min-h-[500px] mx-auto  max-content ${""}  flex flex-row gap-2  overflow`}
                >
                  {selectedProject?.projectDoc ? (
                    <PDFViewer pdfURL={selectedProject.projectDoc} />
                  ) : (
                    // <CustomCarousel images={selectedProject.image} />
                    <motion.div
                      className="flex gap-2 h-[250px] md:h-[500px] overflow-auto md:flex-col flex-row
                "
                      style={{
                        scrollbarWidth: "none",
                      }}
                    >
                      {selectedProject?.image.map((img) => {
                        return (
                          <img
                            className="w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out "
                            src={img}
                            alt="project-1"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        );
                      })}
                    </motion.div>
                  )}
                </motion.div>
                <motion.div className="max-w-2xl p-5 scroll md:h-[500px] overflow-y-auto overflow-hidden scroll-m-0">
                  <motion.div className=" w-[100%]">
                    <motion.h2
                      className={`${
                        width480 ? "text-[2rem]" : "text-[14px]"
                      } text-start  mb-2 ${
                        theme.theme === "light"
                          ? "text-black-200"
                          : "text-white"
                      }`}
                    >
                      {selectedProject.title}
                    </motion.h2>
                    <motion.div className="flex flex-row gap-10 items-center">
                      <motion.p
                        className={`text-3xl  mb-2 font-semibold ${
                          theme.theme === "light"
                            ? "text-[#111111]"
                            : "text-white"
                        }`}
                      >
                        {selectedProject.name}
                      </motion.p>
                      <motion.div
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
                      </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-row gap-2 justify-start mb-5">
                      <motion.p className="text-xl font-semibold">
                        Level
                      </motion.p>
                      <motion.p className="text-xl">
                        {selectedProject.level}
                      </motion.p>
                    </motion.div>
                    <motion.p
                      className="md:text-[14px] text-xl mb-5 text-left
                  "
                    >
                      {selectedProject.description}
                    </motion.p>
                  </motion.div>
                  <motion.div className="flex flex-row gap-2 justify-start flex-wrap">
                    {selectedProject.skillsUsed.map((skill, i) => {
                      return (
                        <motion.button
                          key={i}
                          className="bg-slate-300 md:text-xl text-[12px] md:px-4 px-2 py-2 text-black rounded-md flex items-center justify-center gap-2"
                        >
                          {skill}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                  <motion.div className="flex flex-wrap gap-x-10 gap-y-4 justify-start mt-5">
                    <motion.div className="flex flex-row gap-x-2 justify-between ">
                      <motion.p className="text-xl font-semibold">
                        Duration:
                      </motion.p>
                      <motion.p className="text-xl">{"1 month"}</motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row gap-x-2 ">
                      <motion.p className="text-xl font-semibold">
                        Status:
                      </motion.p>
                      <motion.p className="text-xl">{"Completed"}</motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row gap-x-2 justify-between">
                      <motion.p className="text-xl font-semibold">
                        Platform:
                      </motion.p>
                      <motion.p className="text-xl">{"Vercel"}</motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          }
        />
      )}
    </section>
  );
}
