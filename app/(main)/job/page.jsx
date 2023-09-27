import React from "react";
import JobLanding from "@/components/jobAds/jobLanding/JobHomePage";

const page = ({ params }) => {
  //   console.log(params);
  return (
    <div className="w-full  ">
      <JobLanding />
    </div>
  );
};

export default page;
