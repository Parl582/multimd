import { BellRing } from "lucide-react";
import React from "react";

// a single alert->
const Notification = () => {
  return (
    <>
      <div className="w-full md:py-2 py-2 items-center justify-center flex">
        <div className="flex md:space-x-3 space-x-0 items-center border-[1.5px] shadow-sm rounded-sm cursor-pointer ">
          <div className="  py-1 md:px-2 px-1 flex items-center justify-center ">
            {/* Notification Icons  */}
            <BellRing strokeWidth={0.75} size={50} />
          </div>

          {/* main Notification Area  */}
          <div className="w-[100%]  py-1 md:px-2 px-1">
            <p className="md:text-[1.3rem] text-[1.1rem] font-semibold py-[3px]  truncate ">
              {" "}
              Details Of Notification{" "}
              <hr className=" md:h-[1.8px] h-[2px] bg-[black] md:w-[195px] w-[165px] mt-[-5px] " />
            </p>
            {/* <hr className=" h-[1px] bg-[black] md:w-[300p]" /> */}
            <p className="text-[1rem] text-[#454545] leading-5 w-full onlyLimitedLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              culpa fugit rem maxime nam impedit obcaecati aperiam quaerat eum
              magni, laboriosam maiores vel quis voluptas quas accusantium
              repudiandae earum ex. Iste eum ullam quis amet voluptas obcaecati
              magni, laboriosam maiores vel quis voluptas quas accusantium
              repudiandae earum ex. Iste eum ullam quis amet voluptas obcaecati
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#3f3f3f] text-[0.85rem] pt-2  ">
                {" "}
                20 mins ago{" "}
              </span>
              <span className="text-[#3f3f3f] text-[0.9rem] pt-2  ">
                01/03/2023 05:01:01 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
