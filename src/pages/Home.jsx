import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Protfolio from "./Protfolio";
import Skills from "../componenets/skills/skills";

export default function Home(props) {
  return (
    <>
      <MainSection
        name={props.profile.name.split(" ")[0]}
        profile={props.profile}
      />
      <About profile={props.profile} />
      <Skills skills={props.skills} />
      <Projects />
      <Experiences />
      <Protfolio />
    </>
  );
}
