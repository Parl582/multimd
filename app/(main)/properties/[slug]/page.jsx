import React from "react";
import BuyerView from "../../../../components/properties/BuyerView";

const page = ({ searchParams }) => {
  const country = searchParams.country;
  const Locality = searchParams.locality;
  const state = searchParams.state;

  console.log(searchParams.state);

  return (
    <>
      <BuyerView />
    </>
  );
};

export default page;
