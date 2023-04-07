import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Protfolio from "./Protfolio";
import Skills from "./Skills";

export default function Home(props) {
  return (
    <>
      <MainSection name={props.profile.name.split(" ")[0]} />
      <About profile={props.profile} />
      <Skills skills={props.skills} />
      <Projects />
      <Experiences />
      <Protfolio />
    </>
  );
}
