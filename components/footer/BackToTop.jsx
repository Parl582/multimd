"use client";
import React from "react";
const BackToTop = () => {
  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="w-full h-[30px] bg-[#02023c] text-[green] text-center font-bold text-[1.2rem] cursor-pointer"
        onClick={HandleClick}
      >
        Back to Top
      </div>
    </>
  );
};

export default BackToTop;
