import React from "react";
// import Marquee from "react-fast-marquee";

import "./skills.css";

// import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsImage } from "../../utils/skillsImage";

export default function Skills(props) {
  // const { theme } = useContext(ThemeContext);

  //   const skillBoxStyle = {
  //     backgroundColor: theme.secondary,
  //     boxShadow: `0px 0px 30px ${theme.primary30}`,
  //   };
  const skillsData = [
    "HTML",
    "Fastify",
    "Blender",
    "Figma",
    "Javascript",
    "CSS",
    "React",
    "Django",
  ];

  return (
    <div className="skills" id="skills" tabIndex="17">
      <h1 className="title">
        My Skills
        <p>
          These are some of mine major <span>Skills</span>
        </p>
      </h1>
      <div className="flex flex-1 flex-wrap items-center justify-center sm:gap-10 gap-5 flex-row sm:w-[90%] w-[98%]">
        {skillsData.map((skill, id) => (
          <div
            className="w-[150px] h-[150px]  cursor-pointer bg-[#f1f1f1] rounded-[15px] flex flex-col justify-center items-center m-5 hover:bg-[#d9d9d9] transition-all duration-300 ease-in-out shadow-slate-700"
            key={id}
          >
            <img
              className="w-[75px] h-[75px]"
              src={skillsImage(skill)}
              alt={skill}
            />
            <h3 className="font-semibold text-[14px] mt-3">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
