import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";
// Add these imports at the beginning of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Add this line before your component definition to add the icons to the library
library.add(faBars, faTimes);

export default function Home(props) {
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
