import React from "react";
import JobsAds from "./JobsAds";

const JobAdsHome = () => {
  return (
    <>
      <div className="w-full min-h-[50vh]">
        {/* main div  */}
        <div className="w-full md:p-3 p-2 border ">
          {/* <div className="h-py-3"> */}

          <div className="w-full flex justify-between md:p-2 py-2 flex-wrap">
            <div className="md:text-[1.7rem] text-[1.1rem]">
              {" "}
              Find Your Dream Jobs{" "}
            </div>

            <div className="md:w-[300px] w-full ">
              <div className="w-full border-[1.5px] rounded-sm flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 px-3 w-full"
                />
                <span className="material-symbols-outlined px-2">search</span>
              </div>
            </div>
          </div>

          {/* </div> */}
          <div className="w-full flex flex-wrap ">
            {Data?.map((elm) => (
              <div className="md:w-1/2 w-full md:p-2 py-1w " key={elm.id}>
                <JobsAds elm={elm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobAdsHome;

const Data = [
  {
    id: crypto.randomUUID(),
    post: "Fronend",
    company: "Multimedia",
  },
  {
    id: crypto.randomUUID(),
    post: "backend",
    company: "Athenalogic",
  },
  {
    id: crypto.randomUUID(),
    company: "flywise",
    post: "MArketing",
  },
  {
    id: crypto.randomUUID(),
    post: "Content writer",
    company: "random",
  },
];
