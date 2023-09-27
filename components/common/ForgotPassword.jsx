"use client";
import { ArrowLeft, AtSign, User2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { MdNumbers } from "react-icons/md";

const ForgotPassword = () => {
  const [otpShow, setOtpShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOtpShow(true);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#ccc]">
      <div className="w-[90%] md:w-[30%] shadow-md !rounded-2xl overflow-hidden bg-white md:px-14 px-9 pt-11 space-y-2 mb-5 pb-24 ">
        <h1 className="w-full text-center font-bold text-2xl ">
          Forgot Password
        </h1>
        <p className="text-xs md:text-sm text-slate-700  text-center">
          Please Enter your Email/Mobile No, for reset your password
        </p>

        <form action="" className="w-full py-3 " onSubmit={handleClick}>
          {otpShow ? (
            <div className="">
              <label className="font-semibold text-sm">Enter OTP</label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <MdNumbers color="#ccc" />
                <input
                  type="number"
                  placeholder="Please Enter OTP"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
          ) : (
            <div className="">
              <label className="font-semibold text-sm">
                Enter your Email / Mobile No
              </label>
              <div className=" w-full border-b-2 flex gap-2 items-center ">
                <User2 color="#ccc" />
                <input
                  type="text"
                  placeholder="Enter your Details"
                  className="w-full outline-none py-2"
                />
              </div>
            </div>
          )}
          {/* <div className="">
            <label className="font-semibold text-sm">
              Enter your Email / Mobile No
            </label>
            <div className=" w-full border-b-2 flex gap-2 items-center ">
              <User2 color="#ccc" />
              <input
                type="text"
                placeholder="Enter your Details"
                className="w-full outline-none py-2"
              />
            </div>
          </div> */}
          {otpShow ? (
            <div className="w-full my-3 flex text-center py-1.5 font-bold active:bg-pink-600 md:py-2 text-white bg-[#ff10f0] rounded-3xl">
              <Link href={"?page=reset-password"} className="w-full ">
                Submit
              </Link>
            </div>
          ) : (
            <button className="w-full my-3  py-1.5 font-bold active:bg-pink-600 md:py-2 text-white bg-[#ff10f0] rounded-3xl">
              Send OTP
            </button>
          )}
        </form>
        <div className="w-full flex items-center justify-center">
          <Link
            href={"/login"}
            className="flex items-center gap-2 text-sm font-bold "
          >
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
