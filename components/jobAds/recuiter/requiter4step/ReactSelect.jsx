import Select from "react-select";
// import { colourOptions } from "../data";

import React from "react";
import { useState } from "react";

const colourOptions = [
  { value: "React JS", label: "React JS", color: "#00B8D9" },
  { value: "Javascript", label: "Javascript", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const ReactSelect = () => {
  const [skills, setSkills] = useState();
  console.log(skills);
  return (
    <Select
      onChange={(e) => setSkills(e.target)}
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default ReactSelect;
