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
  const slowInternet = setTimeout(() => {
    document.querySelector(".loaderDiv p").innerHTML = "Slow internet :(";
  }, 3000);

  const almostReady = setTimeout(() => {
    document.querySelector(".loaderDiv p").innerHTML =
      "Page is almost ready...";
  }, 7000);

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      // document ready
      clearTimeout(slowInternet);
      clearTimeout(almostReady);

      document.querySelector(".loaderDiv p").innerHTML =
        "Page is almost ready!";

      setTimeout(() => {
        document.querySelector(".loaderDiv p").innerHTML = "Page is ready!";
      }, 1000);
      setTimeout(() => {
        document.querySelector(".loaderDiv").classList.add("removeLoader");
        document.querySelector("body").style.overflowY = "scroll";
      }, 2500);

      window.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
  };
  const profile = {
    name: "Vikram Negi",
    age: 20,
    email: "vikramnegi175@gmail.com",
    phone: "8178-945-004",
    address: "New Delhi, India",
    image: "about_t.png",
    profession: ["Web Developer", "Coder", "Machine Learning Enthusiast"],
  };

  const skills = {
    major: [
      {
        title: "Machine Learning",
        image:
          "https://static.vecteezy.com/system/resources/previews/002/596/426/large_2x/machine-learning-artificial-neural-network-ai-illustration-vector.jpg",
      },
      {
        title: "App Development",
        image:
          "https://image.freepik.com/free-vector/app-development-illustration_81257-126.jpg",
      },
      {
        title: "Web Development",
        image:
          "https://th.bing.com/th/id/OIP.UQEsuePmIfWT-0pdBML27QHaE8?pid=ImgDet&rs=1",
      },
      {
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
    <HashRouter>
      <div class="loaderDiv">
        <div class="loading"></div>
        <p>Loading page</p>
      </div>

      {/* Toaster */}
      <div class="toaster"></div>
      {/* Div for background */}
      <div class="bg-div"></div>
      <Navbar />
      <Routes>
        {/* Loader */}
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
