import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageHeader = ({ pageName }) => {
  return (
    <div className="w-full py-3 border px-3">
      <div className="flex items-center gap-1 font-semibold text-sm">
        <Link href={"/"}>Home</Link>

        {pageName && (
          <div className="flex  items-center">
            <span>
              <ChevronRight strokeWidth={1} size={20} color="#ccc" />
            </span>
            <Link className="capitalize" href={`/${pageName}`}>
              {pageName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
