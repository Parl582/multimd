import React from "react";
import { Role, intustrtType } from "../RequiterData";

const LangingStep = ({ setIndustry, industry }) => {
  return (
    <>
      <>
        {/* form data  */}
        <div className="w-full">
          <div className="w-full font-semibold">
            {" "}
            Your Full Name<sup>*</sup>{" "}
          </div>
          <input
            type="text"
            className="w-full py-2 px-1 border-[1.5px] rounded-sm "
            placeholder="Please Enter Your Full Name "
          />
        </div>

        {/* ------------------------------------- */}
        <div className="w-full">
          <div className="w-full font-semibold">
            {" "}
            Company Name<sup>*</sup>{" "}
          </div>
          <input
            type="text"
            className="w-full py-2 px-1 border-[1.5px] rounded-sm "
            placeholder="please enter your Company Name"
          />
        </div>

        <div className="w-full">
          <div className="w-full font-semibold">Select Industry Type</div>

          {industry === "Other" ? (
            <input
              type="text"
              className="w-full py-2 px-1 border-[1.5px] rounded-sm "
              placeholder="please enter your Company Name"
            />
          ) : (
            <select
              name=""
              id=""
              className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please Select One from Drop-down</option>
              {intustrtType.map((elm, index) => (
                <option value={elm.name} key={index}>
                  {elm.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="w-full">
          <div className="w-full font-semibold"> Company Web-site</div>
          <input
            type="text"
            className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
            placeholder="Please Enter your Company GSTIN or Company PAN"
          />
        </div>

        <div className="w-full ">
          <div className="font-semibold">Total Employee in your Company</div>

          <select
            name=""
            id=""
            className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Please Select One from Drop-down</option>
            {intustrtType.map((elm, index) => (
              <option value={elm.name} key={index}>
                0 - 20 Employees
              </option>
            ))}
          </select>
        </div>

        {/* ++++++++++++++++++++++++++++++++ */}
        {/* ------------------------------------- */}
        <div className="w-full">
          <div className="w-full font-semibold">
            {" "}
            Enter Company GST No or PAN No<sup>*</sup>{" "}
          </div>
          <input
            type="text"
            className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
            placeholder="Please Enter your Company GSTIN or Company PAN"
          />
        </div>
      </>
      {/* // )} */}
      {/* ++++++++++++++++++++++++++++++++ */}

      {/* apana   */}

      <div className="w-full">
        <div className="w-full font-semibold"> Your Role in the Company</div>

        <select
          name=""
          id=""
          className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
        >
          <option value="" className="text-[#ccc]">
            Please Select One from Drop-down
          </option>
          {Role.map((elm, index) => (
            <option value="" key={index}>
              {" "}
              {elm.name}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="w-full">
              <div className="w-full">
                Which of the Following Describe your Role
              </div>
              <input
                type="text"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm  "
                placeholder="Please Enter your Company GSTIN or Company PAN"
              />
            </div> */}
    </>
  );
};

export default LangingStep;
