import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import ChatHome from "@/components/chat/chatUI/ChatHome";

const page = () => {
  return (
    <>
      {/* <div className="w-full h-screen">
        <div className="w-full h-14 px-2 md:px-7 border bg-pink-300 flex items-center gap-2 justify-between">
          <div className="flex items-center">
            <ChevronLeft />
            <div className="flex items-center gap-1 ">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                width={50}
                height={50}
                alt=""
                className="rounded-full overflow-hidden"
              />
              <span className="md:text-lg uppercase font-semibold">
                {" "}
                User NAme{" "}
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <ChatHome />
    </>
  );
};

export default page;
