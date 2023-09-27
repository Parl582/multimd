import React from "react";
import JobLeftside from "./JobLeftside";
import JobRightSide from "./JobRightSide";

const JobDetails = () => {
  return (
    <>
      <div className="w-full p-3 flex items-center justify-center ">
        <div className="md:w-[80%] w-full flex flex-wrap ">
          <div className="md:w-2/3 p-2">
            <JobLeftside />
          </div>
          <div className="md:w-1/3 w-full  p-2">
            <JobRightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
