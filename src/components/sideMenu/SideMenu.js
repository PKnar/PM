import React from "react";
import "../../App.css";
import svg from "../../assets/Agile-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import info from "../../assets/info.png";
import value from "../../assets/value.png";
import principle from "../../assets/document.png";

import PM from "../../assets/PM.svg";

let manuItems = [
  {
    name: "Intoduction",
    id: "introduction",
    icon: info,
  },

  {
    name: "Values",
    id: "values",
    icon: value,
  },
  {
    name: "Principles",
    id: "principles",
    icon: principle,
  },
];

function SideMenu({ updateCategory }) {
  let createList = () => {
    return manuItems.map((item) => {
      return (
        <>
          <li
            className="li-item"
            onClick={(e) => {
              handleItemClick(e, item.id);
            }}
            key={item.id}
          >
            {/* <img src={item.icon} /> */}
            {item.name}
          </li>
        </>
      );
    });
  };

  let handleItemClick = (e, value) => {
    console.log("running");
    let liItems = Array.from(document.querySelectorAll(".li-item"));
    console.log(liItems);
    liItems.map((item) => item.classList.remove("selected"));
    e.target.classList.add("selected");
    updateCategory(value);
  };

  return (
    <nav className="sideMenu">
      <ul>{createList()}</ul>
    </nav>
  );
}

export default SideMenu;
