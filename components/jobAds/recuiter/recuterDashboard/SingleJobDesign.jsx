import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleJobDesign = ({ elm }) => {
  const [openMore, setMore] = useState(false);
  const navigate = useNavigate();

  const HandleMore = (data) => {
    if (data === "edit") {
      // navigateto edit page
      navigate("/edit-post-job");

      setMore(false);
      return;
    } else {
      // delete Item Function Or Api Calls
      setMore(false);
    }
  };
  return (
    <>
      <div className="md:w-1/3  w-full  min-h-[250px]  p-1 ">
        <div className=" border-[1.2px] w-full  cursor-pointer p-2  hover:shadow-md duration-300">
          <div className="w-full flex   justify-between relative">
            <h1 className="font-semibold text-[1.2rem] text-black w-[75%] truncate relative  py-1">
              <span onClick={() => navigate("/view-candidate")}>
                Job Title Job Title Job Title Job Title Job Title Job Title Job
                Title Job Title
              </span>

              <span
                className={`px-1 text-center text-[white] absolute right-[-3px] top-[-1px] text-[0.7rem]  ${
                  elm === "2" ? "bg-red-500" : "bg-green-400"
                }`}
              >
                {elm === "2" ? "de-active" : "Active"}
              </span>
            </h1>

            <button onClick={() => setMore((prev) => !prev)}>
              <span className="material-symbols-outlined font-bold">
                more_vert
              </span>
            </button>

            <div
              className={`shadow-md absolute right-[18px] top-1 bg-[white]  ${
                openMore ? "opacity-100 visible" : "invisible opacity-0"
              } duration-150`}
            >
              <ul>
                <li
                  className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                  onClick={() => HandleMore("edit")}
                >
                  Edit
                </li>
                <li
                  className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                  onClick={() => HandleMore("edit")}
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-[1.1rem] text-[#262626] uppercase w-full truncate">
            Company Name
          </h2>
          <div className="text-[0.8rem] text-[#158aed] uppercase w-full  flex justify-between py-1">
            <span> Post Date : 12-12-2022 </span>
            <span> full time </span>
          </div>

          <span className="text-[0.9rem] font-bold ">₹12000 - ₹15000</span>
          <p className="w-full text-[1rem] text-[#505050] leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae rem
            iure soluta dolorem magnam sunt dicta odio at quo repudiandae.
          </p>
          <div className="text-[0.8rem] py-1 font-semibold text-[#258aed] flex justify-between">
            <span>2 Opening </span>
            <div className="uppercase flex gap-1 items-center">
              <span className="material-symbols-outlined">
                {elm === "2" ? "apartment" : "home"}
              </span>
              <span> {elm === "2" ? "work from Office" : "Remote"} </span>
            </div>
          </div>
          <div className="flex justify-between ">
            <p className="uppercase flex items-center gap-2">
              <span className="material-symbols-outlined">location_on</span>
              Noida Sector 2 200110
            </p>

            <button
              className="relative px-3 py-1 border-[1.2px] rounded-[50px] bg-[#158aed] text-[#fff] "
              onClick={() => navigate("/view-candidate")}
            >
              Response
              <span className="  right-1 font-semibold text-[1.1rem] pl-2">
                120000
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJobDesign;
