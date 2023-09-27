"use client";
import React, { useEffect, useState } from "react";

const SelectBox = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  const handleChange = (e, data) => {
    setData(e.target.value);
    if (e.target.value) {
      setOpen(true);
    }
  };

  const handleClick = (data) => {
    setData(data);
    setOpen(false);
  };
  useEffect(() => {
    if (!data) {
      setOpen(false);
    }

    console.log(data);
  }, [data]);
  return (
    <div className="w-full relative">
      <input
        type="text"
        value={data}
        className="w-full py-2 outline-none border-2 px-2"
        onChange={handleChange}
      />
      {open && (
        <div className="w-full absolute h-max  top-[100%] border-2 bg-white z-50">
          {Data.filter((elm) => elm.name.startsWith(data.toLowerCase())).map(
            (elm) => (
              <li
                className="cursor-pointer list-none px-2 w-full hover:bg-[#ccc] py-1"
                key={elm.id}
                onClick={() => handleClick(elm.name)}
              >
                {" "}
                {elm.name}{" "}
              </li>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SelectBox;

const Data = [
  {
    id: 1,
    name: "aaa",
  },
  {
    id: 2,
    name: "bbbba",
  },
  {
    id: 13,
    name: "cccc",
  },
  {
    id: 14,
    name: "ddffa",
  },
  {
    id: 15,
    name: "kkkaa",
  },
];
