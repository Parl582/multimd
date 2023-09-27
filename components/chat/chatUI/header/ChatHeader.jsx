import React, { useState } from "react";
import ImageModel from "../ViewFullImage";
import SelectChatOption from "./selectOption/SelectChatOption";
import ChatUserDetails from "./userDetails/ChatUserDetails";

const ChatHeader = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();

  const [click, setClick] = useState(false);
  const [name, setName] = useState("");

  const handleOpen = (data) => {
    setOpen(!open);
    setImages(data);
  };
  return (
    <>
      <div
        className="w-full  z-[4]  md:p-2 border-b-[1px] shadow-md flex  flex-col  justify-between relative"
        onClick={() => setClick(false)}
      >
        {/* Company Details  */}
        {/* <div className="w-full py-2 flex items-center md:space-x-2 space-x-0 justify-center bg-[#ff10f0] ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKaJtfxrcgAnRtU5ec783aTLKgM1aGRbDR48sztqg&s"
            alt=""
            className="w-[100px] h-[50px]  object-contain cursor-pointer"
          />
          <h2 className="md:text-[1.5rem] text-[1.3rem]">Company Name</h2>
        </div> */}
        {/* select  option  */}
      
        {/* user Avatar with Name  */}
        <ChatUserDetails handleOpen={handleOpen} />
      </div>

      {/* <ImageModel open={open} setOpen={setOpen} images={images} /> */}
    </>
  );
};

export default ChatHeader;
