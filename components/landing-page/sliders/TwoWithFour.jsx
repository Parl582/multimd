import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TwoWithFour = () => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap bg-[#E3E6E6] border-2 overflow-hidden ">
      {/* parent element  */}
      {[1, 2, 3].map((elm) => (
        <div className="md:w-1/3 w-full px-2" key={elm}>
          <div className="w-full bg-white my-2   ">
            <div className="w-full flex justify-between items-center px-3 py-4">
              <h1 className=" font-semibold md:text-lg text-base ">
                {" "}
                Hello Everyone{" "}
              </h1>
              <ChevronRight strokeWidth={2.5} className="cursor-pointer " />
            </div>
            <div className="w-full flex flex-wrap ">
              {FOur.map((elm) => (
                <div className="w-1/2 p-2 " key={elm.img}>
                  <div className="w-full h-full p-2 rounded-[3px] shadow-sm border-[1px] hover:shadow-md duration-150  cursor-pointer">
                    <div className=" md:h-[200px] h-[180px] flex items-center object-contain justify-center relative ">
                      <Image
                        src={elm.img}
                        fill
                        alt=""
                        className="object-contain"
                      />
                      {/**/}
                    </div>
                    <h1 className="truncate w-full pt-2 text-sm leading-relaxed font-normal">
                      {" "}
                      {elm.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoWithFour;

const FOur = [
  {
    img: " https://rukminim1.flixcart.com/image/828/1242/kzogn0w0/computer/p/m/9/14a-ca0506tu-thin-and-light-laptop-hp-original-imagbmtfbpbkvyqz.jpeg?q=90 ",
    name: "HP 360 Intel Celeron Quad Core N4020 - (4 GB/64 GB EMMC Storage/Chrome OS) 14a-ca0504TU Chromebook  (14 Inch, Forest Teal, 1.49 Kg)",
  },
  {
    img: "https://rukminim1.flixcart.com/image/788/480/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=60",
    name: "APPLE Iphone 15 (Black, 128 GB)",
  },
  {
    img: "https://m.media-amazon.com/images/I/41QoAqu6g4L._AC_SY400_.jpg",
    name : "Realme x11 5G "
  },
  {
    img: "https://rukminim1.flixcart.com/image/600/400/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=20",
    name : "Mobile 7780"
  },
];
