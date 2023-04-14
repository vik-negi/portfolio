import React from "react";
import "../App.css";

export default function Skills(props) {
  return (
    <section className="section skill-section" id="skills" tabIndex="17">
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        // data-aos="zoom-in-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h1 className="title">
          My Skills
          <p>
            These are some of mine major <span>Skills</span>
          </p>
        </h1>
        <div className="skill-container">
          {props.skills.major.map((major) => {
            return (
              <div className="major">
                {/* <img src={major.image} alt="Skill-1" /> */}
                <p>{major.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
