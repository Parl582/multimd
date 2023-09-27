import React from "react";
import AllChats from "./chatViewSection/AllChats";
import ChatHeader from "./header/ChatHeader";
import ChatInputSection from "./msgWritingSection/ChatInputSection";

const ChatSection = () => {
  return (
    <>
      <div className="w-full rounded-sm shadow-sm bg-[white] h-full relative flex flex-col justify-between">
        <ChatHeader />
        <AllChats />
        <ChatInputSection />
      </div>
    </>
  );
};

export default ChatSection;
