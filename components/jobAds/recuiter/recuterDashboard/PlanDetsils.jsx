import React from "react";
import { useNavigate } from "react-router-dom";

const PlanDetsils = ({ plan }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full   py-3 px-1  ">
        <div className="bg-[#f3ebf2] border-[#ff10f0] py-2 border-[1.2px] px-3 flex gap-4 flex-wrap">
          {plan ? (
            <>
              <h2 className="text-[1.2rem]">
                Plane Name :
                <span className="ml-2 font-bold">
                  Gold
                  <sup className="bg-green-50 text-green-500 px-2 py-[2px] text-[0.9rem] rounded-md border-[1.2px] border-green-600 ml-1">
                    Active
                  </sup>
                </span>
              </h2>

              <div className="flex">
                <span className="text-[0.9rem] px-2 bg-green-50 text-center font-semibold">
                  {" "}
                  Buy On : 12-02-2023{" "}
                </span>
              </div>
              <div className="flex">
                <span className="text-[0.9rem] px-2 bg-red-50 text-center font-semibold">
                  {" "}
                  Expire On : 12-02-2023{" "}
                </span>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center ">
              You Dont Have any Active Plan please{" "}
              <span
                className="underline px-2 text-[#158e] cursor-pointer"
                onClick={() => navigate("/properties-plan")}
              >
                {" "}
                Buy a Plan{" "}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlanDetsils;
