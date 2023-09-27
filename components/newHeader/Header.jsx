"use client";
import {
  BellRing,
  MessageCircle,
  HelpCircle,
  Globe,
  PackageOpen,
  User2,
  Search,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PopOver from "@/components/newHeader/popover/Language";
import NotificationPopOver from "@/components/newHeader/popover/Notification";
import { useSearchParams } from "next/navigation";
import MobileSlider from "./MobileSlider";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const searchParams = useSearchParams();
  const selectedLanguage = searchParams.get("lang");
  const [menu, setMenu] = useState(false);

  console.log();
  return (
    <>
      <div className="w-full md:h-[80px]  bg-white z-50 sticky top-0 md:flex hidden items-center justify-between px-4  md:px-11 overflow-hidden text-black  shadow-lg gap-3">
        {/* <Image
          src={"/logo.png"}
          alt=""
          width={130}
          height={30}
          className="px-3"
        /> */}
        <h2> Logo </h2>
        <div className="flex-1 border lg:flex hidden items-center md:gap-2 gap-1 px-3 rounded-2xl overflow-hidden bg-slate-100 ">
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
        <div className="flex items-center h-full py-1 md:py-3   md:gap-3 gap-2">
          <Link
            href={"/chat"}
            className=" rounded-full px-2 py-2  md:flex hidden md:gap-1 items-center"
          >
            <MessageCircle strokeWidth={0.8} />
            <span className="md:block hidden"> Chat</span>
          </Link>

          <span className="md:hidden flex">
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
            href={"/"}
            className=" rounded-full px-2 py-2    md:flex hidden md:gap-1 items-center"
          >
            <PackageOpen strokeWidth={0.8} />
            <span>Become a seller </span>
          </Link>

          <span className="md:flex hidden">
            <NotificationPopOver />
          </span>

          <Link
            href={"/login"}
            className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
          >
            <User2 strokeWidth={0.8} className="md:block hidden" />
            <span> Login </span>
          </Link>

          <span
            className="md:hidden block cursor-pointer"
            onClick={() => setMenu((prev) => !prev)}
          >
            {menu ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </span>

          <PopOver selectedLanguage={selectedLanguage} />
        </div>
      </div>

      <MobileHeader />

      {/* <MobileSlider clicked={menu} setMenu={setMenu} /> */}
    </>
  );
};

export default Header;
