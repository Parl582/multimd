"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const LanguageAndTime = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  let currentDate = today;
  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const [time, setTime] = useState(currentTime);

  // live-time update
  const UpdateTime = () => {
    let currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTime(currentTime);
  };
  setInterval(UpdateTime, 1000);

  const [openLan, setOpenLang] = useState(false);

  const OpenLanguage = () => {
    setOpenLang((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col  w-[260px] h-full  justify-center text-[#000] ">
        <div className="" id="google_translate_element"></div>
        <div
          className="w-full flex items-center h-1/2 bg-green-200 py-2 px-5 text-[1.3rem] font-bold  cursor-pointer relative"
          onClick={OpenLanguage}
        >
          <span className="cursor-pointer ">Select Language</span>
          <ChevronDown />
          {openLan && (
            <div
              className={`w-full z-[9999] ${
                openLan ? "opacity-100 visible" : "opacity-0 invisible"
              } !duration-200 border-2 absolute top-[100%] bg-[#4bf2e7] rounded-sm text-[1.3rem] font-medium z-[10001] right-0 `}
            >
              <li
                className="cursor-pointer border-b-2 px-7 py-1 list-none"
                onClick={OpenLanguage}
              >
                Hindi
              </li>
              <li
                className="cursor-pointer px-7 border-b-2 py-1"
                onClick={OpenLanguage}
              >
                English
              </li>
            </div>
          )}
        </div>
        <span className="text-[1.2rem] font-bold  h-1/2 flex items-center justify-center w-full  border-t-[2px] bg-yellow-100">
          {time} {currentDate}
        </span>
      </div>
    </>
  );
};

export default LanguageAndTime;
