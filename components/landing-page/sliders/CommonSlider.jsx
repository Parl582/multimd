"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeader from "../MainHeader";
import AdsUpperContent from "../AdsUpplerContent";
import AdsLowerContent from "../AdsLowerContent";
import Link from "next/link";

const TwoImages = ({
  Images,
  smDeviceCount,
  lgDeviceCount,
  midDeviceCount,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: lgDeviceCount,
    slidesToScroll: lgDeviceCount,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lgDeviceCount,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: midDeviceCount,
          slidesToScroll: midDeviceCount,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: smDeviceCount,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full  border-[1px] flex flex-col  overflow-hidden text-[white] p-1 ">
      {/* <MainHeader /> */}
      <Slider {...settings}>
        {Images?.slice(0, 10).map((elm) => (
          <Link
            href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
            className="w-full   overflow-hidden  px-1 py-1 "
            key={elm.id}
          >
            <div className="md:min-h-[480px] md:max-h-[480px] bg-white border-[1px] hover:shadow-lg  cursor-pointer transition-all duration-100 ">
              <AdsUpperContent elm={elm.title} />
              <img
                src={
                  "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                }
                alt=""
                className="w-full h-full object-cover  min-h-[340px] max-h-[340px]"
              />

              <AdsLowerContent elm={elm.body} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default TwoImages;
