import React from "react";

export default function Protfolio(props) {
  const compaines = [];
  return (
    <section class="section experience-section" id="experience" tabindex="24">
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
          Experience<p>These are the compaines where I've previously worked.</p>
        </h1>
        {compaines.map((compaine, index) => {
          return (
            <div class="expContainer">
              <ul class="listOfExp">
                <li class="companyName active" tabindex="24">
                  {compaine.name}
                </li>
              </ul>
              <div class="expDesc">
                <h4 class="expTitle">{compaine.jobTitle}</h4>
                <p class="period">
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
                  {compaine.workedOn.map((work) => {
                    return (
                      <span
                        class="tags"
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

                <p class="desc">{compaine.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
