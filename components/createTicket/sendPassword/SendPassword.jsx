import React from "react";

const SendPassword = ({ setsendPassword, showPasswordField }) => {
  return (
    <>
      <div className="md:w-[80%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold flex space-x-5">
          <span>if you want to Share Password Enter Here</span>
          <span className="flex items-center space-x-1">
            <input
              type="radio"
              name="1"
              id=""
              onChange={(e) => setsendPassword(true)}
            />
            <span>Yes</span>
          </span>
          <span className="flex items-center space-x-1">
            <input
              type="radio"
              name="1"
              id=""
              onChange={(e) => setsendPassword(false)}
            />
            <span>No</span>
          </span>
        </div>
        {showPasswordField && (
          <>
            <div className="w-full border-[1.6px] rounded-sm">
              <input
                type="text"
                // accept="image/*"
                className="w-full py-3 px-4 "
                placeholder="Your Password"
              />
            </div>
            <span className="text-[#4c4c4c] text-[0.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              iusto, sed dignissimos accusamus est fugit officiis sit ducimus
              autem. Quae!
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default SendPassword;
