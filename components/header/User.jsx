"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// import "./userMenu.scss";

const user = false;

const UserProfilePicture = () => {
  const navigate = useRouter();

  return (
    <>
      {user ? (
        <>
          <div className="max-w-[130px] h-full border-r-[1px] border-l-[1px] flex items-center justify-center px-1 cursor-pointer relative hoverShowUSerMenu">
            <div className="flex flex-col justify-center items-center p-2">
              {/* <h4 className="text-[1.4rem] font-semibold">Dear</h4> */}
              <img
                title="Profile"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80g"
                alt=""
                className="w-[100px] h-[100px] rounded-full p-[2px] "
                onClick={() => navigate.push("/user-profile")}
              />
            </div>

            <div className="w-[220px] p-3 rounded-sm absolute top-[100%] z-[200001] right-0 text-[black] bg-[white] hoverShowUSerMenuChild">
              <ul className="w-full space-y-2">
                <li className="py-1 border-b-2 text-[black] cursor-pointer">
                  <div className="flex flex-col px-2">
                    <h3 className="text-[1.1rem] font-semibold">UserName</h3>{" "}
                    <h4 className="text-[1rem] text-[#353535] mt-[-5px]">
                      {" "}
                      text@gmail.com{" "}
                    </h4>
                  </div>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="text-[1rem] hover:text-[1.1rem] px-2 text-[#353535] duration-200 hover:text-[black] hover:font-semibold">
                    order
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <span className="text-[1rem] hover:text-[1.1rem] px-2 text-[#353535] duration-200 hover:text-[black] hover:font-semibold">
                    Address
                  </span>
                </li>
                <li className="w-full cursor-pointer">
                  <button className="text-[1rem] hover:text-[1.1rem] px-2 text-[#353535] duration-200 hover:text-[black] hover:font-semibold">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[200px] px-2  border-r-[1px] border-l-[1px] flex flex-col justify-between h-full gap-1">
          <Link
            href={"/seller-login"}
            className="w-full  h-1/2 border-2 flex items-center justify-center text-xl text-white font-semibold"
          >
            <h4 className="text-[1.2rem] font-semibold">Seller Login</h4>

            <ChevronDown />
          </Link>
          <Link
            href={"/login"}
            className="w-full  h-1/2 border-2 flex items-center justify-center text-xl text-white font-semibold"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default UserProfilePicture;
