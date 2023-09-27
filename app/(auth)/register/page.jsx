"use client";
import {
  AtSign,
  CalendarDays,
  ImagePlus,
  KeyRound,
  Map,
  Smartphone,
  User2,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { PiAddressBook, PiEyeClosedBold } from "react-icons/pi";
import { VscEyeClosed } from "react-icons/vsc";

const page = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full ">
      <div className="w-full h-screen flex items-center justify-center bg-[#ccc]">
        <div className="w-[90%] md:w-[30%] shadow-md !rounded-2xl overflow-hidden bg-white md:px-11 px-9 pt-2  space-y-2 mb-5 pb-2 md:pb-5">
          <h1 className="w-full text-center font-bold text-2xl py-3">
            {" "}
            Register{" "}
          </h1>
          <form action="" className="space-y-1">
            <div className="">
              <label className="font-semibold text-sm">Profile Picture</label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <ImagePlus color="#ccc" />
                <input
                  type="file"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            <div className="">
              <label className="font-semibold text-sm">Enter your Name</label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <User2 color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            <div className="">
              <label className="font-semibold text-sm">Enter your Email</label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <AtSign color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            <div className="">
              <label className="font-semibold text-sm">
                Enter Your Mobile number
              </label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <Smartphone color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            <div className="">
              <label className="font-semibold text-sm">
                {" "}
                Alternative Mobile number
              </label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <Smartphone color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            {/* Gender Selection  */}
            <div className="">
              <label className="font-semibold text-sm">Gender</label>
              <div className=" w-full  flex gap-4 items-center ">
                <div className="flex gap-1 items-center">
                  <input
                    type="radio"
                    name="gender"
                    placeholder="Enter your Details"
                    className="w-full outline-none py-2"
                  />
                  <span> Male </span>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    type="radio"
                    name="gender"
                    placeholder="Enter your Details"
                    className="w-full outline-none py-2"
                  />
                  <span> Female </span>
                </div>
              </div>
            </div>

            <div className="">
              <label className="font-semibold text-sm">Date of Birth</label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <CalendarDays color="#ccc" />
                <input
                  type="date"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
            <div className="">
              <label className="font-semibold text-sm">Address</label>
              <div className=" w-full border-b-2 flex gap-2  items-center ">
                <Map color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2 "
                />
              </div>
            </div>

            {/* password  */}

            <div className="">
              <label className="font-semibold text-sm">Password </label>
              <div className=" w-full border-b-2 flex gap-2 items-center">
                <KeyRound color="#ccc" />
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
                {
                  <span
                    className="cursor-pointer text-[#ccc]"
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {" "}
                    {show ? <VscEyeClosed /> : <PiEyeClosedBold />}{" "}
                  </span>
                }
              </div>
            </div>
            <div className=" py-2 md:py-4 w-full">
              <button className="w-full text-center ring-1 rounded-3xl py-1.5 md:py-2 ">
                {" "}
                Submit{" "}
              </button>
            </div>

            <div className="w-full items-center justify-center py-3">
              Already have an account{" "}
              <Link
                href={"/login"}
                className="ml-1 font-semibold text-blue-600 hover:underline duration-100 "
              >
                {" "}
                Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
