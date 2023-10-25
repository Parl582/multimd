"use client";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import MobileAccordion from "./accordian-for-mobile/MobileAccordian";

const MobileHumbugger = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        className="bg-white px-0 flex flex-col overflow-y-auto"
        side={"left"}
        v
      >
        <SheetHeader className="mt-5 py-0 space-y-0 gap-0 ">
          <Link href={"/chat"}>
            <SheetClose className="w-full px-2 text-start cursor-pointer border-b-[1px] py-1 hover:bg-[#ededed] duration-150 flex gap-2 text-sm items-center font-semibold">
              <MessageCircle size={20} strokeWidth={0.5} />
              Chat
            </SheetClose>
          </Link>

          <MobileAccordion name={"Properties"} path={"properties"} data={[]} />
          <MobileAccordion name={"About"} path={"properties"} data={[]} />
          <MobileAccordion name={"MS"} path={"properties"} data={[]} />
          <MobileAccordion name={"SM"} path={"properties"} data={[]} />
          <MobileAccordion name={"Job"} path={"properties"} data={[]} />
          <MobileAccordion name={"Country"} path={"properties"} data={[]} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHumbugger;
