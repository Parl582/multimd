import React, { useEffect, useState } from "react";
import "./chat.module.scss";
import { ChevronDown, Mic, Paperclip, SendHorizontal } from "lucide-react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
const ChatInputSection = () => {
  // const {
  //   transcript,
  //   listening,
  //   // resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("ENG");
  const ChangeLanguage = (data) => {
    if (data === "ENG") {
      setLang("हिंदी");
    } else {
      setLang("ENG");
    }
  };

  // useEffect(() => {
  //   setSearch(transcript);
  // }, [listening]);
  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  return (
    <>
      <div className="w-full h-[90px] z-[10] border-[1px] rounded-md px-2 chatInput ">
        <div className="flex w-full h-full chatInput relative">
          <textarea
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter your message"
            className="w-full  outline-none resize-none scroll chatInput"
          />

          <div className="absolute right-3 bottom-3  flex items-center space-x-2  ">
            <span
              onClick={() => ChangeLanguage(lang)}
              className="cursor-pointer bg-yellow-100 w-[50px] h-[50px]  rounded-full  flex items-center justify-center flex-col"
            >
              <ChevronDown />
              <span className="!mt-[-7px]">{lang}</span>
            </span>

            <Mic strokeWidth={0.75} />
            <Paperclip strokeWidth={0.75} />

            <div className=" w-[50px] h-[50px]  rounded-full flex items-center justify-center bg-green-200 pt-[2px]">
              <SendHorizontal strokeWidth={0.75} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInputSection;
