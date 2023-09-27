import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SelectBox from './SelectBox'
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const UpperInput = () => {
  const [product, setProduct] = useState();
  const [service, setService] = useState();
  const [inputs, setInput] = useState(false);
  const [sinputs, setSinput] = useState(false);


  useEffect(() => {
    if (product === "other") {
      setInput(true);
    }
  }, [product]);
  useEffect(() => {
    if (service === "other") {
      setSinput(true);
    }
  }, [service]);

  console.log(product);
  // const {
  //   transcript,
  //   listening,
  //   // resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();
  return (
    <>
      <div className="md:w-[80%] w-full flex flex-wrap items-center py-2 ">
        <div className="md:w-1/2 w-full px-1">
          <div className="text-sm md:text-[1.2rem] font-bold">
            Additional Phone number
          </div>
          <input
            type="text"
            className="w-full border-[1.6px] rounded-sm py-2 px-3"
          />
        </div>
        <div className="md:w-1/2 w-full px-1">
          <div className="text-sm md:text-[1.2rem] font-bold"> Priority </div>

          <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
            <option value=""> Select Priority </option>
            <option value=""> Low </option>
            <option value=""> High </option>
            {/* <option value=""> Option 1 </option> */}
          </select>
        </div>
      </div>
      <div className="md:w-[80%] w-full flex flex-wrap items-center py-2 ">
        <div className="md:w-1/2 w-full px-1">
          <div className="text-sm md:text-[1.2rem] font-bold"> Help Topic </div>

          <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
            <option value=""> Select Priority </option>
            <option value=""> Low </option>
            <option value=""> High </option>
            {/* <option value=""> Option 1 </option> */}
          </select>
        </div>
        <div className="md:w-1/2 w-full px-1">
          <div className="text-sm md:text-[1.2rem] font-bold">
            Choose your Product
          </div>

          {inputs ? (
            <input
              type="text"
              placeholder="Please Enter Product  Name"
              className="w-full py-2 px-3 border-[1.6px] rounded-sm"
            />
          ) : (
            <select
              className="w-full py-2 px-3 border-[1.6px] rounded-sm"
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value=""> Select Product </option>
              <option value=""> Mobile </option>
              <option value=""> Book </option>
              <option value="other"> Others </option>
              {/* <option value=""> Option 1 </option> */}
            </select>
          )}
        </div>
      </div>

      <div className="md:w-[80%] w-full flex flex-wrap items-center py-2 ">
        {/* <div className="md:w-1/2 w-full px-1">
          <div className="text-[1.2rem] font-bold"> Select Product </div>

          <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
            <option value=""> Select Product </option>
            <option value=""> Mobile </option>
            <option value=""> Book </option>
            <option value=""> Others </option>
            
          </select> */}
        {/* </div> */}
        <div className="md:w-1/2 w-full px-1">
          <div className="text-sm md:text-[1.2rem] font-bold">
            Select Service{" "}
          </div>

          {sinputs ? (
            <input
              type="text"
              placeholder="Please Enter Service Name"
              className="w-full py-2 px-3 border-[1.6px] rounded-sm"
            />
          ) : (
            // <select
            //   className="w-full py-2 px-3 border-[1.6px] rounded-sm"
            //   onChange={(e) => setService(e.target.value)}
            // >
            //   <option value=""> Select Service </option>
            //   <option value=""> Hosting </option>
            //   <option value=""> Water </option>
            //   <option value=""> Transport </option>
            //   <option value="other"> Other </option>
            //   {/* <option value=""> Option 1 </option> */}
              // </select>
              <SelectBox/>
          )}
        </div>
      </div>

      {/* subject  */}
      <div className="md:w-[80%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold"> Subject </div>
        <div className="w-full border-[1.6px] rounded-sm relative">
          <input
            type="text"
            className="w-full py-3 px-4"
            placeholder="Subject"
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

export default UpperInput;
