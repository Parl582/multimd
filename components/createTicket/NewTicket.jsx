"use client";
import React, { useEffect, useState } from "react";
import CreateTicketHeader from "./header/CreateTicketHeader";
import MainMsgInput from "./mainMsg/MainMsgInput";
import UpperInput from "./upperInput/UpperInput";
import FileAttach from "./fileAttach/FileAttach";
import SendPassword from "./sendPassword/SendPassword";
import CreateTicketBtn from "./Button/CreateTicketBtn";
import ReCaptch from "./captcha/ReCaptch";

import { useRouter } from "next/navigation";

const NewTicket = () => {
  const navigate = useRouter();
  const [updateImage, setUpdateImage] = useState();
  const [preview, setPreview] = useState();

  const [otherMsg, setOtherMsg] = useState("");
  const [mainMsg, setMainMsg] = useState("");

  const [showPasswordField, setsendPassword] = useState(false);

  useEffect(() => {
    if (updateImage) {
      const image = URL.createObjectURL(updateImage);
      setPreview(image);
    }
  }, [updateImage]);

  const [addImage, setAddImage] = useState([{ img: "" }]);

  // add dynamic field

  const AddMoreImages = () => {
    setAddImage([...addImage, { img: "" }]);
  };

  // remove dynamic field
  const Remove = (data) => {
    let neData = addImage.filter((elm, index) => index !== data);
    setAddImage(neData);
  };

  // react Capture  functions
  function ReCaptureChange(value) {
    // write  condition after successfully capture fill
  }

  return (
    <>
      <div className="w-full">
        <div className="px-3 py-5 ">
          <div className=" w-full">
            {/* heading  */}
            <div className="w-full text-center grid place-items-center py-2 ">
              <h2 className="text-lg md:text-[25px] font-bold text-[#ff10f0]">
                New Ticket
              </h2>
            </div>
            {/* form  header */}
            <CreateTicketHeader />

            <div className="w-full flex items-center justify-center py-3 flex-col">
              <UpperInput />

              {/* main message  */}
              <MainMsgInput
                name={"Message"}
                setContent={setMainMsg}
                content={mainMsg}
              />
              {/* other msg  */}
              <MainMsgInput
                name={"Other"}
                content={otherMsg}
                setContent={setOtherMsg}
              />
              {/* file attach  */}

              <FileAttach
                Remove={Remove}
                setUpdateImage={setUpdateImage}
                AddMoreImages={AddMoreImages}
                addImage={addImage}
              />

              {/* password attached  */}
              <SendPassword
                showPasswordField={showPasswordField}
                setsendPassword={setsendPassword}
              />

              {/* capture */}

              <ReCaptch onChange={ReCaptureChange} />

              {/* button  */}

              <CreateTicketBtn
                handleFunction={() =>
                  navigate.push("/all-tickets", { state: true })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
