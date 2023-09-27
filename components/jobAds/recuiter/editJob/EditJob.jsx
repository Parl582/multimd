import React from "react";
import { useNavigate } from "react-router-dom";

const EditJobDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full md:px-[100px] px-[10px] py-4 ">
        <div className="w-full ">
          <div className="flex justify-between">
            <h2 className="font-semibold text-[1.2rem]"> Edit Your Job </h2>
            <button
              className="bg-[#ff10f0] text-white px-3 py-[3px] border-[1.2px] "
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJobDashboard;
