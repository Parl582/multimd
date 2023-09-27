import { Crop, IndianRupee, Map, MapPin, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
// import PopUp from "./popUp/PopUp";
let image = false;

let userImage = "";

const DetailsLeftSide = ({ paid }) => {
  const [openModel, setOpenModel] = useState(false);
  const handleContact = () => {
    if (!paid) {
      setOpenModel((prev) => !prev);
    }
  };

  return (
    <>
      <div className="w-full bg-white space-y-1">
        {/* userDetails  */}
        <div className="   border-[1.1px] rounded-md  p-2  ">
          <div className="w-full md:text-[1.2rem] text-base font-semibold flex items-center py-2">
            <IndianRupee size={28} />
            20,00000
          </div>

          <div className="w-full py-2 ">
            <span className="font-semibold md:text-[1rem] text-sm text-[#565656]">
              Location :
            </span>

            <h2 className="flex items-center gap-2">
              <MapPin size={28} />

              <span>Assam Guwagati Road , Silapatha</span>
            </h2>
          </div>
          <div className="w-full flex gap-2 items-center">
            <section>
              {image ? (
                <img
                  src={userImage}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
                />
              ) : (
                <User2 />
              )}
            </section>
            <div className="uppercase md:text-[1.2rem] py-1 text-base font-semibold">
              Seller Name
            </div>
          </div>

          <button
            className="w-full text-center py-2 px-2 border-[1.1px] border-[#ff10f0] bg-[#ff10f0] text-white rounded-sm font-semibold
                  hover:text-black hover:bg-white duration-150 ease-in-out "
            onClick={handleContact}
          >
            Contact
          </button>

          <div
            className="!w-full text-center py-2 px-2 border-[1.1px] border-[#ff10f0] my-1 bg-[#5c5c5c] text-white rounded-sm font-semibold
                  hover:text-black hover:bg-white duration-150 ease-in-out cursor-pointer"
          >
            <Link href={"/chat"} className="w-full">
              Chat with Seller
            </Link>
          </div>
        </div>

        {/* land Destails  */}

        <div className="w-full p-2 border-[1px] rounded-md shadow-md ">
          <h2 className="text-[1.1rem] font-semibold py-3">Details </h2>

          <div className="w-full flex gap-2 items-center">
            <Map size={28} />

            <span> Area : 0.00008 hectares</span>
          </div>

          <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
            <Crop />
            <span className="text-[1rem] "> Measles : 1234 </span>
          </div>
        </div>
        {/* land description  */}

        <div className="w-full p-2 border-[1px] rounded-md shadow-md">
          <h2 className="text-[1.1rem] font-semibold">Building Details </h2>

          <p className="text-[#565656] text-[1rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            odit, quidem voluptates odio animi, quas veritatis est iure sequi
            corrupti recusandae, aliquid distinctio natus sunt neque sapiente
            iste quia. Velit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Itaque odit, quidem voluptates odio animi, quas
            veritatis est iure sequi corrupti recusandae, aliquid distinctio
            natus sunt neque sapiente iste quia. Velit. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Itaque odit, quidem voluptates
            odio animi, quas veritatis est iure sequi corrupti recusandae,
            aliquid distinctio natus sunt neque sapiente iste quia. Velit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit,
            quidem voluptates odio animi, quas veritatis est iure sequi corrupti
            recusandae, aliquid distinctio natus sunt neque sapiente iste quia.
            Velit.
          </p>
        </div>
      </div>

      {/* <PopUp setOpenModel={setOpenModel} openModel={openModel} /> */}
    </>
  );
};

export default DetailsLeftSide;
