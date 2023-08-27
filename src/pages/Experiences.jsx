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
            // <div key={index} className="expContainer">
            <div key={index} className="flex sm:flex-row flex-col mb-10">
              <ul className="w-[50%] sm:mb-0 mb-10 h-[50px] pl-10 items-center text-[#0090dd] font-semibold hover:bg-gray-200 pt-6 border-l-2 border-gray-600">
                <li className="companyName active" tabIndex={24}>
                  {compaine.name}
                </li>
              </ul>
              <div className="bg-[#d9d9df] rounded-[15px]">
                <div className=" bg-[#28282e] rounded-t-3xl px-5">
                  <h4 className="expTitle py-3  text-white ">
                    {compaine.jobTitle}
                  </h4>
                  <p className="period text-gray-200 py-2">
                    From {compaine.joinDate} - to {compaine.leaveDate} Year
                  </p>
                </div>

                <div className="flex ml-10 gap-3 flex-row flex-wrap justify-start items-center my-3">
                  {compaine.workedOn.map((work, i) => {
                    return (
                      <span
                        key={i}
                        className="tags mt-5 text-white text-[16px] px-5 py-2 rounded-[5px]  mr-2 mb-2"
                        style={{
                          border: "1px solid #00d2ff",
                          backgroundImage:
                            "linear-gradient(to right, #0090dd, #00d2ff)",
                          backgroundClip: "padding-box",
                        }}
                      >
                        {/* bg-[#444444] */}
                        {work}
                      </span>
                    );
                  })}
                </div>

                <p className="px-10 py-5 sm:text-[16px] text-[#232323] text-[14px]">
                  {compaine.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
