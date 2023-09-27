import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect } from "react";

import { useState } from "react";

const SinglePropImageSection = ({ data, tempImg }) => {
  const [image, setImage] = useState(tempImg);

  const [num, setNum] = useState(0);
  useEffect(() => {
    const incre = setInterval(() => {
      if (num <= 5 && num !== 0) {
        setNum((prev) => prev - 1);
      } else {
        setNum((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(incre);
    };
  }, []);

  console.log(num);

  console.log("length ===>", data.length, num);
  return (
    <>
      <div className="w-full md:w-[60%] p-1 md:h-[600px] h-[350px] ">
        <div className="w-full   h-full rounded-sm flex flex-col gap-1 ">
          <div className="w-full h-[80%] bg-black  border-[1px] relative">
            <img
              src={data[num]?.img}
              alt=""
              className="w-full h-full object-contain "
            />

            <div className="absolute top-1 right-2 bg-white text-black">
              <span className="uppercase md:text-lg text-base px-2">
                TS Code : ts2345i
              </span>
            </div>
          </div>
          <div className="w-full flex overflow-x-auto overflow-y-hidden h-[20%] gap-1 border-[1px] border-black relative">
            <div className="absolute left-[0px] top-0 bottom-0 flex items-center justify-center ">
              <ChevronLeft size={28} />
            </div>
            {data.map((elm, i) => (
              <div className="w-1/5 h-full  min-w-1/5 " key={elm.id}>
                <img
                  src={elm?.img}
                  alt=""
                  className="w-full h-full object-cover border-[1px] border-transparent hover:border-black"
                  onClick={() => setNum(i)}
                />
              </div>
            ))}
            <div className="absolute right-[5px] top-0 bottom-0 flex items-center justify-center ">
              <ChevronRight size={28} />
            </div>
          </div>

          <div className="w-full flex items-center justify-center py-1">
            {num}/{data.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePropImageSection;
