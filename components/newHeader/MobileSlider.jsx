import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { user } from "@/dummyData";

const MobileSlider = ({ clicked, setMenu }) => {
  console.log(clicked);
  return (
    <div
      className={`   ${
        clicked ? "w-full opacity-100" : "opacity-0 w-0 "
      } fixed inset-0 bg-white  h-screen z-[9999] duration-150 bg-[rgba(0,0,0,0.2)]`}
      onClick={() => setMenu((prev) => !prev)}
    >
      <div
        className="w-[80%] bg-white h-full flex flex-col  "
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /><span clas> Chat </span>  
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
        <Link
          href={`/chat`}
          className="flex gap-2 w-full cursor-pointer px-3 py-1 "
        >
          {" "}
          <MessageCircle strokeWidth={1.5} /> Chat{" "}
        </Link>
      </div>
    </div>
  );
};

export default MobileSlider;
