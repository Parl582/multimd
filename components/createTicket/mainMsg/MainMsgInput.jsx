import React, { useRef } from "react";
import JoditEditor from "jodit-react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
const config = {
  readonly: false,
  placeholder: "Enter your message",
  buttons: ["bold", "italic", "underline", "link"],
};

const MainMsgInput = ({ name, content, setContent }) => {
  // const {
  //   transcript,
  //   listening,
  //   // resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();
  //text editor
  const editor = useRef(null);

  return (
    <>
      <div className="md:w-[80%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold"> {name} </div>
        <div className="w-full border-[1.6px] rounded-sm relative">
          {/* //text editor  */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />

          {/* {browserSupportsSpeechRecognition ? (
            listening ? (
              <span className="absolute right-1 bottom-2 z-[40]">
                <span className="material-symbols-outlined">mic</span>
              </span>
            ) : (
              <span
                className="absolute right-1 bottom-2 z-[40]"
                onClick={SpeechRecognition.startListening}
              >
                <span className="material-symbols-outlined">mic</span>
              </span>
            )
          ) : (
            ""
          )} */}
        </div>
      </div>
    </>
  );
};

export default MainMsgInput;
