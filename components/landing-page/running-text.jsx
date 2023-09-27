import React from "react";

const RunningText = ({ direction }) => {
  return (
    <>
      <div className="bg-[#f670f9] w-full border-[1px] h-[40px] text-[#010101] flex items-center">
        <marquee direction={direction} className="flex items-center h-full">
          <p className="runningtext  text-sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore error eos repellendus! Magnam praesentium sint eaque sapiente maiores nihil amet! </p>
        </marquee>
      </div>
    </>
  );
};

export default RunningText;
