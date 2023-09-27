import React from "react";

const JobLeftside = () => {
  return (
    <>
      <div className="w-full p-1  border-[1.5px] shadow-sm">
        {/* company details  */}

        <div className="w-full py-2  flex justify-between items-start flex-wrap ">
          <div className="flex ">
            <div className="w-[100px] h-[100px]">
              <img
                src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
                alt=""
                className="w-full h-full object-cover border-[1.5px] rounded-md overflow-hidden"
              />
            </div>
            <h1 className="md:text-[1.4rem] text-[1.2rem] font-bold md:pl-3 ">
              {" "}
              Company name{" "}
            </h1>
          </div>

          {/* //share and flow button  */}
          <div className=" flex space-x-2 p-2 md:w-auto  w-full  md:justify-start justify-end">
            <button className="text-[1rem] font-semibold">Share</button>
            <button className="text-[black] border py-1 px-3 rounded-md">
              Follow
            </button>
          </div>
        </div>

        {/* company details  */}

        {/* post details  */}
        <div className="w-full flex justify-between flex-wrap">
          <div className="">
            <h2 className="md:text-[1.4rem] text-[black] font-bold ">
              {" "}
              Front end developer{" "}
            </h2>
            <span className="text-[1.3rem] font-semibold text-[#363636cc] leading-3">
              {" "}
              12L - 15L{" "}
            </span>
          </div>

          <div className=" flex items-center space-x-3">
            <button className="text-[1rem] font-semibold w-[110px] text-center px-3 py-2 text-[black] bg-[] border rounded-sm">
              Save
            </button>
            <button className="text-[1rem] font-semibold w-[110px] text-center px-3 py-2 text-[white] bg-[#ff10f0] rounded-sm">
              Apply
            </button>
          </div>
        </div>

        {/* post about  */}

        <div className="w-full">
          <h2 className="text-[1.5rem] font-semibold py-3">About</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            molestias perspiciatis accusamus, alias asperiores laudantium
            voluptas suscipit ad facilis quis! Voluptatibus aspernatur aperiam
            iusto. Quos consequatur doloribus vitae recusandae quidem
            praesentium saepe, sunt magnam eos iste delectus dignissimos?
            Facilis.
          </p>
        </div>

        {/* key and responsibility  */}
        <div className="w-full">
          <h2 className="text-[1.5rem] font-semibold py-3">
            {" "}
            Key and Responsibility{" "}
          </h2>

          <ul className="md:pl-4 md:space-y-2">
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
          </ul>
        </div>

        {/* your skills  */}

        <div className="w-full">
          <h2 className="text-[1.5rem] font-semibold py-3">Your Skills</h2>

          <ul className="md:pl-4 md:space-y-2">
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
            <li className="flex">
              <span class="material-symbols-outlined">arrow_right</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui omnis temporibus expedita numquam. Ab dolor rerum molestias
                porro numquam!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobLeftside;
