import React from "react";

const JobAdsPrice = () => {
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-wrap">
          {data.map((elm,i) => (
            <div className="md:w-1/3 w-full  h-[500px] p-2 " key={i} >
              <div className="w-full hover:shadow-2xl shadow-sm rounded-sm border-[1.1px] duration-200 h-full p-3 flex flex-col justify-between">
                <ul className="space-y-3 ">
                  {/* // header  */}

                  <div className="w-full pb-4">
                    <h2 className="text-[2.1rem] font-light ">

                      {elm.mainName}
                    </h2>
                    <p className="text-[1.2rem] font-semibold">

                      INR {elm.price}
                    </p>
                  </div>
                  {elm.planIncludes.map((elm) => (
                    <li
                      className="cursor-pointer space-x-[6px] flex items-center "
                      key={elm.id}
                    >
                      <span className="material-symbols-outlined text-green-500">
                        arrow_circle_right
                      </span>
                      <span className="text-[0.9rem] leading-6">

                        {elm.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="uppercase text-[1.1rem] bg-[#158aed] border-[1.2px] text-[white] w-full py-2 hover:bg-[#fff] hover:border-[black] hover:text-black duration-200

                rounded-[50px]
                "
                >

                  Buy Plan Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobAdsPrice;

const data = [
  {
    mainName: "Free",
    price: "2300",
    planIncludes: [
      { id: crypto.randomUUID(), title: "Valid for 365 days" },

      { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

      { id: crypto.randomUUID(), title: "Unlimited jobs live" },
      { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
      { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
    ],
  },
  {
    mainName: "Gold",
    price: "2300",
    planIncludes: [
      { id: crypto.randomUUID(), title: "Valid for 365 days" },

      { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

      { id: crypto.randomUUID(), title: "Unlimited jobs live" },
      { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
      { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
    ],
  },
  {
    mainName: "Platinum ",
    price: "2300",
    planIncludes: [
      { id: crypto.randomUUID(), title: "Valid for 365 days" },

      { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

      { id: crypto.randomUUID(), title: "Unlimited jobs live" },
      { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
      { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
    ],
  },
];
