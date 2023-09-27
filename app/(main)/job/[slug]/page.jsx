import React from "react";
import PageHeader from "@/components/common/PageHeader";

const page = ({ params, searchParams }) => {
  const PageName = searchParams.page;
  return (
    <div className="w-full h-screen">
      <PageHeader pageName={PageName} />

      {params.slug}
    </div>
  );
};

export default page;
