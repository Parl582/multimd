import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AtSign, Phone } from "lucide-react";

const ContactDetails = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="text-white rounded-md px-3 py-[5px] bg-[#ff10f0] text-[0.8rem] font-semibold">
          Contact
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white rounded-[10px]">
        <AlertDialogHeader>
          {/* <AlertDialogTitle>Seller Details </AlertDialogTitle> */}
        </AlertDialogHeader>
        <div className="w-full space-y-3 ">
          <h2 className="font-bold md:text-lg text-base" > Contact Details </h2>
          <h3 className="flex items-center gap-3">
            {" "}
            <Phone /> <span className="md:text-base text-sm"> +91-9876543210 </span>
          </h3>

          <h3 className="flex items-center gap-3">
            {" "}
            <AtSign />{" "}
            <span className="w-full truncate md:text-base text-sm"> testuser@gmail.com </span>
          </h3>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-[8px]">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactDetails;
