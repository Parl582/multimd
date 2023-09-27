import React from "react";
import { useState } from "react";

const SIngleFiterOptions = ({ index, elm }) => {
  const [cand, setClickCand] = useState(true);
  return (
    <>
      <div className=" w-full">
        <div
          className="flex items-center justify-between py-2 cursor-pointer"
          onClick={() => setClickCand((prev) => !prev)}
        >
          <span className="text-[1.1rem] "> {elm.mainTitle} </span>
          <span className="material-symbols-outlined ">
            {cand ? "remove" : "add"}
          </span>
        </div>
        <ul
          className={`${
            cand ? "h-auto" : "!h-[0px]"
          } overflow-hidden duration-200`}
        >
          {elm?.subMenu?.map((elm) => (
            <li className="flex gap-2 items-center" key={elm.title}>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[16px] h-[16px]"
              />
              <label className="text-[0.9rem]">{elm.title} </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SIngleFiterOptions;
