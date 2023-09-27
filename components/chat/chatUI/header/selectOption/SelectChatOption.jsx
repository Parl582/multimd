import { ChevronDown } from "lucide-react";
import React from "react";

const SelectChatOption = ({ setName, name, setClick, click }) => {
  return (
    <>
      <div className="md:w-1/2 w-[40%]  flex  justify-end">
        {/* main relative div for Select dropdown  */}
        <div className=" relative flex justify-end md:w-[70%] w-full ">
          <div className="w-full rounded-full !overflow-hidden  shadow-md ">
            {/* input Field for select and Search  */}
            <div
              className="w-full flex items-center bg-[white] px-4 "
              onClick={() => setClick((prev) => !prev)}
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Select an option"
                className="w-full px-3 md:py-3 py-[3px] outline-none"
              />

              <ChevronDown onClick={() => setClick((prev) => !prev)} />
            </div>

            {/* onClick open this div and you can select option here  */}
            {click && (
              <div className="w-full top-[103%] overflow-hidden rounded-sm  max-h-[300px] bg-[white] absolute !z-[9999px] overflow-y-auto ">
                {/* filter the main API data(now Static data) with start with character */}
                {data
                  .filter((item) => item.label.toLowerCase().startsWith(name))
                  .map((elm) => (
                    <li
                      className="w-full p-3 cursor-pointer hover:bg-[#e2e2e2] list-none"
                      onClick={() => setName(elm.label)}
                    >
                      {elm.label}
                    </li>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectChatOption;

const data = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  {
    code: "AG",
    label: "B and Barbuda",
    phone: "1-268",
  },
];
