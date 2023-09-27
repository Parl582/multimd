import React from "react";

const RequiterType = ({ setDynamicPage }) => {
  return (
    <>
      <div className="w-full py-3  flex items-center justify-center">
        <div className="flex md:w-[60%] w-full p-2 border-[1.2px] rounded-sm shadow-sm ">
          <div
            className="w-1/2 p-2 h-[100px] cursor-pointer "
            onClick={() => setDynamicPage("own-company")}
          >
            <div className="border hover:border-[green] hover:bg-[#39ff14] h-full w-full text-center flex items-center justify-center rounded-md  ">
              <div className="text-[1.4rem] font-bold"> Own Company</div>
            </div>
          </div>
          <div
            className="w-1/2 p-2 h-[100px] cursor-pointer"
            onClick={() => setDynamicPage("other-company")}
          >
            <div className="border rounded-md  hover:bg-[#39ff14] hover:border-[green] h-full  text-center w-full flex items-center justify-center">
              <span className="text-[1.4rem] font-bold"> Other </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequiterType;
