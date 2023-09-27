"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TicketDetails = () => {
  const [showPasswordField, setsendPassword] = useState(false);

  const navigate = useRouter();

  const [msg, setMsg] = useState(false);

  const PostMsg = () => {
    setMsg((prev) => !prev);

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setMsg(false);
    // }, 1000);
  }, [msg]);

  return (
    <>
      <div className="w-full  p-3">
        <div className="w-full flex items-center justify-center flex-col shadow-md">
          <div className="md:w-[80%]  shadow-sm border-[1.5px] rounded-sm  ">
            {/* header  */}
            <div className="p-3 w-full flex justify-between">
              <h2 className="text-[1.4rem] font-bold">My Ticket Detail</h2>
              <button
                onClick={() => navigate.back()}
                className="border-[1.2px] bg-[#158aed] text-[white] px-3 py-1"
              >
                Back
              </button>
            </div>

            {msg && (
              <div className="w-full  font-semibold bg-green-700 text-white text-center ">
                <span className="py-1">Your Message Posted Successfully.</span>
              </div>
            )}

            <div className="w-full p-3">
              <span className="text-[1.1rem] font-semibold">
                Ticket No : 098765
              </span>
            </div>

            <div className="w-full flex flex-wrap  shadow-md p-3">
              <div className="md:w-1/2 ">
                <div className="w-full p-1 ">
                  <div className="text-sm md:text-base">
                    {" "}
                    Ticket Status : Open{" "}
                  </div>
                  <div className="text-sm md:text-base">
                    {" "}
                    Department : Support{" "}
                  </div>
                  <div className="text-sm md:text-base text-slate-700">
                    TCreate Date : Monday , April 2, 2023 , 5: 00 PM
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 ">
                <div className="w-full p-1 ">
                  <div className="text-sm md:text-base"> Name : User Name </div>
                  <div className="text-sm md:text-base">
                    {" "}
                    Email : userEmail@gmail.com{" "}
                  </div>
                  <div className="text-sm md:text-base">
                    {" "}
                    Main Product : N/A
                  </div>
                  <div className="text-sm md:text-base">
                    {" "}
                    Phone No : 987654321
                  </div>
                  <div className="text-sm md:text-base">
                    {" "}
                    Additional Phone No : 987654321
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subject part  */}

          <div className="md:w-[80%] py-3  rounded-sm ">
            <div className="w-full p-3 border-[1.5px] rounded-sm bg-[#ff10f0] text-[white] font-bold">
              Monday April, 4,2023, 500 PM
            </div>

            {/* main Subject  */}
            <div className="w-full  p-3 border-[1.5px]  ">
              <h2 className="font-semibold"> Problem </h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* Replay from support team part  */}

          <div className="md:w-[80%] w-full py-3 ">
            <div className="w-full  p-3 bg-green-200 font-bold text-[black] border-[1.5px] rounded-sm ">
              Monday April, 4,2023, 500 PM
            </div>

            {/* main Subject  */}
            <div className="w-full  p-3 border-[1.5px] ">
              <h2 className="font-semibold"> Reply </h2>
              <p> Your ticket problem has been solved </p>
            </div>
          </div>

          {/* post reSubmit  */}
          <div className="py-3 border-[1.5px] rounded-sm md:w-[80%] w-full ">
            <div className="md:w-1/2 w-full p-3">
              <div> Ticket Will be reopen if you post </div>
              <div className="w-full p-2 border-[1.5px] border-blue-500">
                <textarea className="w-full min-h-[140px] outline-none " />
              </div>
            </div>
          </div>
          {/* Share password reSubmit  */}
          <div className=" border-[1.5px] rounded-sm md:w-[80%] w-full ">
            <div className="md:w-1/2 w-full p-3">
              <div className="flex space-x-4">
                <span className="text-sm md:text-base">
                  Do you want to share your password{" "}
                </span>
                <span className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="1"
                    id=""
                    onChange={(e) => setsendPassword(true)}
                  />
                  <span className="text-sm md:text-base">Yes</span>
                </span>
                <span className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="1"
                    id=""
                    onChange={(e) => setsendPassword(false)}
                  />
                  <span className="text-sm md:text-base">No</span>
                </span>
              </div>

              {showPasswordField && (
                <div className="w-full p-2 border-[1.5px]">
                  <input type="text" />
                </div>
              )}
            </div>
          </div>

          {/* button section  */}

          <div className="md:w-[80%] py-3">
            <button
              className="px-3 py-2 text-[white] bg-[#ff10f0]"
              onClick={PostMsg}
            >
              Post reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetails;
