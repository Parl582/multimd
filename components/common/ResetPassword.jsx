"use client";
import { ArrowLeft, KeyRound } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { VscEyeClosed } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [sameError, setSameError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
  };

  console.log(sameError);
  useEffect(() => {
    if (cpassword !== password) {
      setSameError(true);
    } else {
      setSameError(false);
    }
  }, [cpassword]);

  const notify = () => toast("Sucessfull");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#ccc]">
      <div className="w-[90%] md:w-[30%] shadow-md !rounded-2xl overflow-hidden bg-white md:px-14 px-9 pt-11 space-y-2 mb-5 pb-24 ">
        <h1 className="w-full text-center font-bold text-2xl ">
          Set New Password
        </h1>
        <p className="text-xs md:text-sm text-slate-700  text-center">
          Please set a new password
        </p>

        <form
          action=""
          className="w-full py-3 space-y-3 "
          onSubmit={handleClick}
        >
          <div className="">
            <label className="font-semibold text-sm">Password </label>
            <div className=" w-full border-b-2 flex gap-2 items-center">
              <KeyRound color="#ccc" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
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
            {password.length < 0 && (
              <span className="text-xs font-light text-red-500">
                Passwor is required
              </span>
            )}
          </div>
          <div className="">
            <label className="font-semibold text-sm">Confirm Password </label>
            <div className=" w-full border-b-2 flex gap-2 items-center">
              <KeyRound color="#ccc" />
              <input
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full outline-none py-2"
                onChange={(e) => setCPassword(e.target.value)}
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
            {sameError && (
              <span className="text-xs font-light text-red-500">
                Passwor does not match
              </span>
            )}
          </div>

          <button
            className="w-full my-3  py-1.5 font-bold active:bg-pink-600 md:py-2 text-white bg-[#ff10f0] rounded-3xl"
            onClick={notify}
          >
            Reset Password
          </button>
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ResetPassword;
