import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptch = ({ onChange }) => {
  return (
    <>
      <div className="md:w-[80%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold">Capture</div>
        <div className="w-full py-2 rounded-sm">
          <ReCAPTCHA
            sitekey="6LcpfWAlAAAAAM5P6P1Rw-r1HGRjYSuamZ8XOJr7"
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default ReCaptch;
