"use client";
import { Eye, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import React, { useEffect, useState } from "react";

const AllTickets = ({ NoNeedBtn, link, tempImgs }) => {
  const navigate = useRouter();
  const status = "open";
  const [popUp, setPopUp] = useState(false);

  //   const location = useLocation();

  // useEffect(() => {
  //   if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //   } else {
  //     console.info("This page is not reloaded");
  //   }
  // }, []);

  //   console.log(location);

  //   useEffect(() => {
  //     if (location.state) {
  //       setPopUp(true);
  //     }
  //   }, []);

  // const useMemo(() => location.state = true, [location.state])

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPopUp(false);
  //       location.state = false;
  //     }, 3000);
  //   }, []);

  return (
    <>
      <div className="w-full py-4 min-h-[500px] md:px-3 shadow-md  ">
        {popUp && (
          <div className="w-full  border bg-green-500 text-white text-center">
            <p className="font-semibold text-[1.3rem]  py-3">
              {" "}
              Your Ticket Created Successfully{" "}
            </p>
          </div>
        )}

        <table className="w-full  table_row border-[1.2px] ">
          <tr className="md:text-[1.1rem] text-[0.9rem] bg-[violet] text-start">
            <th className="border">Service</th>

            <th className="border"> Ticket No</th>

            <th className="border"> Raised On </th>
            <th className="border"> Subject </th>
            <th className="border"> Product Name </th>
            <th className="border"> Status </th>

            <th className="border"> Action </th>
          </tr>
          {data?.map((elm) => (
            <tr
              border
              className="text-center  border-[1.1px] py-2 md:text-[1rem] h-[40px] text-[0.9rem]"
              key={elm}
            >
              <td className="border text-xs md:text-sm"> Books </td>
              <td className="border text-xs md:text-sm"> 123009 </td>
              <td className="border text-xs md:text-sm">26/04/2023 04:30 PM</td>

              <td className=" md:max-w-[200px] max-w-[75px] border">
                <p className="md:truncate line-clamp-2 w-[100%] md:px-1 text-xs md:text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt autem aspernatur est blanditiis minima! Quaerat totam
                  facere, natus neque consequatur sed inventore alias, possimus
                  rerum dignissimos recusandae id in sequi.
                </p>
              </td>
              <td className=" md:max-w-[200px] max-w-[75px] border">
                <p className="md:truncate line-clamp-2 w-[100%] text-xs md:text-sm md:px-1 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt autem aspernatur est blanditiis minima! Quaerat totam
                  facere, natus neque consequatur sed inventore alias, possimus
                  rerum dignissimos recusandae id in sequi.
                </p>
              </td>
              <td className="border">
                <span
                  className={`${
                    status === "open" ? "text-green-600" : "text-red-600"
                  } font-bold `}
                >
                  {status === "open" ? "Open" : "Close"}
                </span>
              </td>
              <td className="border">
                <div className="flex gap-3 flex-wrap items-center justify-center">
                  <button
                    className="text-[1rem] font-semibold text-[#267ef9]  flex gap-1"
                    onClick={() => navigate.push(`/allticket/${elm}`)}
                  >
                    <span className="md:block hidden"> View</span>
                    <Eye />
                  </button>
                  <button className="text-[1rem] font-semibold text-[#267ef9]  flex gap-1">
                    <span className="md:block hidden"> close</span>
                    <X />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllTickets;

const data = ["1", "1", "4"];
