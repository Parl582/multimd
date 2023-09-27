import React from "react";

const FileAttach = ({ addImage, setUpdateImage, AddMoreImages, Remove }) => {
  return (
    <>
      {addImage?.map((elm, index) => (
        <React.Fragment key={index}>
          <div className="md:w-[80%] w-full  p-1 ">
            <div className="text-sm md:text-[1.2rem] font-bold">
              Attach a File
            </div>
            <div className="flex justify-between w-full h-[50px] items-center ">
              <div className="w-[80%]">
                <div className="w-full border-[1.6px] rounded-sm flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full h-full px-4 "
                    placeholder="Subject"
                    onChange={(e) => setUpdateImage(e.target.files[0])}
                  />

                  <div className="w-[80px] h-[50px] border-[1px]">
                    <img src="" alt="" className="w-fill h-full object-cover" />
                  </div>
                </div>
                {/* <span className="text-[#4c4c4c] text-[0.8rem]">
                          Only JPG, JPEG, PNG file accepted
                        </span> */}
              </div>
              <div className="w-[20%]   h-full flex justify-end">
                <button
                  className="px-3 w-[50%] h-full  bg-[#ff10f0] text-[#fff] md:block hidden text-base"
                  onClick={AddMoreImages}
                >
                  Add
                </button>
                <button
                  className="md:px-3 px-[4px] md:w-[50%] w-auto h-full  bg-[#ff10f0] text-[#fff] md:hidden flex items-center justify-center"
                  onClick={AddMoreImages}
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button
                  className="px-3 w-[50%]  h-full bg-yellow-100 text-[#000] md:block hidden text-sm"
                  onClick={() => Remove(index)}
                >
                  Remove
                </button>
                <button
                  className="px-3 md:w-[50%] w-auto   h-full bg-yellow-100 text-[#000] md:hidden flex items-center justify-center "
                  onClick={() => Remove(index)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default FileAttach;
