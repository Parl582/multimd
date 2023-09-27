import React from "react";

const MainHeader = ({ heading }) => {
  return (
    <>
      <div className="w-full md:h-[50px] h-[30px] flex items-center bg-[#ff10f0]  md:text-[1.7rem] text-[1.3rem]  text-[white] px-3 md:font-bold font-semibold">
        {heading ? heading : "Stop Heading"}
      </div>
    </>
  );
};

export default MainHeader;
