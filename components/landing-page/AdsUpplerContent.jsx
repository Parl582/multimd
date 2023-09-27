import React from "react";

const AdsUpperContent = ({
  productUparDetails,
  textColor,
  line,
  history,
  pneed,
  elm,
}) => {
  return (
    <>
      <h2
        className={`bg-[white] md:text-lg text-base  md:py-2 py-1 sm:leading-9 leading-normal     overflow-hidden text-black h-auto
      
      
         font-semibold md:line-clamp-2  line-clamp-1   

        `}
      >
        {elm}
      </h2>
    </>
  );
};

export default AdsUpperContent;
