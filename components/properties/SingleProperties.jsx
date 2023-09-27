import {
  Clipboard,
  IndianRupee,
  Locate,
  LocateFixed,
  RectangleHorizontal,
  User2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import ContactDetails from "./contact-pop-up/ContactDetails";

let imgs =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
const SingleProperties = ({ needEdit, id }) => {
  const navigate = useRouter();

  const deleteProp = () => {
    window.confirm("Confirm You want to Delete the item");
  };
  return (
    <>
      <div
        className="w-full md:min-h-[160px] h-auto border-[1px] hover:shadow-lg shadow-md bg-white hover:border-[1.2px] hover:border-[black] 
      duration-200 ease-in relative  border-2 border-red-700"
      >
        <div className="w-full flex items-center justify-center  py-1">
          <p className="text-[1.2rem] font-bold text-[#158aed]">
            {" "}
            This Plot is for sale{" "}
          </p>
        </div>
        <div className="flex space-x-2 h-full p-1 w-full items-start flex-wrap md:flex-nowrap">
          <img
            src={imgs}
            alt=""
            className="md:w-[35%] w-full h-full object-cover aspect-auto "
          />
          <div className="w-full py-2 ">
            <div className="flex w-full items-center space-x-1">
              <User2 />

              <h1 className="uppercase font-semibold leading-tight truncate ">
                {" "}
                Seller Name{" "}
              </h1>
            </div>

            <div className="flex items-center gap-2 py-1 text-[0.9rem]">
              <LocateFixed />
              <span> Assam Guwagati Road , Silapatha </span>
            </div>
            <div className="flex items-center gap-2 py-1 text-[0.9rem]">
              <Clipboard />
              <span> TS Code : 872626</span>
            </div>

            <div className="flex gap-4 w-full justify-between flex-wrap">
              <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                <IndianRupee />
                <span className="text-[1rem] font-semibold"> 20,00000 </span>
              </div>
              <div className="flex items-start gap-2 pb-1 text-[0.9rem] pr-3 font-semibold">
                <Locate />
                <span className="text-[1rem] "> Area : 0.00008 hectares </span>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                <RectangleHorizontal />
                <span className="text-[1rem] "> Measles : 1234 </span>
              </div>
              {/* <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                <span className="material-symbols-outlined">
                  crop_landscape
                </span>
                <span className="text-[1rem] ">  : 1234 </span>
              </div> */}
            </div>

            <label className="text-[1rem] font-semibold">Description </label>
            <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
              <span className="font-light text-[0.8rem] onlyLimitedLine">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                delectus laboriosam corrupti a optio, porro deserunt totam illum
                perspiciatis ea iusto commodi dolorum pariatur quod sunt facere
                corporis quaerat! Ipsum.{" "}
              </span>
            </div>

            <div className="w-full gap-2 flex">
              <ContactDetails />
              {/* <button className="text-black rounded-md w-1/3 py-[5px] bg-green-200 text-[0.8rem] font-semibold">
                {" "}
                Contact to Broker
                <span ca> </span>
              </button> */}

              <button
                className="text-white rounded-md w-1/3 py-[5px] bg-[#158aed] text-[0.8rem]  font-semibold
                 hover:bg-[white] hover:text-[#158aed] hover:border-[1.1px] hover:border-[#158aed]
                border-[1.1px] border-transparent duration-200 ease-in-out
                "
                onClick={() =>
                  navigate.push(`/properties/single-properties/${id}`)
                }
              >
                {" "}
                View
                <span ca> </span>
              </button>
            </div>
          </div>
        </div>

        {/* //edit and delete  */}
        {needEdit && (
          <div className="w-full absolute right-0 top-1 justify-end flex gap-1 items-center">
            <button>
              <span
                className="material-symbols-outlined text-[#158e]"
                title="edit"
              >
                edit_square
              </span>
            </button>
            <button onClick={deleteProp}>
              <span
                className="material-symbols-outlined text-red-600 mt-1 "
                title="Delete"
              >
                delete
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProperties;
