import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageWithText = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)]  ">
      <div className="w-full h-full relative">
        <Image src="/temp.avif" alt="" fill />
        <div className=" w-full h-full relative  inset-0 z-50">
          <div className="w-full h-full absolute border-2 inset-0  p-4 overflow-y-auto overflow-x-hidden">
            <h1 className="font-medium md:text-[1.5rem] text-[1.3rem] text-white">
              {" "}
              header Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat reprehenderit maiores perspiciatis. Reprehenderit
              consequuntur ullam molestias, quo optio architecto quaerat
              quibusdam nesciunt laboriosam facilis obcaecati! Ipsum non quae
              veritatis sunt!{" "}
            </h1>
            {data.map((elm, i) => (
              <li className="flex gap-2 md:items-center md:py-3 py-1" key={i}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    className="bi bi-hand-index-thumb-fill text-white"
                    viewBox="0 0 16 16"
                    // className="rotate-90 mt-[14px] "
                  >
                    <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z" />
                  </svg>
                </span>
                <p className="text-white flex flex-wrap items-center md:gap-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, at!
                  <Link
                    href={"/"}
                    className="text-blue-700  font-semibold hover:underline duration-75 active:text-indigo-600"
                  >
                    Link
                  </Link>
                </p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;

const data = [
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
];
