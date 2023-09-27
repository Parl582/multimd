"use client";
import { KeyRound, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { VscEyeClosed } from "react-icons/vsc";
import ForgotPassword from "@/components/common/ForgotPassword";
import ResetPassword from "@/components/common/ResetPassword";

const page = () => {
  const searchparams = useSearchParams();
  console.log(searchparams.get("page"));
  const [show, setShow] = useState(false);

  const [userInfo, setUserInfo] = useState();

  const handleChange = (e) => {
    console.log("i am user input ====>", e.target.value);
  };

  if (searchparams.get("page") === "forgot-password") {
    return <ForgotPassword />;
  }
  if (searchparams.get("page") === "reset-password") {
    return <ResetPassword />;
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#ccc]">
      <div className="w-[90%] md:w-[30%] shadow-md !rounded-2xl overflow-hidden bg-white md:px-14 px-9 pt-11 space-y-2 mb-5 pb-24 ">
        <h1 className="w-full text-center font-bold text-2xl py-3"> Login </h1>
        <form action="" className="space-y-2">
          <div className="">
            <label className="font-semibold text-sm">
              Enter your Email / Mobile Number
            </label>
            <div className=" w-full border-b-2 flex gap-2 items-center ">
              <User2 color="#ccc" />
              <input
                type="text"
                placeholder="Enter your Details"
                className="w-full outline-none py-2"
                onChange={handleChange}
              />
            </div>
          </div>
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
                  {show ? <VscEyeClosed /> : <PiEyeClosedBold />}
                </span>
              }
            </div>
          </div>
          <Link
            href={"?page=forgot-password"}
            className="w-full flex justify-end py-2 text-sm font-light"
          >
            Forgot password ?
          </Link>

          <button className="w-full text-center ring-1 rounded-3xl py-2 mt-4">
            Submit
          </button>
        </form>
        <h4 className="w-full text-center font-semibold  py-5">
          or Login with
        </h4>
        <div className="w-full border-2 cursor-pointer py-2 flex  items-center justify-center gap-2 rounded-3xl">
          <div className="md:w-1/3 w-1/4 flex justify-end ">
            <Image src="/google.webp" alt="" width={30} height={30} />
          </div>
          <span className="w-1/2 text-sm md:text-base font-semibold">
            Google
          </span>
        </div>
        <div className="w-full border-2 py-2 flex items-center justify-center gap-2 rounded-3xl">
          <div className="md:w-1/3 w-1/4 flex justify-end ">
            <Image src="/facebook.png" alt="" width={30} height={30} />
          </div>

          <span className="w-1/2 text-sm md:text-base font-semibold">
            Facebook
          </span>
        </div>
        {/* create an account  */}
        <div className="w-full items-center justify-center py-3">
          Dont have an account
          <Link href={"/register"} className="ml-1 font-semibold text-blue-600">
            Register
          </Link>
        </div>
        <div className="text-sm text-slate-600">
          By continuing, I agree to company's
          <Link href="/" className="text-blue-600 mx-1">
            Terms of Use & Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
