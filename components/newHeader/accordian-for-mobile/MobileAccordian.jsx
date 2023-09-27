import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Info } from "lucide-react";

const MobileAccordion = ({ name, data, path }) => {
  return (
    <Accordion type="single" collapsible className="py-0 my-0  ">
      <AccordionItem value="item-1" className="p-0 px-2">
        <AccordionTrigger className="py-2 flex items-center gap-2 text-sm font-semibold ">
          <div className="flex items-center gap-2">
            <Info size={20} strokeWidth={0.5} /> <span> {name} </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" w-full py-1 px-0 ">
          <div className="w-full  flex justify-start items-center flex-col ">
            <Link
              href={`/${path}`}
              className="w-full py-1 text-start px-1 flex gap-2 "
            >
              {name}
            </Link>
            <Link
              href={"/about"}
              className="w-full py-1 text-start px-1 flex gap-2 "
            >
              Privacy & Policy
            </Link>
            <Link
              href={"/about"}
              className="w-full py-1 text-start px-1 flex gap-2 "
            >
              Company Details
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileAccordion;
