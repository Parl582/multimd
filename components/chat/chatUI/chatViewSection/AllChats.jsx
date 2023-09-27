import React from "react";

// all chat from user and Admin Appear Here
const AllChats = () => {
  let id = 123;
  return (
    <>
      <div className="w-full md:h-[calc(100vh-365px)] h-[calc(100vh-230px)] overflow-y-auto p-3 relative z-[1] ">
        <div className="w-full p-3"></div>
        <div className="w-full space-y-5">
          {data.map((elm, index) => (
            <div
              className={`w-full  rounded-md p-2  flex  ${
                elm.id === id ? "justify-end " : "justify-start "
              }  `}
              key={index}
            >
              <div
                className={` relative  md:max-w-[60%]  py-1  flex text-[1rem]  font-normal shadow-sm w-max  break-words border-[#7e7e7e]  ${
                  elm.id === id ? "  bg-cyan-50" : "bg-blue-50"
                } px-3 rounded-sm md:mb-3 mb-5 
                
                ${elm.id === id ? "justify-end " : "justify-start "} 
                `}
              >
                {elm.msg}
                <span
                  className={`absolute top-[105%]  ${
                    elm.id === id ? "right-1 " : "left-1"
                  }  text-xs mt-2 text-[0.8rem] w-max text-slate-500`}
                >
                  {elm.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllChats;

const data = [
  {
    id: 123,
    msg: "lorem",
    time: "12/03/2023 Monday 02:30 pm",
  },
  {
    id: 12,
    msg: "lorem is plaza skkcdncv fhbegfbeffyefhyefhueffuuyuyevuueefyxbgb yegd yeu",
    time: "12/03/2023 Monday 02:30 pm",
  },
];
