import React from "react";

const LowerMenu = () => {
  return (
    <>
      <div className="w-full px-2 md:flex overflow-x-auto bg-white border-2 border-red-500 flex-nowrap h-[60px]">
        {data.map((elm) => (
          <div className="flex flex-grow flex-1 py-2 border-2 px-1" key={elm.id}>
            properties
          </div>
        ))}
      </div>
    </>
  );
};

export default LowerMenu;

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 13,
  },
  {
    id: 13,
  },
  {
    id: 13,
  },
  {
    id: 13,
  },
  {
    id: 13,
  },
];
