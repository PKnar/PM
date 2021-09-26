import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import agileCover from "../../assets/Agile-cover.png";
import valueSVG from "../../assets/values.png";

let principles = [
  {
    icon: "",
    desc: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
  },

  {
    icon: "",
    desc: "Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.",
  },
  {
    icon: "",
    desc: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.",
  },
  {
    icon: "",
    desc: "Business people and developers must work together daily throughout the project.",
  },
  {
    icon: "",
    desc: "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.",
  },

  {
    icon: "",
    desc: "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.",
  },

  {
    icon: "",
    desc: "Working software is the primary measure of progress.",
  },

  {
    icon: "",
    desc: "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.",
  },
  {
    icon: "",
    desc: "Continuous attention to technical excellence and good design enhances agility.",
  },

  {
    icon: "",
    desc: "Simplicity–the art of maximizing the amount of work not done–is essential.",
  },
  {
    icon: "",
    desc: "The best architectures, requirements, and designs emerge from self-organizing teams.",
  },
  {
    icon: "",
    desc: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.",
  },
];

function ContentContainer({ chosenCategory }) {
  let cover = "";

  if (chosenCategory === "introduction") {
    cover = agileCover;
  } else if (chosenCategory === "values") {
    cover = valueSVG;
  } else if (chosenCategory === "principles") {
  }

  let display = () => {
    let sections = Array.from(document.querySelectorAll(".section"));
    sections.forEach((section) => {
      section.classList.remove("show");
      section.classList.add("hide");
    });
    let chosenDiv = sections.find((section) => section.id === chosenCategory);
    chosenDiv.classList.remove("hide");
    chosenDiv.classList.add("show");
  };

  let reder12Principles = () => {
    return principles.map((principle) => {
      return (
        <div className="card">
          <h5>{principle.desc}</h5>
          <img src="" />
        </div>
      );
    });
  };

  useEffect(() => {
    display();
  }, [chosenCategory]);

  return (
    <header>
      <div className="content-wrapper">
        <div className="headerContent">
          <div className="section" id="introduction">
            <h1>What is Agile?</h1>
            <p>
              In simple words Agile is a project management system, that allows
              teams to respond to changes quicker and therefore deliver value to
              their customer faster. Agile workflow consists of continues
              iteration
            </p>

            {/* <div className="cardsContainer">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div> */}
          </div>

          <div className="section" id="values">
            <h1>Values</h1>
            <p>
              {" "}
              In this age where tech world develops faster than ever, working
              with old concepts, for example "waterfall", was no longer an
              option. Eventuelly the group of people that came up with Agile
              system, introduced 4 important values
            </p>

            {/* <div className="values-cards">
              {/* <div className="card"> Individuals & Interactions</div>
              <div className="card"> Working Software</div>
              <div className="card"> Customer Collaboration</div>
              <div className="card"> Responding to change</div>
            </div> */}
          </div>

          <div className="section principle-sec" id="principles">
            <h1>Principles</h1>
            <div className="container">{reder12Principles()}</div>
          </div>
        </div>
      </div>
      <div className="agile-svg">
        <img src={cover} />
      </div>
    </header>
  );
}

export default ContentContainer;
