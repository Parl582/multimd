import Image from "next/image";
import React from "react";
import ChatHelp from "./ChatHelp";
import LanguageAndTime from "./Time";
import UserProfilePicture from "./User";
import { Mic } from "lucide-react";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";

const Header = () => {
  return (
    <div className="w-full  px-1 bg-[#ff10f0] top-0 sticky z-50 p-1 h-[100px] overflow-hidden ">
      <div className="w-full h-full flex items-center justify-between bg-[#ff10f0] relative">
        {/* logo  */}
        <div className="w-32 relative h-full ">
          <Image src="/logo.png" alt="" fill />
        </div>
        {/* searchbar  */}

        <div className="flex-1 relative rounded-md shadow-sm px-1 ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-5  pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
            placeholder="Search for all..."
          />
          <div className="absolute inset-y-0 right-4 flex items-center gap-2">
            <Mic color="#5858f5" />
            <BrokenImageOutlinedIcon
              color="#5858f5"
              className="!text-[#5858f5]"
            />
            |<span className="cursor-pointer text-[1.1rem]">All </span>
          </div>
        </div>
        {/* user  */}
        <UserProfilePicture />
        <ChatHelp />
        <LanguageAndTime />
      </div>
    </div>
  );
};

export default Header;
