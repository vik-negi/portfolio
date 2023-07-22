import "./App.css";
import "./style/Loader.css";
import Navbar from "./componenets/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

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
      {/* <div class="loaderDiv">
        <div class="loading"></div>
        <p>Loading page</p>
      </div> */}

      {/* Toaster */}
      <div className="toaster"></div>
      {/* Div for background */}
      <div className="bg-div"></div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={profile.name.split(" ")[0]}
              skills={skills}
              profile={profile}
            />
          }
        />
        <Route path="/about" element={<About profile={profile} />} />
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
