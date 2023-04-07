import React from "react";
import "../App.css";

export default function Skills(props) {
  return (
    <section class="section skill-section" id="skills" tabindex="17">
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
        <h1 class="title">
          My Skills
          <p>
            These are some of mine major <span>Skills</span>
            {/* These are some of mine <span>blue</span> are some of my major skills. */}
          </p>
        </h1>
        <div class="skill-container">
          {props.skills.major.map((major) => {
            return (
              <div class="major">
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
