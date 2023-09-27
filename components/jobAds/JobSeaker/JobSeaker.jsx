import React from "react";
import { useState } from "react";
import Experence from "./Experence";
import { useRouter } from "next/navigation";

const JobSeaker = () => {
  const navigate = useRouter();
  const [education, setEducation] = useState();
  const [skills, setSkills] = useState();

  const [experence, setExperence] = useState();

  // console.log(experence);

  return (
    <>
      <div className="w-full p-3 h-full ">
        <div className="w-full border-2 flex items-center justify-center p-3 ">
          <div className="md:w-[60%] w-full border-[1.5px] rounded-md shadow-sm p-2 space-y-2">
            {/* user Form  */}
            <div className="w-full">
              <div className="w-full p-1 ">Full Name</div>
              <div className="w-full border-[1.2px] rounded-sm">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="py-2 px-1"
                />
              </div>
            </div>
            {/* ========= */}
            <div className="w-full">
              <div className="w-full p-1 ">Highest Education</div>
              <div className="w-full border-[1.2px] rounded-sm">
                <select
                  name=""
                  id=""
                  className="w-full py-2 px-2 border-[1.3px] outline-none"
                  onChange={(e) => setEducation(e.target.value)}
                >
                  <option value="1">Select your Education</option>
                  <option value="graduation"> Graduation </option>
                  <option value="post-graduation"> H.S </option>
                </select>
              </div>
            </div>

            {/* ------------------------------- */}

            {/* ========= */}

            {education == "graduation" && (
              <div className="w-full">
                <div className="w-full p-1 ">Degree</div>
                <div className="w-full border-[1.2px] rounded-sm">
                  <select
                    name=""
                    id=""
                    className="w-full py-2 px-2 border-[1.3px] outline-none"
                  >
                    <option value="1">Select your Degree</option>
                    <option value="1"> Graduation </option>
                    <option value="1"> H.S </option>
                  </select>
                </div>
              </div>
            )}

            {/* ------------------------------- */}

            {/* ========= */}
            <div className="w-full">
              <div className="w-full p-1 ">Department</div>
              <div className="w-full border-[1.2px] rounded-sm">
                <select
                  name=""
                  id=""
                  className="w-full py-2 px-2 border-[1.3px] outline-none"
                  onChange={(e) => setSkills(e.target.value)}
                >
                  <option value="1">Select your Education</option>
                  <option value="1"> Graduation </option>
                  <option value="1"> H.S </option>
                </select>
              </div>
            </div>

            {/* ------------------------------- */}

            {/* ========= */}
            <div className="w-full">
              <div className="w-full p-1 ">Skills</div>
              <div className="w-full border-[1.2px] rounded-sm">
                <select
                  name=""
                  id=""
                  className="w-full py-2 px-2 border-[1.3px] outline-none"
                  onChange={(e) => setSkills(e.target.value)}
                >
                  <option value="1">Select your Education</option>
                  <option value="1"> Graduation </option>
                  <option value="1"> H.S </option>
                </select>
              </div>
            </div>

            {/* ------------------------------- */}

            {/* experence  */}
            {/* ========= */}
            <div className="w-full">
              <div className="w-full p-1 ">Do you have any Experience</div>
              <div className="w-full flex items-center space-x-4 p-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="1"
                    value="yes"
                    id=""
                    onChange={() => setExperence("yes")}
                  />
                  <div className="text-[1.2rem]">Yes</div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="1"
                    value="No"
                    id=""
                    onChange={() => setExperence("No")}
                  />
                  <div className="text-[1.2rem]">No</div>
                </div>
              </div>
            </div>

            {/* ------------------------------- */}

            {experence === "yes" && <Experence />}

            {/* ============= */}

            <div className="">
              <button
                className="w-full py-2 p bg-[#ff10f0] text-[white]"
                onClick={() => navigate.push("/job?tag=job-ads")}
              >
                {" "}
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeaker;
