"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeader from "../MainHeader";
import AdsUpperContent from "../AdsUpplerContent";
import AdsLowerContent from "../AdsLowerContent";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const SingleSlider = ({ Images }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full  border-[1px] flex flex-col  overflow-hidden bg-[#E3E6E6]/70 px-3 py-1 ">
      {/* <MainHeader /> */}
      <Slider {...settings}>
        {Images?.slice(0, 2).map((elm) => (
          <Link
            href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
            className="w-full  overflow-hidden "
            key={elm.id}
          >
            <div className=" bg-white border-[4px] hover:shadow-lg md:h-max h-[200px]  object-contain cursor-pointer transition-all duration-100 w-full relative">
              {/* <AdsUpperContent elm={elm.title} /> */}
              {/* <AspectRatio > */}
              <img
                src={
                  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/da2adeafd09cccc8.jpg?q=20"
                }
                alt="Image"
                className="h-full w-full md:object-contain object-cover"
              />
              {/* <img
                  src={
                    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/da2adeafd09cccc8.jpg?q=20"
                  }
                  alt=""
                  className="w-full object-cover md:min-h-[280px] md:max-h-[280px] h-[190px]  h-full aspect-auto  "
                /> */}
              {/* </AspectRatio> */}

              {/* <AdsLowerContent elm={elm.body} /> */}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SingleSlider;
