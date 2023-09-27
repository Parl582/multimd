import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const JobRightSide = () => {
  return (
    <>
      <div className="w-full p-2 border-[1.5px] shadow-sm  pb-4">
        {/* location  */}
        <div className="w-full space-y-3">
          <h2 className="text-[1.3rem] text-[#484848] font-semibold">
            About the company{" "}
          </h2>

          {/* address */}

          <div className="w-full">
            <h3>Website</h3>
            <div className="w-full flex space-x-1">
              <a href=""> www.google.com </a>
              {/* //icons  */}
              <div className="flex items-center  space-x-2">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>

          {/* //location  */}

          <div className="w-full">
            <div className="text-[1.3rem] text-[black] font-semibold">
              Location
            </div>
            <h3 className="text-[#333] text-[1rem] ">Banglore </h3>
          </div>

          {/* company Size */}
          <div className="w-full">
            <div className="text-[1.3rem] text-[black] font-semibold">
              Company Size
            </div>
            <h3 className="text-[#333] text-[1rem] ">20-100 People</h3>
          </div>

          {/* Company Type */}
          <div className="w-full">
            <div className="text-[1.3rem] text-[black] font-semibold">
              Company Type
            </div>
            <div className="flex  flex-wrap">
              <div className="px-[2px]">
                <span className="py-1 rounded-[50px] bg-[#ccc] text-[black] px-2">
                  IT Company
                </span>
              </div>
              <div className="px-[2px]">
                <span className="py-1 rounded-[50px] bg-[#ccc] text-[black] px-2">
                  IT Company
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRightSide;
