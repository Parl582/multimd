import { AtSign, Cable, Car, Home, Mic, Phone, PlugZap } from "lucide-react";
import Link from "next/link";
import Accordians from "@/components/Accordian/Accordians";
import React from "react";
import VoiceChat from "@/components/Accordian/VoiceChatSection";

import { user } from "@/dummyData";

const page = ({ searchParams }) => {
  const page = searchParams.section;

  return (
    <>
      <div className="w-full min-h-screen  px-4 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-center">
          {" "}
          <h1 className="font-bold text-xl md:text-2xl pt-3 md:pt-5">
            {" "}
            We are here to help you{" "}
          </h1>{" "}
          <p className="text-sm md:text-base pb-4 text-slate-500">
            {" "}
            Please Select Problem
          </p>
          <select name="" id="" className="w-[30%] py-2 border-2 rounded-[4px]">
            {data.map((elm,) => (
              <option value={elm.name}  key={i}> {elm.name} </option>
            ))}
          </select>
          <div className="flex gap-4 items-center md:mt-4 mt-2">
            <Link
              href={`/help/${user?.id}`}
              className="bg-white ring-1 px-3 py-1 rounded-[10px]"
            >
              {" "}
              Create New Ticket
            </Link>
            <Link
              href={"/allticket"}
              className="bg-white ring-1 px-3 py-1 rounded-[10px]"
            >
              {" "}
              View Your Tickets{" "}
            </Link>
          </div>
        </div>
        <div className="w-full  flex flex-wrap justify-between mt-4">
          <div className="md:w-[60%] w-full  border-r md:pr-4  ">
            {/* //sent voice note  */}
            <div className="w-full flex justify-end py-2 px-1">
              <div className="flex gap-2 items-center">
                <h1> Send your Voice Note </h1>
                <Mic />
              </div>
            </div>
            <VoiceChat stokeWidth={0.5} className="cursor-pointer" />
          </div>
          <div className="md:w-[40%] w-full  p-2 h-full bg-slate-50 rounded-sm ">
            <Accordians />
            <Accordians />
            <Accordians />
            <Accordians />
            <Accordians />
            <Accordians />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center my-4">
          <h1 className="md:text-2xl text-xl ">
            {" "}
            For more Please Contact us on{" "}
          </h1>

          <div className="flex gap-2 items-center py-3 flex-wrap  justify-center">
            <div className="flex gap-2 ">
              <Phone />
              <span> +91-9876543210 </span>
            </div>
            <div className="flex gap-2 ">
              <AtSign strokeWidth={1.5} />
              <span> help@multimedia.com </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

const data = [
  {
    icon: <Home />,
    name: "Property",
  },
  {
    icon: <PlugZap />,
    name: "Electrician",
  },
  {
    icon: <Car />,
    name: "Driver",
  },
  {
    icon: <Cable />,
    name: "Mechanic",
  },
];
