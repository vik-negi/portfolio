import "./App.css";
import "./style/Loader.css";
import Navbar from "./componenets/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./demo";
import { ThemeModeProvider } from "./context/ThemeContext";
import { themes, StyledComponent } from "./utils/Theme";
import LayoutComponent from "./utils/TopLayerLayout";
import Login from "./pages/admin/Login";

function App() {
  // const slowInternet = setTimeout(() => {
  //   document.querySelector(".loaderDiv p").innerHTML = "Slow internet :(";
  // }, 3000);

  // const almostReady = setTimeout(() => {
  //   document.querySelector(".loaderDiv p").innerHTML =
  //     "Page is almost ready...";
  // }, 7000);

  // document.onreadystatechange = () => {
  //   if (document.readyState === "complete") {
  //     // document ready
  //     clearTimeout(slowInternet);
  //     clearTimeout(almostReady);

  //     document.querySelector(".loaderDiv p").innerHTML =
  //       "Page is almost ready!";

  //     setTimeout(() => {
  //       document.querySelector(".loaderDiv p").innerHTML = "Page is ready!";
  //     }, 1000);
  //     setTimeout(() => {
  //       document.querySelector(".loaderDiv p").classList.add("removeLoader");
  //       document.querySelector("body").style.overflowY = "scroll";
  //     }, 2500);

  //     window.scrollTo(0, 0);
  //   }
  //   window.scrollTo(0, 0);
  // };
  const profile = {
    name: "Vikram Negi",
    age: 20,
    email: "vikramnegi175@gmail.com",
    phone: "8178-945-004",
    address: "New Delhi, India",
    shortAbout:
      "I'm a skilled Software Engineer and Developer based in New Delhi, India. With expertise in Flutter, web development, databases, and machine learning, passionate about solving real-world problems through technology. Has practical experience as a Software Engineer Intern and as a freelancer.",
    image:
      "https://res.cloudinary.com/drngfg58j/image/upload/v1680951338/media/portfolio/about_main_vpa9ed.png",
    profession: ["Web Developer", "Coder", "Machine Learning Enthusiast"],
  };

  const skills = {
    major: [
      {
        key: "1",
        title: "Machine Learning",
        image:
          "https://static.vecteezy.com/system/resources/previews/002/596/426/large_2x/machine-learning-artificial-neural-network-ai-illustration-vector.jpg",
      },
      {
        key: "2",
        title: "App Development",
        image:
          "https://image.freepik.com/free-vector/app-development-illustration_81257-126.jpg",
      },
      {
        key: "3",
        title: "Web Development",
        image:
          "https://th.bing.com/th/id/OIP.UQEsuePmIfWT-0pdBML27QHaE8?pid=ImgDet&rs=1",
      },
      {
        key: "4",
        title: "Coding",
        image:
          "https://th.bing.com/th/id/OIP.NUFWhoVkOM5Q56G0uiJw0wHaE5?pid=ImgDet&rs=1",
      },
    ],
    languages: [
      "Python",
      "HTML",
      "CSS",
      "Dart",
      "JavaScript",
      "C++",
      "C",
      "Java",
    ],
    frameworks: ["React", "Django", "Flask", "Bootstrap", "TailwindCSS"],
    databases: ["MySQL", "MongoDB", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  };

  return (
    <HashRouter base="/">
      <ThemeModeProvider theme={themes}>
        {/* <div className="loaderDiv">
        <div className="loading"></div>
        <p>Loading page</p>
      </div> */}

        {/* Toaster */}
        {/* <div className="toaster"></div> */}
        {/* Div for background */}
        {/* <div className="bg-div"></div> */}

        <Routes>
          <Route
            path="/"
            element={
              <LayoutComponent
                children={
                  <Home
                    name={profile.name.split(" ")[0]}
                    skills={skills}
                    profile={profile}
                  />
                }
              />
            }
          />
          <Route
            path="/about"
            element={<LayoutComponent children={<About profile={profile} />} />}
          />
          <Route
            path="/skills"
            element={<LayoutComponent children={<Skills skills={skills} />} />}
          />
          <Route
            path="/projects"
            element={<LayoutComponent children={<Projects />} />}
          />
          <Route
            path="/contact"
            element={<LayoutComponent children={<Contact />} />}
          />
          <Route
            path="/experiences"
            element={<LayoutComponent children={<Experiences />} />}
          />
          <Route
            path="/admin/*"
            element={
              <LayoutComponent
                children={<AdminRoutes />}
                notShowNavbar={true}
              />
            }
          />
          <Route
            path="/:username"
            element={
              <LayoutComponent
                children={
                  <Home
                    name={profile.name.split(" ")[0]}
                    skills={skills}
                    profile={profile}
                  />
                }
              />
            }
          />
        </Routes>
      </ThemeModeProvider>
    </HashRouter>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* Add other admin routes here */}
    </Routes>
  );
}
export default App;
