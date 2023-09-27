
'use client'
import React, { useState } from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

// all chat between  user and Admin will appear here
const VoiceChat = () => {
  // replace id with user-id for change masg direction
  let id = 123;
  const [play, setPause] = useState(false);
  return (
    <>
      <div className="w-full md:h-[calc(100vh-365px)] h-[calc(100vh-230px)] overflow-y-auto p-3 relative z-[1] ">
        <div className="w-full space-y-3">
          {data.map((elm, index) => (
            <div className={`w-full md:p-2 p-1 `} key={index}>
              <div
                className={`w-full  flex  ${
                  elm.id === id ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`md:w-[60%] w-[70%] flex border-[1.2px] rounded-md shadow-sm relative ${
                    elm.id === id ? "justify-end" : "justify-start"
                  } px-2 py-1`}
                >
                  {elm.id === id ? (
                    // userVoice
                    <>
                      <div className="w-full flex  h-[40px] justify-end space-x-2 relative">
                        <div className="w-full ">
                          {play ? (
                            <img
                              src="https://thumbs.gfycat.com/AstonishingRightKingsnake-size_restricted.gif"
                              alt=""
                              className="w-[100%] h-full object-cover "
                            />
                          ) : (
                            <img
                              src="https://img.lovepik.com/original_origin_pic/18/06/30/b6edf14e53432432d7ac09401e0197ce.png_wh300.png"
                              alt=""
                              className="w-[100%] h-full object-cover "
                            />
                          )}
                        </div>
                        <div className="h-[40px]">
                          {play ? (
                            <span
                              className="material-symbols-outlined text-[35px] cursor-pointer"
                              onClick={() => setPause((prev) => !prev)}
                            >
                              pause
                            </span>
                          ) : (
                            <PlayArrowOutlinedIcon
                              className="!text-[35px] cursor-pointer text-[#2626262]"
                              onClick={() => setPause((prev) => !prev)}
                            />
                          )}
                        </div>
                        <div className="min-w-[40px] w-[40px] h-[40px] ">
                          <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80g"
                            alt=""
                            className="w-full h-full object-cover rounded-sm"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <span className="text-[#ff10f0]">{elm.msg}</span>
                  )}
                  <span
                    className={`absolute bottom-[-20px] md:right-[10px] right-[10px] text-[0.9rem] ${
                      elm.id !== id ? "text-[#ff10f0]" : "text-[green]"
                    } `}
                  >
                    12/03/2023 Monday 02:30 pm
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VoiceChat;

const data = [
  {
    id: 123,
    msg: "lorem",
  },
  {
    id: 12,
    msg: "lorem is plaza",
  },
  {
    id: 123,
    msg: "lorem is plaza",
  },
  {
    id: 12,
    msg: "lorem is plaza",
  },
  {
    id: 123,
    msg: "lorem",
  },
];
