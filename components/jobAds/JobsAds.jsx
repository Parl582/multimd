"use client";
import { useRouter } from "next/navigation";
import React from "react";

const JobsAds = ({ elm }) => {
  const navigate = useRouter();
  return (
    <>
      <div
        className="border-[1px] md:p-2 p-1 w-full cursor-pointer rounded-md shadow-sm relative hover:shadow-lg duration-300"
        onClick={() => navigate("/job-details")}
      >
        {/* hwader  */}

        <div className="w-full flex space-x-3 ">
          {/* //image part  */}
          <div className="md:w-[100px] h-[100px]  rounded-sm">
            <img
              src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
              alt=""
              className="w-full h-full object-cover border-[1.2px] p-1 rounded-md overflow-hidden"
            />
          </div>
          {/* jobDescription  */}
          <div className="">
            <h2 className="md:text-[1.3rem] text-[1rem] text-[black] font-semibold">
              {elm.company}
            </h2>
            <h1 className="md:text-[1.4rem] text-[1.1rem] text-[black] font-bold">
              {elm.post}
            </h1>

            {/* //location  */}
            <p className="text-[1rem] text-[#252525] leading-3">
              Banglore - (Remote)
            </p>
            {/* //salary  */}
            <span className="md:text-[1rem] text-[0.8rem] text-[#252525] leading-3 font-semibold">
              12L - 15L
            </span>
          </div>
        </div>

        <div className="absolute right-2 bottom-2">
          <button className="text-[#fff] bg-[#ff10f0] md:px-4 px-3 md:text-[1rem] text-[0.8rem]  py-1 rounded-sm">
            Apply{" "}
          </button>
        </div>
        <div className="absolute right-2 top-2 text-[0.9rem] text-[#515151]">
          1 day ago
        </div>
      </div>
    </>
  );
};

export default JobsAds;
