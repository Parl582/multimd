"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeader from "../MainHeader";
import AdsUpperContent from "../AdsUpplerContent";
import AdsLowerContent from "../AdsLowerContent";
import Link from "next/link";

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
        {Images?.slice(0, 10).map((elm) => (
          <Link
            href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
            className="w-full  overflow-hidden "
            key={elm.id}
          >
            <div className=" bg-white border-[1px] hover:shadow-lg  cursor-pointer transition-all duration-100 ">
              {/* <AdsUpperContent elm={elm.title} /> */}
              <img
                src={
                  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/da2adeafd09cccc8.jpg?q=20"
                }
                alt=""
                className="w-full object-cover md:min-h-[280px] md:max-h-[280px] h-[190px]  h-full aspect-auto  "
              />

              {/* <AdsLowerContent elm={elm.body} /> */}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SingleSlider;
