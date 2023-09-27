"use client";
import { BellRing } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import {user} from '@/dummyData'

const Help = "";

const ChatHelp = () => {
  const navigate = useRouter();
  return (
    <div className="flex gap-1 items-center h-full">
      <div
        className="min-w-[70px] h-full flex flex-col relative justify-center bg-yellow-100 mx-[1.5px] items-center cursor-pointer border-r-[1px]"
        onClick={() => navigate.push(`/chat?user=${user.id}`)}
      >
        <span className="material-symbols-outlined w-full text-[60px] font-bold text-[#4bdbf4] ml-2">
          <MdOutlineChatBubbleOutline />
        </span>
        <span className=" w-[25px] h-[25px] rounded-full absolute bg-[#ff10f0] top-[1%] text-[#fff] right-[5px] grid place-content-center font-bold">
          1
        </span>
        <p className="text-[1.2rem] font-semibold leading-7 text-[black] mt-[3px] absolute bottom-0">
          Chat
        </p>
      </div>
      {/* help  */}

      <div className="w-[70px] relative h-full cursor-pointer flex flex-col bg-green-200 items-center justify-center border-[#f730cf] mr-[1.5px]   pt-1">
        {/* <span className="material-symbols-outlined">help</span> */}
        <img
          src="/help.jpg"
          alt=""
          className="w-[80%] h-[70%] mix-blend-color-burn"
          onClick={() => navigate.push("/help-center")}
        />
        <span className="text-[1.2rem] font-semibold text-[black] mt-[1px]">
          Help
        </span>
      </div>

      {/* message */}
      <div
        className="w-[70px] h-full cursor-pointer bg-yellow-100 flex flex-col items-center justify-center mr-[1.5px] border-[#f730cf] relative"
        onClick={() => navigate.push("/notification")}
      >
        <span className="bg-[#ff00c3] font-bold top-5 rounded-full w-[23px] h-[23px] right-3 grid place-content-center mt-[6px]">
          2
        </span>
        {/* <div className=" "> */}
        <BellRing size={60} />
        {/* </div> */}
        <h3 className="text-[black] text-[1.2rem]  bottom-0 font-semibold mt-[-5px]">
          {" "}
          Alert{" "}
        </h3>
      </div>
    </div>
  );
};

export default ChatHelp;
