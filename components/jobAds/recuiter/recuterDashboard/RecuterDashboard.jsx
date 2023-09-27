import React from "react";
import SingleJobDesign from "./SingleJobDesign";
import { useState } from "react";
import PlanDetsils from "./PlanDetsils";

const RecuterDashboard = () => {
  const [filter, setFilter] = useState();
  let elm = "1";
  return (
    <>
      <div className="w-full min-h-[500px]">
        <div className="w-full md:px-[100px] px-[10px] py-3">
          {/* Header  */}

          <div className="w-full py-4 flex justify-between items-center p-1">
            <h2>All Posted Job</h2>

            <div className="flex items-center gap-3">
              <span className=" font-semibold"> Filter </span>
              <select
                name=""
                id=""
                className="px-2 py-1 outline-none border-[1.2px] "
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="deactive">De-active</option>
              </select>
              {filter && (
                <button
                  className="px-2 border-[1.2px] py-1 bg-[#ff10f0] text-[white]"
                  onClick={() => setFilter()}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* lower Header  */}

          <PlanDetsils plan={true} />

          <div className="w-full flex  flex-wrap">
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
            <SingleJobDesign elm={elm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecuterDashboard;
