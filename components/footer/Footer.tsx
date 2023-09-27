

"use client";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { footerData } from "./Footerdata";
import BackToTop from './BackToTop'
const Footer = () => {
    

  return (
    <>
          <BackToTop />
      
      <div className="w-full bg-[black] min-h-[300px] ">
        <div className="flex flex-wrap justify-between text-[white]">
          <div className="md:w-1/4 p-4 h-full">
            <h2 className="text-[1.2rem] font-semibold">About</h2>
            <p className="text-justify py-3 text-[#858585]">
              {footerData.about}
            </p>
          </div>
          <div className="md:w-1/4 p-4 h-full">
            <h2 className="text-[1.2rem] font-semibold">Contact</h2>
            <p className="text-justify py-3 text-[#858585] flex flex-col space-y-2">
              <span className="flex items-center space-x-2">
                <span className="material-symbols-outlined">call</span>
                <span>Mobile: </span>
                <span>{footerData.ContactNo}</span>
              </span>
              <span className="flex items-center space-x-2">
                {/* <MailOutlineIcon /> */}
                <span>email: </span>
                <span>{footerData.email} </span>
              </span>
              <span className="flex items-center space-x-2">
                {/* <LocationCityIcon /> */}
                <span>Address: </span>
                <span> {footerData.address} </span>
              </span>
            </p>
          </div>
          <div className="md:w-1/4 w-1/2 p-4 h-full">
            <h2 className="text-[1.2rem] font-semibold">Help</h2>
            <div className="text-justify py-3 text-[#858585]">
              <li>Privacy & Policy </li>
              <li>terms & conditions</li>
            </div>
          </div>
          <div className="md:w-1/4 w-1/2 p-4 h-full">
            <h2 className="text-[1.2rem] font-semibold">Social</h2>
            <div className="text-justify py-3 text-[#858585] space-y-2">
              <li className="flex cursor-pointer ">
                <WhatsAppIcon className="mr-2" />
                WhatsApp
              </li>
              <li className="flex cursor-pointer ">
                <FacebookIcon className="mr-2" />
                Facebook
              </li>
              <li className="flex cursor-pointer ">
                <InstagramIcon className="mr-2" />
                Instagram
              </li>
              <li className="flex cursor-pointer ">
                <TwitterIcon className="mr-2" />
                Twitter
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
