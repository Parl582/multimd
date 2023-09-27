import React from "react";
import { tempImg } from "../../../../trmpImg";
import { useState } from "react";

const SingleCandidate = ({ gender }) => {
  const [openStatus, setStatus] = useState(false);

  const [status, setStatusData] = useState();

  const handleStatus = (data) => {
    setStatusData(data);
    setStatus(false);
  };
  return (
    <>
      <div className="w-full  h-auto p-2 border-[1.2px] rounded-sm hover:shadow-md duration-200">
        <div className="flex justify-between w-full  ">
          <div className="w-full flex gap-2 ">
            <img
              src={tempImg}
              alt=""
              className="w-[70px] h-[70px] overflow-hidden rounded-sm border-[1.1px]"
            />

            <div className="flex flex-col justify-end">
              <h1 className="text-[1.2rem] leading-8 font-semibold uppercase">
                user Name
              </h1>
              <span className="text-[1.2rem]  text-[#202020] font-light">
                Badarpur, Delhi, 21.6 KM
              </span>
            </div>
          </div>

          {/* status  */}

          <div className="md:w-[300px] w-full relative md:block hidden ">
            <button
              className="border-[1.2px] border-[#158aed] rounded-sm w-full py-2 text-left px-2"
              onClick={() => setStatus((prev) => !prev)}
            >
              {status ? status : "Select Candidate Status"}
            </button>

            {openStatus && (
              <div className="absolute  top-[45px] w-full  shadow-md bg-[white]">
                <ul className="py-1">
                  {Status.map((elm) => (
                    <li
                      key={elm.title}
                      className="hover:bg-[#ececec] duration-200 px-2 cursor-pointer"
                      onClick={() => handleStatus(elm.title)}
                    >
                      {elm.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* keyInfo  */}

        <div className="flex gap-2 w-full py-3">
          <div className="w-[10%] break-words text-[1rem] font-semibold">
            Key Info
          </div>
          <div className=" w-[90%] ">
            <ul className="flex w-full flex-wrap gap-4 text-[#5d5d5d]">
              <li className="flex gap-1 items-center">
                <span className="material-symbols-outlined">school</span>
                <span>Graduate </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">
                  record_voice_over
                </span>
                <span>Speak Good English</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">work_history</span>
                <span> 3 Years Of Experience </span>
              </li>
              <li className="flex items-centergap-2">
                <span className="material-symbols-outlined">
                  {gender === "Male" ? "male" : "female"} 
                </span>
                <span> {gender} 26 Y </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 w-full ">
          <div className="w-[10%] text-[1rem] font-semibold"> Skills </div>
          <div className=" w-[90%] ">
            <ul className="flex w-full flex-wrap gap-2">
              {data?.map((elm) => (
                <li
                  className="text-[0.9rem] font-bold px-2 py-[2px] bg-[#ccc] rounded-sm"
                  key={elm.title}
                >
                  {elm.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* button Section  */}

        <div className="w-full flex flex-wrap justify-between pt-3 gap-3">
          <div className="flex items-center gap-2 justify-between md:w-auto w-full">
            <button className="md:min-w-[200px] py-2 border-[1.2px] rounded-sm px-2 border-[#ff10f0]">
              Candidate Resume Download
            </button>
            <button className="md:w-[200px] py-2 border-[1.2px] rounded-sm px-2 border-[#ff10f0] bg-[#ff10f0] text-[white]">
              Message
            </button>
            <button className="md:w-[200px] py-2 border-[1.2px] rounded-sm px-2 border-[#ff10f0] ">
              <span className="md:block hidden"> +919876543219 </span>
              <span className="md:hidden block"> Call</span>
            </button>
          </div>
        </div>

        <div className="md:w-[300px] w-full relative md:hidden block mt-[10px]">
          <button
            className="border-[1.2px] border-[#158aed] rounded-sm w-full py-2 text-left px-2"
            onClick={() => setStatus((prev) => !prev)}
          >
            {status ? status : "Select Candidate Status"}
          </button>
          {openStatus && (
            <div className="absolute border top-[100%] w-full  shadow-md bg-[white]">
              <ul className="py-1">
                {Status.map((elm) => (
                  <li
                    key={elm.title}
                    className="hover:bg-[#ececec] duration-200 px-2 cursor-pointer"
                    onClick={() => handleStatus(elm.title)}
                  >
                    {elm.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleCandidate;

const Status = [
  {
    title: "Interviewed",
  },
  {
    title: "Rejected",
  },
  {
    title: "Hired",
  },
];

const data = [
  {
    title: "Recat Js",
  },
  {
    title: "JavaScript ",
  },
  {
    title: "Node Js",
  },
  {
    title: "Redux",
  },
  {
    title: "Java",
  },
];
