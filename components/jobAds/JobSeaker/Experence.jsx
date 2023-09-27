import React from "react";

const Experence = () => {
  return (
    <>
      {/* {experence === "yes" && ( */}
      <div className="w-full flex flex-wrap">
        <div className="md:w-1/2 w-full md:pr-2">
          <div className="">Total Year</div>
          <div className="">
            <input
              type="text"
              className="py-2 px-2 border-[1.2px] rounded-sm w-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-2">
          <div className="">Months</div>
          <div className="">
            <input
              type="text"
              className="py-2 px-2 border-[1.2px] rounded-sm w-full"
            />
          </div>
        </div>
      </div>
      {/* // )} */}

      {/* //current company detaisl  */}

      <div className="w-full">
        <div className="w-full"> Job Title </div>
        <input
          type="text"
          className="w-full py-2 px-1 border-[1.5px] rounded-sm"
        />
      </div>
      {/* //current company detaisl  */}

      <div className="w-full">
        <div className="w-full"> Department </div>
        <select
          name=""
          id=""
          className="px-2 py-2 border-[1.2px] rounded-sm w-full"
        >
          <option value=""></option>
        </select>
      </div>
      {/* //current category detaisl  */}

      <div className="w-full">
        <div className="w-full"> Category and Role </div>
        <select
          name=""
          id=""
          className="px-2 py-2 border-[1.2px] rounded-sm w-full"
        >
          <option value=""></option>
        </select>
      </div>
      <div className="w-full">
        <div className="w-full"> Choose your Industry </div>
        <select
          name=""
          id=""
          className="px-2 py-2 border-[1.2px] rounded-sm w-full"
        >
          <option value=""></option>
        </select>
      </div>
      {/* ============= */}

      <div className="w-full">
        <div className="w-full"> Current Salary</div>
        <input
          type="text"
          className="w-full py-2 px-1 border-[1.5px] rounded-sm"
        />
      </div>

      {/* ================ */}
      {/* ========= */}
      <div className="w-full">
        <div className="w-full p-1 "> Are you currently working here </div>
        <div className="w-full flex items-center space-x-4 p-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="1"
              value="yes"
              id=""
              // onChange={() => setExperence(e.target.value)}
            />
            <div className="text-[1.2rem]">Yes</div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="1"
              value="No"
              id=""
              // onChange={(e) => setExperence(e.target.value)}
            />
            <div className="text-[1.2rem]">No</div>
          </div>
        </div>
      </div>

      {/* ============= */}

      <div className="w-full">
        <div className="w-full"> Current Salary</div>
        <input
          type="text"
          className="w-full py-2 px-1 border-[1.5px] rounded-sm"
        />
      </div>

      {/* ================ */}

      {/* ============= */}

      <div className="w-full">
        <div className="w-full"> Start Date</div>
        <input
          type="text"
          className="w-full py-2 px-1 border-[1.5px] rounded-sm"
        />
      </div>

      {/* ================ */}
      <div className="w-full">
        <div className="w-full"> Choose Employee Type </div>
        <select
          name=""
          id=""
          className="px-2 py-2 border-[1.2px] rounded-sm w-full"
        >
          <option value=""></option>
        </select>
      </div>
      {/* ============= */}
      {/* ================ */}
      <div className="w-full">
        <div className="w-full"> Notice period </div>
        <select
          name=""
          id=""
          className="px-2 py-2 border-[1.2px] rounded-sm w-full"
        >
          <option value="">15 days </option>
          <option value="">1 Months </option>
          <option value="">2 Months </option>
          <option value="">3 Months </option>
        </select>
      </div>
   
    </>
  );
};

export default Experence;
