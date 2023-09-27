import { AtSign, Phone, User2 } from "lucide-react";
import React from "react";

const CreateTicketHeader = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-wrap px-2 md:space-x-3  items-center md:w-[80%] w-full shadow-md py-3  rounded-sm   text-[1.3rem]">
          <div className="shadow-sm py-2 px-3">
            <div className="text-[1rem] flex items-center gap-1">
              <User2 color="#ccc" /> :
              <span className="text-[1rem]  font-semibold text-slate-700">
                User Name
              </span>
            </div>
          </div>
          <div className="shadow-sm py-2 px-3">
            <div className="text-[1rem] flex items-center gap-1">
              <AtSign color="#ccc" /> :
              <span className="text-[1rem]  font-semibold text-slate-700">
                test@gmail.com
              </span>
            </div>
          </div>

          <div className="shadow-sm py-2 px-3">
            <div className="text-[1rem] flex items-center gap-1">
              <Phone color="#ccc" /> :
              <span className="text-[1rem]  font-semibold text-slate-700">
                9876543210
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicketHeader;
