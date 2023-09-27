import React from "react";
import ReactSelect from "./ReactSelect";
import { useState } from "react";

const SecondSteps = () => {
  const [qualification, setQualification] = useState();
  const [lang, setLang] = useState();
  const [experience, setExperience] = useState();
  const [gender, setGender] = useState();
  return (
    <>
      <div className="w-full  py-3 flex items-center justify-center ">
        <div className="w-full space-y-3 ">
          <h2 className="font-bold text-[1.2rem]">Candidate Requirement </h2>

          <div className="w-full ">
            <p className="text-[1rem] font-semibold "> Qualification</p>

            <div className="w-full flex gap-2 flex-wrap py-2">
              {data?.map((elm) => (
                <span
                  className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                    qualification === elm.title
                      ? "bg-[#158aed] text-[white]"
                      : "bg-white"
                  } `}
                  key={elm.title}
                  onClick={() => setQualification(elm.title)}
                >
                  {elm.title}
                </span>
              ))}
            </div>
          </div>

          {/* skilsl  */}
          <div className="w-full ">
            <p className="text-[1rem] font-semibold "> Skills</p>

            <div className="w-full">
              <ReactSelect />
            </div>
          </div>

          {/* language */}

          <div className="w-full">
            <p className="text-[1rem] font-semibold "> Language </p>

            <div className="w-full flex gap-2 flex-wrap py-2 ">
              {data?.map((elm) => (
                <span
                  className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                    lang === elm.language
                      ? "bg-[#158aed] text-white"
                      : "bg-white"
                  } `}
                  key={elm.title}
                  onClick={() => setLang(elm.language)}
                >
                  {elm.language}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-[1rem] font-semibold "> Minimum Experience </p>

            <div className="w-full flex gap-2 flex-wrap py-2 ">
              {data?.map((elm) => (
                <span
                  className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                    experience === elm.experience
                      ? "bg-[#158aed] text-white"
                      : "bg-white"
                  } `}
                  key={elm.title}
                  onClick={() => setExperience(elm.experience)}
                >
                  {elm.experience}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-[1rem] font-semibold "> Gender </p>

            <div className="w-full flex gap-2 flex-wrap py-2 ">
              {["Male", "Female", "Both"].map((elm) => (
                <span
                  className={`px-2 py-1 border-[1.2px] rounded-[20px] border-[#262626] cursor-pointer text-[0.9rem] ${
                    gender === elm ? "bg-[#158aed] text-white" : "bg-white"
                  } `}
                  key={elm}
                  onClick={() => setGender(elm)}
                >
                  {elm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSteps;

const data = [
  {
    title: "Graduation",
    language: "Good English",
    experience: "0 - 6 Months ",
  },
  {
    title: "Post Graduation",
    language: "Thora English",
    experience: "1-2 years",
  },
  {
    title: "12th Pass",
    language: "Fluent English",
    experience: "2 - 3 years ",
  },
  {
    title: "10th Pass",
    language: "Read Only",
    experience: " 3 + years ",
  },
];
