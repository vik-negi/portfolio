import React from "react";

export default function Experiences() {
  const compaines = [
    {
      name: "NeonFlake",
      jobTitle: "SDE Intern",
      joinDate: "Sep 2021",
      leaveDate: "Present",
      workedOn: ["Flutter", "NodeJS", "MongoDB", "Firebase", "Git", "Web"],

      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
    },
    {
      name: "OEPP Pvt. Ltd.",
      jobTitle: "Flutter Developer",
      joinDate: "Sep 2021",
      leaveDate: "Dec 2021",
      workedOn: ["Flutter", "NodeJS", "MongoDB", "Firebase", "Git", "Web"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
    },
    {
      name: "GuruCool",
      jobTitle: "Data Trainee",
      joinDate: "Feb 2021",
      leaveDate: "July 2021",
      workedOn: [
        "Data Science",
        "Python",
        "Git",
        "Data Visualization",
        "Data Analysis",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
    },
  ];

  return (
    <section
      className="section experience-section"
      id="experience"
      tabIndex="24"
    >
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
          Experience<p>These are the compaines where I've previously worked.</p>
        </h1>
        {compaines.map((compaine, index) => {
          return (
            <div key={index} className="expContainer">
              <ul className="listOfExp">
                <li className="companyName active" tabIndex={24}>
                  {compaine.name}
                </li>
              </ul>
              <div className="expDesc">
                <h4 className="expTitle">{compaine.jobTitle}</h4>
                <p className="period">
                  From {compaine.joinDate} - to {compaine.leaveDate} Year
                </p>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    alignItems: "center",
                    margin: "0 0 0 10px",
                    alignContent: "center",
                  }}
                >
                  {compaine.workedOn.map((work, i) => {
                    return (
                      <span
                        key={i}
                        className="tags"
                        style={{
                          backgroundColor: "#a1a1a1",
                          padding: "5px 15px",
                          borderRadius: "15px",
                          display: "inline",
                          margin: "5px",
                        }}
                      >
                        {work}
                      </span>
                    );
                  })}
                </div>

                <p className="desc">{compaine.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
