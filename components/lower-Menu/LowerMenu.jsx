"use client";
import React from "react";
import Link from "next/link";
import "./style.module.css";

const LowerMenu = () => {
  return (
    <div className="w-full md:px-11 px-4 md:flex items-center h-[60px] hidden">
      <div className="relative cursor-pointer  w-full h-full gap-4 flex items-center justify-center">
        {data.map((elm, i) => (
          <div className="h-full w-max group/mega flex items-center" key={i}>
            <span className="w-max px-2 group-hover/mega:border-b-2 md:text-sm xl:text-base text-xs border-red-400 h-full flex m-auto items-center ">
              {elm.name}
            </span>
            <div className="w-full absolute top-full left-0 z-40 px-9 bg-white hidden  group-hover/mega:h-auto group-hover/mega:visible opacity-0 group-hover/mega:opacity-100  invisible  duration-300 transition-all">
              <div className="w-full flex">
                <div className="w-1/4 p-2">
                  <h1 className="text-base font-bold"> Jobs </h1>
                  <div className="w-full py-3 flex flex-col text-sm space-y-1">
                    <Link href={"/"} className="hover:font-bold duration-200 ">
                      {" "}
                      Find Job{" "}
                    </Link>
                    <Link href={"/"} className="hover:font-bold duration-200 ">
                      {" "}
                      Post A Job{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LowerMenu;

const data = [
  {
    id: 1,
    name: "Jobs",
  },
  {
    id: 2,
    name: "Properties",
  },
  {
    id: 3,
    name: "SM",
  },
  {
    id: 4,
    name: "Country",
  },
  {
    id: 5,
    name: "MS",
  },
  {
    id: 6,
    name: "MS@",
  },
  {
    id: 7,
    name: "SM@",
  },
  {
    id: 8,
    name: "MS5",
  },
  {
    id: 9,
    name: "MS6",
  },
  {
    id: 10,
    name: "MS7",
  },
  {
    id: 11,
    name: "mentax",
  },
  {
    id: 12,
    name: "Vehicle",
  },
];
