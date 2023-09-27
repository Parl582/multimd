import PageHeader from "@/components/common/PageHeader";
import React from "react";

const page = ({ params, searchParams }) => {
  // console.log(params);
  const pageName = searchParams.page;
  return (
    <div>
      <PageHeader pageName={pageName} />
      {params.slug}{" "}
    </div>
  );
};

export default page;
