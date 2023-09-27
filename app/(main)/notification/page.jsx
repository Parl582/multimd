import React from "react";
import Notification from "@/components/notification/Notification";
import { BellRing } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="w-full  flex items-center justify-center py-2 ">
        <div className="md:w-[60%] w-[90%] border-[1px] md:p-3 p-2 rounded-sm shadow-md overflow-hidden min-h-[50vh]">
          {/* Notification Header  */}

          <div className="w-full rounded-b-sm md:px-3 px-2 py-2 flex items-center justify-between space-x-2 border-[1.5px] bg-yellow-100">
            <span className="text-[#262626] md:text-[1.7rem] text-[1.2rem] font-semibold">
              Notification
            </span>
            <BellRing strokeWidth={0.75} size={50} />
          </div>

          {/* if there is no Notification bellow div will appear  */}

          {Notificationdata.length === 0 && (
            <>
              <div className="w-full h-[50vh] flex items-center justify-center">
                <h3 className="text-[#ccc] md:text-[35px] text-[1.3rem]">
                  No Notification
                </h3>
              </div>
            </>
          )}

          {/* map all notification here  */}
          {Notificationdata?.map((elm) => (
            <Notification key={elm.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

const Notificationdata = [
  {
    id: 1,
  },
];
