"use client";
import React from "react";
// import LeftSideSelect from "../../../components/country/LeftSideSelect";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LandHome = () => {
  const [country, setCountry] = useState(false);
  const [state, setState] = useState(false);
  const [locality, setLocality] = useState(false);

  const [buttonSelect, setBtn] = useState();

  const navigate = useRouter();

  const handleNavigate = () => {
    if (buttonSelect === "Seller") {
      navigate.push(`/seller?state=assam`);
      return;
    } else {
      navigate.push(`/properties/12334?state='assam'`);
    }
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-150px)] md:px-[100px] px-[10px] py-3">
        <div className="w-full">
          <div className="w-full md:w-1/3 relative">
            <h2 className="text-[1rem] font-semibold">
              Please Select Your Country
            </h2>
            <div
              className="w-full border-[1.2px] cursor-pointer rounded overflow-hidden border-black "
              onClick={() => setCountry(true)}
            >
              <input
                type="text"
                placeholder="Please Select Your Country"
                className="w-full px-1 py-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            {country && (
              <div className="w-full absolute top-[100%] z-30  left-0 right-0 bg-white border-[1.3px] shadow-md">
                <ul className="w-full">
                  <li
                    className="cursor-pointer hover:bg-[#e8e8e8] w-full py-1 px-2"
                    onClick={() => setCountry(false)}
                  >
                    Delhi
                  </li>
                </ul>
              </div>
            )}

            {/* //select who are you  */}
          </div>
          <div className="w-full md:w-1/3 relative py-3">
            <h2 className="text-[1rem] font-semibold">
              Please Select Your State
            </h2>

            <div
              className="w-full border-[1.2px] cursor-pointer rounded overflow-hidden border-black "
              onClick={() => setState(true)}
            >
              <input
                type="text"
                value={state}
                placeholder="Please Select Your Country"
                className="w-full px-1 py-2"
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            {state && (
              <div className="w-full absolute top-[100%] z-30  left-0 right-0 bg-white border-[1.3px] shadow-md">
                <ul className="w-full">
                  <li
                    className="cursor-pointer hover:bg-[#e8e8e8] w-full py-1 px-2"
                    onClick={() => setState(false)}
                  >
                    Delhi
                  </li>
                </ul>
              </div>
            )}

            {/* //select who are you  */}
          </div>
          <div className="w-full md:w-1/3 relative">
            <h2 className="text-[1rem] font-semibold">
              Please Select Your District
            </h2>

            <div
              className="w-full border-[1.2px] cursor-pointer rounded overflow-hidden border-black "
              onClick={() => setLocality(true)}
            >
              <input
                type="text"
                value={locality}
                placeholder="Please Select Your Country"
                className="w-full px-1 py-2"
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>

            {locality && (
              <div className="w-full absolute top-[100%] z-30  left-0 right-0 bg-white border-[1.3px] shadow-md">
                <ul className="w-full">
                  <li
                    className="cursor-pointer hover:bg-[#e8e8e8] w-full py-1 px-2"
                    onClick={() => setLocality(false)}
                  >
                    Delhi
                  </li>
                </ul>
              </div>
            )}

            {/* //select who are you  */}
          </div>

          <div className="w-full flex gap-2 py-4">
            {btn.map((elm,i) => (
              <span
                className={`text-[1rem] px-3 py-[2px] cursor-pointer  border-green-400 border-[1.1px] rounded-[30px] w-[110px] text-center text-green-500 ${
                  elm.title === buttonSelect ? "bg-green-300" : "bg-green-50"
                } `}
                onClick={() => setBtn(elm.title)}
                key={i}
              >
                {elm.title}
              </span>
            ))}
            {/* <span className="text-[1rem] px-3 py-[2px] bg-yellow-50 cursor-pointer border-yellow-400 border-[1.1px] rounded-xl text-black-500">
              {" "}
              seller
            </span> */}
          </div>

          <div className="md:w-1/3 w-full">
            <button
              className="text-white border-[1px] rounded py-2 text-center w-full bg-[#ff10f0]"
              onClick={handleNavigate}
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandHome;

const btn = [
  {
    title: "Buyer",
  },
  {
    title: "Seller",
  },
];
