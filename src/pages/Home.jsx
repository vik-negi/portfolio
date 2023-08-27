import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";
import { useQuery } from "react-query";
// Add these imports at the beginning of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { dashboard } from "../axios/dashboard";

import { useLocation, useParams } from "react-router-dom";

library.add(faBars, faTimes);

export default function Home(props) {
  const { username } = useParams();
  console.log("username ", username);

  // const { isLoading, isSuccess, isError, error, data } = useQuery(
  //   ["data"],
  //   dashboard
  // );

  // if (isError) {
  //   console.log("error ", error);
  // }
  return (
    <>
      <MainSection
        name={props.profile.name.split(" ")[0]}
        profile={props.profile}
      />
      <About id="about" profile={props.profile} />
      <Skills id="skills" />
      <Projects id="projects" />
      <Experiences id="experience" />
    </>
  );
}
