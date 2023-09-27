"use client";
import React from "react";
import ChatSection from "./ChatSection";

const ChatHome = () => {
  return (
    <>
      <div className="flex  w-full h-screen items-center justify-center bg-[whitesmoke]">
        <div className="md:w-[70%] w-[98%] md:py-3 py-1 h-full relative overflow-hidden">
          <div className="w-full h-full  flex relative">
            <ChatSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHome;
