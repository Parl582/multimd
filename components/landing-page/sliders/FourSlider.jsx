"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeader from "../MainHeader";
import AdsUpperContent from "../AdsUpplerContent";
import AdsLowerContent from "../AdsLowerContent";
import Link from "next/link";

const FourSlider = ({ Images }) => {
  const [curr, setCurr] = React.useState(0);
  const prev = () => {
    setCurr((prev) => (prev === 0 ? images.first.length - 1 : prev - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === images.first.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const slides = setInterval(next, 5000);
    return () => clearInterval(slides);
  }, []);

  console.log(curr);

  return (
    <div className="w-full flex flex-col  overflow-hidden bg-[#E3E6E6]/70 px-1 py-2">
      {/* <MainHeader /> */}
      <div className="flex flex-wrap">
        {Images?.slice(0, 4).map((elm) => (
          <Link
            href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
            className=" md:w-1/4 w-1/2 px-2 overflow-hidden   py-1 "
            key={elm.id}
          >
            <div
              className="p-3 bg-white  hover:shadow-lg  cursor-pointer transition-all duration-100 "
              // style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <AdsUpperContent elm={elm.title} />
              <img
                src={images.first[curr]?.img}
                alt=""
                className="w-full  object-contain  md:min-h-[320px] md:max-h-[320px] h-[150px]"
              />
              {/* <AdsLowerContent elm={elm.body} /> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FourSlider;

const images = {
  
  first: [
    {
      img: "https://media.istockphoto.com/id/172255004/photo/a-hand-unplugging-an-orange-cord-from-a-white-outlet.jpg?s=1024x1024&w=is&k=20&c=RlM1ICDO7DTquGfn_y0S35l8WXuJYzqxGfMP69pBMlg=",
    },

    {
      img: "https://rukminim1.flixcart.com/image/828/1242/kzogn0w0/computer/p/m/9/14a-ca0506tu-thin-and-light-laptop-hp-original-imagbmtfbpbkvyqz.jpeg?q=90",
    },
    {
      img: "https://media.istockphoto.com/id/104640741/photo/electrical-socket.jpg?s=1024x1024&w=is&k=20&c=aoUMesV3GC-rkMV3Vs0sv0NCqkMeeQIWU21BJRupDhQ=",
    },
    {
      img: "https://rukminim1.flixcart.com/image/192/240/xif0q/tablet/m/h/d/za6w0222in-za6w0249in-lenovo-original-imagzmkxznzydfba.jpeg?q=60",
    },
  ],
};
