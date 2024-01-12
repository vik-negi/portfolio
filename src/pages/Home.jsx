import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";
import { useQuery } from "react-query";
// Add these imports at the beginning of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { dashboard, publicInfo } from "../axios/dashboard";

import { useLocation, useParams } from "react-router-dom";

library.add(faBars, faTimes);

export default function Home(props) {
  var { username } = useParams();
  console.log("username ", username);

  if (username === undefined) {
    username = "vikramnegi-9162604468";
  }

  return (
    <>
      <MainSection
        name={props.profile.name.split(" ")[0]}
        profile={props.profile}
        username={username}
      />
      <About id="about" profile={props.profile} username={username} />
      <Skills id="skills" username={username} />
      <Projects id="projects" username={username} />
      <Experiences id="experience" username={username} />
    </>
  );
}
