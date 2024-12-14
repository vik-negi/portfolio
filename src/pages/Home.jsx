import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";
import { useQuery } from "react-query";
// Add these imports at the beginning of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { callApi, dashboard, publicInfo } from "../axios/dashboard";

import { useLocation, useParams } from "react-router-dom";
import { getUsername } from "./admin/utils/auth";
import MainDashboard from "./MainDashboard";
import Contact from "./Contact";

library.add(faBars, faTimes);

export default function Home(props) {
  return (
    <>
      <MainSection />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Experiences id="experience" />
      <Contact />
      <div className="w-full md:h-[120px] sm:h-[48px] h-[24px]"></div>
    </>
  );
}
