import React from "react";

const JobPostDetailsCards = ({ jobs, title, total, icon }) => {
  return (
    <>
      <div className="w-full p-2 md:h-[200px] rounded-md hover:shadow-lg shadow-md duration-200 cursor-pointer flex flex-col items-center justify-center space-y-3">
        <img src="" alt="" />

        {icon}

        <h3 className="text-[1.3rem] font-semibold text-center w-full">
          {" "}
          <span className="text-[#158aed] font-bold mr-2"> {total} </span>
          {title}
        </h3>
      </div>
    </>
  );
};

export default JobPostDetailsCards;
