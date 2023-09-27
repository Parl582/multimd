import React from "react";
import MobileHumbugger from "./Humbagr";
import { HelpCircle, MessageCircle, Search, User2 } from "lucide-react";
import Link from "next/link";
import NotificationPopOver from "./popover/Notification";

import { useScrollDirection } from "./hooks/displayScroll";

const MobileHeader = () => {
  const toggle = useScrollDirection();
  return (
    <div className="w-full top-0 sticky md:hidden block bg-white z-50">
      <div
        className={`w-full flex justify-between px-2 items-center ${
          toggle === "down" ? "hidden opacity-0" : "flex opacity-100"
        } duration-150  `}
      >
        <Link href={"/"}> Logo </Link>

        <div className="flex items-center gap-3 ">
          <Link
            href={"/chat"}
            className=" rounded-full px-2 py-2  md:flex hidden md:gap-1 items-center"
          >
            <MessageCircle strokeWidth={0.8} />
            <span className="md:block hidden"> Chat</span>
          </Link>
          <span className=" flex">
            <NotificationPopOver />
          </span>

          <Link
            href={"/help"}
            className=" rounded-full md:px-2 py-2 flex md:gap-1 items-center"
          >
            <HelpCircle strokeWidth={0.8} />
            <span className="block px-2 "> Help</span>
          </Link>

          <Link
            href={"/login"}
            className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
          >
            <User2 strokeWidth={0.8} className="md:block hidden" />
            <span> Login </span>
                  </Link>
                  
                  {/* open sheet  button  */}
          <MobileHumbugger />
        </div>
      </div>

      <div className="w-full  flex items-center justify-between my-1 px-2">
        <div className="w-full border lg:hidden flex items-center my-1 md:gap-2 gap-1 px-3 rounded-[14px] overflow-hidden bg-slate-100 ">
          <span className="border-r-2 px-2 border-s-teal-500 cursor-pointer bg-transparent">
            All
          </span>
          <input
            type="text"
            className="w-full px-2 py-2 bg-transparent outline-none "
            placeholder="Search Something"
          />
          <Search strokeWidth={0.75} className="bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
