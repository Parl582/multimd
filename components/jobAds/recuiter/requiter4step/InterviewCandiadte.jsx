import React from "react";
import { useState } from "react";

const InterviewCandiadte = () => {
  const [mode, setMode] = useState();
  return (
    <div className="w-full space-y-2">
      <h2 className="font-bold text-[1.2rem]"> Interview Information </h2>
      <div className="w-full">
        <p className="text-[1rem] font-semibold "> Select Interview Mode </p>

        <div className="flex gap-2 py-2">
          {data.map((elm,i) => (
            <span
            key={i}
              className={`py-1 px-3 rounded-[50px] border-[1.2px] cursor-pointer border-[#262626] hover:bg-[#158aed] hover:text-[white] ${
                elm.title === mode ? "bg-[#158aed] text-[white]" : "bg-white"
              }  duration-150`}
              onClick={() => setMode(elm.title)}
            >
              {elm.title}
            </span>
          ))}
        </div>
      </div>

      {mode === "face-to-face" && (
        <div className="w-full space-y-2 ">
          {/* <p className="text-[1rem] font- "> Interview Address </p> */}

          <div className="w-full">
            <p className="text-[1rem]  font-semibold"> Full Address : </p>
            <textarea
              type="textarea"
              placeholder="Enter Interview Address"
              className="resize-none  outline-none rounded-sm border-[1.2px] w-full p-2 min-h-[100px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewCandiadte;

const data = [
  {
    title: "Telephonic",
  },
  {
    title: "face-to-face",
  },
];
