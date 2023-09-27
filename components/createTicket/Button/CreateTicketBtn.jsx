import React from "react";

const CreateTicketBtn = ({handleFunction}) => {
  return (
    <>
      <div className="md:w-[80%] w-full p-1 flex space-x-2 items-center py-3">
        <button className="py-2 w-[130px] bg-[#ff10f0] text-[white] font-semibold"
        onClick={handleFunction}
        >
          Submit Ticket
        </button>
        <button className="py-2 w-[130px] bg-[#f75050] text-[white] font-semibold">
          Reset
        </button>
        <button className="py-2 w-[130px] bg-[violet] text-[white] font-semibold">
          Cancel Ticket
        </button>
      </div>
    </>
  );
};

export default CreateTicketBtn;
