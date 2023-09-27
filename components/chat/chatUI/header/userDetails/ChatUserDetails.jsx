import React, { useState } from "react";
import SelectChatOption from "../selectOption/SelectChatOption";

const ChatUserDetails = ({ handleOpen }) => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();

  const [click, setClick] = useState(false);
  const [name, setName] = useState("");

  // const handleOpen = (data) => {
  //   setOpen(!open);
  //   setImages(data);
  // };
  return (
    <>
      <div className="flex items-center  bg-[#ff10f0] md:py-2 py-1 w-full justify-between px-1 rounded ">
        <div className="w-1/2 flex gap-1 items-center   ">
          <img
            src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] md:min-w-[60px] min-w-[40px] rounded-full overflow-hidden p-1 object-cover cursor-pointer"
            onClick={() =>
              handleOpen(
                "https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              )
            }
          />
          <span className=" text-[black] truncate font-bold heading-date-time md:text-[1rem] text-[0.7rem] md:mt-0 mt-3 uppercase md:w-auto w-[80%]">
            Johnkjasjhuidooieieircrfhyeo2o3w
          </span>
        </div>

        {/* <h1> test debug </h1> */}

        <SelectChatOption
          setClick={setClick}
          click={click}
          setName={setName}
          name={name}
        />
      </div>
    </>
  );
};

export default ChatUserDetails;
