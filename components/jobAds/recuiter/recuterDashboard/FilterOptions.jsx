import React from "react";
import { useState } from "react";
import SIngleFiterOptions from "./SIngleFiterOptions";

const FilterOptions = () => {
  return (
    <>
      <div className="w-full space-y-3 bg-white ">
        <div className="w-full flex items-center justify-between">
          <span className="text-[1.2rem] font-semibold">Filters</span>

          <button className="hover:border-[1.2px] px-2 py-[2px]">
            Clear All
          </button>
        </div>

        {AllMAinData?.map((elm, index) => (
          <SIngleFiterOptions elm={elm} key={index} />
        ))}
      </div>
    </>
  );
};

export default FilterOptions;

const AllMAinData = [
  {
    mainTitle: "Candidate Status",
    subMenu: [
      {
        title: "Interviewed ",
      },
      {
        title: "Hired ",
      },
      {
        title: "Rejected ",
      },
    ],
  },
  {
    mainTitle: "Location Distance",
    subMenu: [
      {
        title: "5 KM ",
      },
      {
        title: "20 KM ",
      },
      {
        title: "50 KM ",
      },
      {
        title: "More than 50 KM ",
      },
    ],
  },
  {
    mainTitle: "  Candidate Active In",
    subMenu: [
      {
        title: "7 Days ",
      },
      {
        title: "15 Days ",
      },
      {
        title: "30 Days ",
      },
      {
        title: "3 Months ",
      },
      {
        title: "6 Months ",
      },
    ],
  },
  {
    mainTitle: "Qualification",
    subMenu: [
      {
        title: "10th Passed ",
      },
      {
        title: "12 Passed ",
      },
      {
        title: "Graduation ",
      },
      {
        title: "Post Graduation ",
      },
    ],
  },
];
