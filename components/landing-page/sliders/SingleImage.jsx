import Link from "next/link";
import React, { useEffect, useState } from "react";
import AdsUpperContent from "../AdsUpplerContent";

const SingleImage = ({ elm, images }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const incr = setInterval(() => {
      if (num < images.first?.length) {
        setNum((prev) => prev + 1);
      } else {
        if (num >= 0) {
          setNum((prev) => prev - 1);
        }
      }
    }, 5000);

    return () => clearInterval(incr);
  }, []);

  console.log(num);
  return (
    <div>
      <Link
        href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
        className="px-1 md:w-1/4 w-1/2 overflow-hidden  md:px-3  py-1 "
        key={elm.id}
      >
        <div className="p-2 bg-white  hover:shadow-lg  cursor-pointer transition-all duration-100 border-gray-300 border-[1px] ">
          <AdsUpperContent elm={elm.title} />
          <img
            src={images.first[num]?.img}
            alt=""
            className="w-full  object-cover  md:min-h-[320px] md:max-h-[320px] h-[150px]"
          />

          {/* <AdsLowerContent elm={elm.body} /> */}
        </div>
      </Link>
    </div>
  );
};

export default SingleImage;
