"use client";
import React from "react";
import { useState } from "react";
import SingleProperties from "./SingleProperties";

const BuyerView = () => {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="w-full min-h-[calc(100vh-250px)] py-3 !bg-whitesmoke ">
        <div className="w-full md:px-[100px] px-[10px] py-1">
          {/* header  */}
          <div className="w-full ">
            <h3 className="font-semibold text-[1.2rem]"> All Properties </h3>
            <div className="w-full flex gap-3 flex-wrap text-[#858585]">
              <span> Country: India </span>
              <span> State: Assam </span>
              <span> District : Dibrugarh </span>
            </div>
          </div>
          {/* search and filter option */}

          <div className="w-full pt-3 pb-2 flex justify-between flex-wrap ">
            <div className="md:w-[40%] w-full border-[1.2px] overflow-hidden flex rounded-sm border-[#ff10f0] items-center">
              <input
                type="text"
                placeholder="Search "
                className="w-full py-2 px-1 outline-none "
              />
              <span className="material-symbols-outlined pr-2 text-[#ff10f0]">
                search
              </span>
            </div>

            <div className="flex justify-end items-center gap-3">
              <select
                name=""
                id=""
                className="px-3 py-2 border-[1.2px] rounded-sm cursor-pointer border-[#ff10f0] outline-none"
              >
                <option value=""> Sort by </option>
                <option value=""> Price Low to High </option>
                <option value=""> Price High to Low </option>
              </select>
              <select
                name=""
                id=""
                className="px-3 py-2 border-[1.2px] rounded-sm cursor-pointer border-[#ff10f0] outline-none"
              >
                <option value=""> Price Range </option>
                <option value=""> 1L - 2L </option>
                <option value=""> 2L - 3L </option>
                <option value=""> 1L - 2L </option>
                <option value=""> 2L - 3L </option>
                <option value=""> 1L - 2L </option>
                <option value=""> 2L - 3L </option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              className="text-[#ff10f0] font-semibold text-[1rem]"
              onClick={() => setMore((prev) => !prev)}
            >
              More Filter Option
            </button>
          </div>

          <div
            className={`w-full py-2 shadow-md rounded flex  flex-wrap  ${
              more ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"
            } duration-200 `}
          >
            {data?.map((elm) => (
              <div className="w-1/5 p-1">
                <label className="text-[0.8rem] text-black font-bold px-[2px]">
                  Select land Size
                </label>
                <div className="w-full border-[1.1px] cursor-pointer border-[#565656] ">
                  <input
                    type="text"
                    className="w-full py-[5px] rounded-sm px-2"
                    placeholder="Select Price Range"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* land images and cards  */}

          <div className="w-full flex flex-wrap">
            {data.map((elm) => (
              <div className="md:w-1/2 w-full p-1">
                <SingleProperties id={elm.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerView;

const data = [
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
  {
    id: crypto.randomUUID(),
    title: "Select Land Size",
  },
];
