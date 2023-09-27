"use client";
import React from "react";
import SinglePropImageSection from "./SinglePropImage";
import DetailsLeftSide from "./DetailsLeftSide";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

let paid = false;

const DetailsOfProperties = () => {
  const navigate = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full lg:px-[100px] md:px-[80px] px-[10px]">
        <div className="w-full ">
          {/* header */}

          <header className="w-full flex justify-between md:py-4 py-2">
            <div className="">
              <button
                className="text-[#efa4ea]"
                onClick={() => navigate.back()}
              >
                Back
              </button>
              <h2 className="text-[1.2rem] font-semibold">
                Details of the Properties
              </h2>
            </div>
          </header>

          <div className="w-full md:py-3 py-1 flex justify-between flex-wrap items-start">
            <SinglePropImageSection data={data} />

            <div className="w-full md:w-[40%] p-1 ">
              <DetailsLeftSide paid={paid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsOfProperties;

const data = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg",
  },

  {
    id: "1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
  },
  {
    id: "1",
    img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
  },
  {
    id: "1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
  },
  {
    id: "1",
    img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
  },
];
