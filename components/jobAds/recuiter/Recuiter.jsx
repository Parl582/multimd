import React from "react";
import { useState } from "react";
import { Role, intustrtType } from "./RequiterData";
import LangingStep from "./requiter4step/LangingStep";
import FastStep from "./requiter4step/FastStep";
import HorizontalNonLinearStepper from "./requiter4step/SteperForm";

const Recruiter = () => {
  const [pageName, setPageName] = useState("fast");
  const [industry, setIndustry] = useState();

  console.log(industry);

  const HandlPage = () => {
    if (pageName === "fast") {
      return setPageName("Second");
    }

    if (pageName === "Second") {
      return setPageName("3rd");
    }

    if (pageName === "3rd") {
      return setPageName("fast");
    }
  };

  // console.log(pageName);
  return (
    <>
      <div className="w-full p-2 ">
        <div className="w-full  flex items-center justify-center">
          <div className="md:w-[60%] w-full md:p-3 p-2 border-[1.2px] rounded-sm shadow-sm space-y-3">
            {/* {pageName === 1 && ( */}

            {pageName === "fast" && <LangingStep setIndustry={setIndustry} />}
            {pageName === "Second" && (
              <HorizontalNonLinearStepper
                setIndustry={setIndustry}
                industry={industry}
              />
            )}

            {/* =========================================================================== */}

            {pageName === "fast" && (
              <div className="w-full py-3">
                <button
                  className="text-[white] py-2 px-2 w-full bg-[#ff10f0] "
                  onClick={HandlPage}
                >
                  Continue To Post A Job
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruiter;
