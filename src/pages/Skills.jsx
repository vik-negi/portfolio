import React, { useState } from "react";
import create from "../utils/Theme";

import SectionHeader from "../componenets/SectionHeader";
const SkillTab = ({ title, skills, isActive }) => {
  if (!isActive) return null;
  const theme = create();

  const tabTitleStyle = "text-5xl font-bold my-5 font-mono text-blue-500 px-10";

  const skillCardStyle = `my-5 p-5 w-[200px] h-[150px] bg-[#100F22] rounded-lg shadow-lg flex flex-col justify-center items-center ${
    theme.theme === "light" && "bg-[#E1EBF5]"
  }`;

  return (
    <div>
      <div className={`${tabTitleStyle}`}>{title}</div>
      <div
        className={`grid mx-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 gap-2 justify-items-center transition-all overflow-hidden duration-5000 ease-in-out`}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={
              {
                // backgroundColor: "rgb(16 15 34)",
              }
            }
            className={`${skillCardStyle} hover:bg-transparent hover:shadow-none transition duration-500 ease-in-out hover:border-2 hover:border-blue-500 rounded-lg hover:cursor-pointer 
           `}
          >
            <img
              className="w-20 h-20 rounded-full"
              src={
                // skill.image ||
                "https://th.bing.com/th/id/R.c963626c145ea660ba7ceee666789c0a?rik=%2b8pQxk8WvGd0Fw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG28.png&ehk=SD294NKjXG3JppRn7fPyo6czUcyiLUWeIci5Y0RO%2fbk%3d&risl=&pid=ImgRaw&r=0"
              }
              alt={skill.name}
            />
            <h3 className={`text-3xl text-semibold my-3 `}>{skill.name}</h3>
            <p className="text-[12px] text-bold my-1">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const handleTabClick = (skill) => {
    setActiveTab(skill);
    showMoreSkills && setShowMoreSkills(false);
  };

  const tabNameStyle =
    "flex-1 mx-2 text-center text-2xl font-bold py-4 my-3 hover:cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out hover:bg-gray-200 rounded-t-lg";

  const skills = {
    "Web Development": [
      {
        name: "HTML/CSS",
        title: "Frontend Development",
        subtitle: "Web technologies",
        image: "path/to/html-css-image.png",
      },
      {
        name: "JavaScript",
        title: "Frontend Development",
        subtitle: "Web technologies",
        image: "path/to/js-image.png",
      },
      {
        name: "React",
        title: "Frontend Development",
        subtitle: "JavaScript library",
        image: "path/to/react-image.png",
      },
      {
        name: "Vue.js",
        title: "Frontend Development",
        subtitle: "JavaScript framework",
        image: "path/to/vuejs-image.png",
      },
      {
        name: "Node.js",
        title: "Backend Development",
        subtitle: "JavaScript runtime",
        image: "path/to/nodejs-image.png",
      },
      {
        name: "Express.js",
        title: "Backend Development",
        subtitle: "Web application framework",
        image: "path/to/expressjs-image.png",
      },
      {
        name: "Python",
        title: "Backend Development",
        subtitle: "Programming language",
        image: "path/to/python-image.png",
      },
      {
        name: "Ruby on Rails",
        title: "Backend Development",
        subtitle: "Web application framework",
        image: "path/to/ruby-on-rails-image.png",
      },
      {
        name: "MongoDB",
        title: "Database",
        subtitle: "NoSQL database",
        image: "path/to/mongodb-image.png",
      },
      {
        name: "SQL",
        title: "Database",
        subtitle: "Structured Query Language",
        image: "path/to/sql-image.png",
      },
    ],
    Cloud: [
      {
        name: "AWS",
        title: "Amazon Web Services",
        subtitle: "Cloud Computing",
        image: "path/to/aws-image.png",
      },
      {
        name: "Azure",
        title: "Microsoft Azure",
        subtitle: "Cloud Computing",
        image: "path/to/azure-image.png",
      },
      {
        name: "Google Cloud",
        title: "Google Cloud Platform",
        subtitle: "Cloud Computing",
        image: "path/to/google-cloud-image.png",
      },
      {
        name: "DigitalOcean",
        title: "DigitalOcean",
        subtitle: "Cloud Computing",
        image: "path/to/digitalocean-image.png",
      },
      {
        name: "Heroku",
        title: "Heroku",
        subtitle: "Cloud Platform",
        image: "path/to/heroku-image.png",
      },
      {
        name: "Firebase",
        title: "Firebase",
        subtitle: "Mobile and Web Application Platform",
        image: "path/to/firebase-image.png",
      },
      {
        name: "Kubernetes",
        title: "Kubernetes",
        subtitle: "Container Orchestration",
        image: "path/to/kubernetes-image.png",
      },
      {
        name: "Docker",
        title: "Docker",
        subtitle: "Containerization Platform",
        image: "path/to/docker-image.png",
      },
      {
        name: "CI/CD",
        title: "Continuous Integration/Continuous Deployment",
        subtitle: "Software Development Process",
        image: "path/to/cicd-image.png",
      },
      {
        name: "Serverless",
        title: "Serverless Architecture",
        subtitle: "Cloud Computing",
        image: "path/to/serverless-image.png",
      },
    ],
    "App Development": [
      {
        name: "React Native",
        title: "Mobile App Development",
        subtitle: "Cross-platform apps",
        image: "path/to/react-native-image.png",
      },
      {
        name: "Flutter",
        title: "Mobile App Development",
        subtitle: "Cross-platform apps",
        image: "path/to/flutter-image.png",
      },
      {
        name: "Swift",
        title: "iOS App Development",
        subtitle: "Apple's programming language",
        image: "path/to/swift-image.png",
      },
      {
        name: "Kotlin",
        title: "Android App Development",
        subtitle: "Android programming language",
        image: "path/to/kotlin-image.png",
      },
      {
        name: "Ionic",
        title: "Hybrid App Development",
        subtitle: "Mobile App Development",
        image: "path/to/ionic-image.png",
      },
      {
        name: "Electron",
        title: "Desktop App Development",
        subtitle: "Cross-platform framework",
        image: "path/to/electron-image.png",
      },
      {
        name: "React Desktop",
        title: "Desktop App Development",
        subtitle: "Cross-platform framework",
        image: "path/to/react-desktop-image.png",
      },
      {
        name: "JavaFX",
        title: "Desktop App Development",
        subtitle: "Java library for UI",
        image: "path/to/javafx-image.png",
      },
      {
        name: "C#",
        title: "Windows App Development",
        subtitle: "Microsoft's programming language",
        image: "path/to/csharp-image.png",
      },
      {
        name: "Unity",
        title: "Game Development",
        subtitle: "Game engine",
        image: "path/to/unity-image.png",
      },
    ],

    Blockchain: [
      {
        name: "Ethereum",
        title: "Blockchain Development",
        subtitle: "Smart Contracts",
        image: "path/to/ethereum-image.png",
      },
    ],

    "Machine Learning": [
      {
        name: "TensorFlow",
        title: "Machine Learning",
        subtitle: "Deep learning",
        image: "path/to/tensorflow-image.png",
      },
      // Add other machine learning skills here
    ],
  };

  return (
    <div
      className="section lg:container mx-auto flex flex-col 
    "
      id="skills"
      tabIndex="18"
    >
      <SectionHeader title="Skills" description="This is some of mine skills" />
      <div className="tab-bar flex flex-row sm:flex hidden justify-spaceBetween items-center">
        {Object.keys(skills).map((skill) => (
          <button
            className={`${tabNameStyle} ${
              activeTab === skill && "border-b-2 border-gray-500"
            } `}
            onClick={() => handleTabClick(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* make a dropdown of above list */}

      <div className="flex h-15 flex-col gap-6 sm:hidden block">
        <select
          className="p-3"
          size="lg"
          label="Select skills"
          onChange={(e) => handleTabClick(e.target.value)}
        >
          {Object.keys(skills).map((skill) => (
            <option
              className="p-3 bg-[#F9F9F9] text-gray-500 mb-2 rounded-md
            "
            >
              {skill}
            </option>
          ))}
        </select>
      </div>

      {Object.keys(skills).map((skill, index) => {
        console.log("skills.length", skills[skill].length);
        const skillsToShow =
          skill.length > 3 && !showMoreSkills
            ? skills[skill].slice(0, 3)
            : skills[skill];
        return (
          <>
            <SkillTab
              key={skill}
              title={skill}
              skills={skillsToShow}
              isActive={activeTab === skill}
            />
          </>
        );
      })}
      {skills[activeTab].length > 3 && (
        <button
          onClick={() => setShowMoreSkills(!showMoreSkills)}
          className={`bg-[#16a34a] hover:bg-[#1fd863] text-white font-bold py-2 my-10 px-4 rounded w-[125px] mx-auto`}
        >
          <p
            className="text-center text-md font-medium cursor-pointer
        "
          >
            {showMoreSkills ? "Show Less" : "Show More"}
          </p>
        </button>
      )}
    </div>
  );
};

export default Skills;
