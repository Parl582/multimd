import React from "react";
// import "./lineHight.scss";

const AdsLowerContent = ({ line, history, pneed, elm }) => {
  return (
    <>
      <div className="lineHight z-50 bg-white p-1">
        <span
          className={` bg-white md:line-clamp-3 line-clamp-2 ${
            line ? "text-[0.9rem] " : "md:!text-[1rem] text-[0.8rem]"
          }

                ${
                  history
                    ? "!leading-[-30px] md:text-[0.8rem] text-[0.7rem] twoLineText"
                    : "md:leading-6 leading-5  py-1"
                }
                text-[#000000]

                ${pneed ? "px-1 !text-[0.9rem]" : ""}
           
              `}

          // className={` !leading-[-20px] twoLineText text-[0.8rem] ${history ?"lineHight" : line ? "twoLineText" : "onlyLimitedLine md:!text-[1rem] text-[0.8rem]"}} "onlyLimitedLine md:!text-[1rem] text-[0.8rem]`}
        >
          {elm}
        </span>
      </div>
    </>
  );
};

export default AdsLowerContent;
