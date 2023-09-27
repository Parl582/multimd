import React from "react";
import SingleCandidate from "./SingleCandidate";
import FilterOptions from "./FilterOptions";

const ViewCandidate = () => {
  let can = true;
  return (
    <>
      <div className="w-full min-h-[500px] !bg-whitesmoke ">
        {can === false ? (
          <div className="w-full flex items-center justify-center h-full py-3">
            <p className="text-[1.3rem] font-light leading-10">No Candidate</p>
          </div>
        ) : (
          <>
            <div className="w-full md:px-[100px] px-[10px] md:py-4 py-2">
              <p className="text-[1rem] text-center font-semibold">
                All the candidates that have called and applied
              </p>

              {/* <div className="w-full flex justify-between flex-wrap py-4">
                <div className="w-[60%] border-[1.2px] rounded-md border-[#505050] overflow-hidden flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none py-2 px-3"
                  />

                  <span className="material-symbols-outlined px-4 cursor-pointer bg-[#ff10f0] text-[white] py-2">
                    search
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Sort By</span>
                  <select
                    name=""
                    id=""
                    className="px-2 py-1 border-[1.2px] rounded-sm outline-none"
                  >
                    <option value=""> Relevant </option>
                    <option value=""> Latest </option>
                    <option value=""> Location </option>
                  </select>
                </div>
              </div> */}

              {/* single candidate  */}

              <div className="w-full flex flex-wrap">
                <div className="md:w-[20%] w-full md:pr-2 pr-0 ">
                  <div className="w-full md:top-[150px] md:sticky border-[1.2px] p-1 px-2 rounded-sm  shadow-md ">
                    <FilterOptions />
                  </div>
                </div>
                <div className="md:w-[80%] w-full space-y-3">
                  {/* header  */}

                  <div className="w-full flex justify-between flex-wrap py-4">
                    <div className="w-[60%] border-[1.2px] rounded-md border-[#505050] overflow-hidden flex">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full outline-none py-2 px-3"
                      />

                      <span className="material-symbols-outlined px-4 cursor-pointer bg-[#ff10f0] text-[white] py-2">
                        search
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold">Sort By</span>
                      <select
                        name=""
                        id=""
                        className="px-2 py-1 border-[1.2px] rounded-sm outline-none"
                      >
                        <option value=""> Relevant </option>
                        <option value=""> Latest </option>
                        <option value=""> Location </option>
                      </select>
                    </div>
                  </div>
                  <SingleCandidate gender="Male" />
                  <SingleCandidate gender="female" />
                  <SingleCandidate gender="female" />
                  <SingleCandidate gender="female" />
                  <SingleCandidate gender="female" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ViewCandidate;
