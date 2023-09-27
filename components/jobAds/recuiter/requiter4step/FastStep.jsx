import React, { useState } from "react";
import { intustrtType } from "../RequiterData";

const FastStep = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  return (
    <>
      <div className="w-full  py-3 flex items-center justify-center ">
        <div className="w-full space-y-3">
          <h1 className="font-bold text-[1.2rem]"> Details </h1>

          {/* <div className="w-full ">
            <div className="w-full"> Company You Are Hiring For </div>
            <input
              type="text"
              className="w-full py-2 px-1 border-[1.5px] rounded-sm "
              placeholder="Please Enter Company name You Hiring for"
            />
          </div> */}
          <div className="w-full ">
            <div className="w-full font-semibold"> Job title : </div>
            <input
              type="text"
              className="w-full py-2 px-1 border-[1.5px] rounded-sm "
              placeholder="Please Enter Job Title "
            />
          </div>

          {/* Job Description  */}

          <div className="w-full ">
            <div className="w-full font-semibold"> Job Description : </div>
            <textarea
              type="text"
              className="w-full py-2 px-1 border-[1.5px] rounded-sm min-h-[100px] resize-none "
              placeholder="Please Enter Job Description "
            />
          </div>

          <div>
            <div className="w-full font-semibold "> Type of Job</div>
            <select
              name=""
              id=""
              className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
              // onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please Select One from Drop-down</option>
              {intustrtType.map((elm, index) => (
                <option value={elm.name} key={index}>
                  {elm.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <div className="w-full">
              <h2 className="md:text-[1.3rem] text-[1rem ] font-bold">
                {" "}
                Location & Compensation
              </h2>
              {/* <p className="md:text-[1rem] text-[0.9rem] text-[#505050]">
                {" "}
                Job postings with right salary & incentives will help you find
                the right candidates.{" "}
              </p> */}
            </div>
          </div>

          <div className="">
            <div className="w-full font-semibold "> Select Job Location</div>
            <select
              name=""
              id=""
              className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
              // onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please Select One from Drop-down</option>
              <option value=""> Remote </option>
              <option value=""> In-Office </option>
              <option value=""> Field </option>
            </select>
          </div>

          {/* conditional  */}

          <div className="w-full font-semibold">
            {/* <div className="text-[1.2rem] text-[black] font-semibold">
              Job Location
            </div> */}

            <div className="w-full flex flex-wrap">
              <div className="md:w-1/2 w-full md:pr-2 relative">
                <div className="font-semibold">Job City</div>
                <div
                  className="w-full border-[1.2px] rounded-sm flex px-2 items-center"
                  onClick={() => setCityOpen((prev) => !prev)}
                >
                  <input type="text" className="w-full py-2 px-2" />
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>

                {cityOpen && (
                  <div className="w-[98%] absolute max-h-[300px] bg-[white] border-[1px] rounded-sm space-y-1 ">
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setCityOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setCityOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setCityOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setCityOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                  </div>
                )}
              </div>

              {/* job State  */}
              <div className="md:w-1/2 w-full md:pl-2 relative ">
                <div className="">Job State</div>
                <div
                  className="w-full border-[1.2px] rounded-sm flex items-center px-2"
                  onClick={() => setStateOpen((prev) => !prev)}
                >
                  <input type="text" className="w-full py-2 px-2" />
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>

                {stateOpen && (
                  <div className="w-[98%] absolute max-h-[300px] bg-[white] border-[1px] rounded-sm space-y-1 ">
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setStateOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setStateOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setStateOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 cursor-pointer"
                      onClick={() => setStateOpen(false)}
                    >
                      {" "}
                      City 1{" "}
                    </li>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* complete Address  */}

          <div className="w-full ">
            <div className="w-full font-semibold"> Full Address </div>
            <textarea
              type="text"
              className="w-full py-2 px-1 border-[1.5px] rounded-sm min-h-[100px]"
              placeholder="Please Enter your Office Address "
            />
          </div>

          {/* //receive application from */}
          <div className="w-full  space-y-2">
            <div className="font-semibold"> Receive Application From </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <input type="radio" name="1" />
                <span>With in 10 KM</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="1" />
                <span>With in 50 KM</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="1" />
                <span>Entire City</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="1" />
                <span>All India</span>
              </div>
            </div>

            {/* <div className="w-full ">
              <div className="">
                Would you also like to receive candidate applications from
                anywhere in India if they are willing to move to for this job? *
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <input type="radio" name="1" />
                  <span>Yes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="1" />
                  <span>No</span>
                </div>
              </div>
            </div> */}

            <hr className="w-full text-[red]" />
          </div>

          <div className="">
            <div className="w-full font-semibold "> Pay Type </div>
            <select
              name=""
              id=""
              className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
              // onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please Select One from Drop-down</option>
              <option value=""> Fixed </option>
              <option value=""> Fixed + Incentive </option>
              <option value=""> Only Incentive </option>
            </select>
          </div>

          {/* //salary entry  */}
          <div className="">
            <div className="w-full font-semibold"> Monthly Salary </div>
            <div className="flex md:w-1/2 items-center border-[1.2px] ">
              <input
                type="text"
                className="w-1/2 py-2 border-[1.2px] px-1"
                placeholder="Minimum Monthly Salary "
              />
              <span className="text-[1.2rem] font-semibold py-1 px-1 ">
                {" "}
                To{" "}
              </span>
              <input
                type="text"
                className="w-1/2 py-2 border-[1.2px] px-1 "
                placeholder="Maximum Monthly Salary "
              />
            </div>
          </div>

          <div className="">
            <div className="w-full font-semibold">
              {" "}
              Is there any joining fee ?
            </div>{" "}
            <select
              name=""
              id=""
              className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
              // onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please Select One from Drop-down</option>
              <option value=""> Yes </option>
              <option value=""> No </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastStep;
