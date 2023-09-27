"use client";
import React from "react";
import { useState } from "react";

import JobSeaker from "../JobSeaker/JobSeaker";
import Recruiter from "../recuiter/Recuiter";
import RequiterType from "../recuiter/RequiterType";
import JobPostDetailsCards from "./JobPostDetailsCards";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GraduationCap, PersonStanding, Users2 } from "lucide-react";
import JobAdsHome from "@/components/jobAds/JobAdsHome";

const JobHomePage = () => {
  const navigate = useRouter();
  const [dynamicPage, setDynamicPage] = useState("");
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");

  console.log("i am search params===>", tag);

  // const RenderPage = () => {
  //   return (
  //     <>
  //       {tag === "job-sicker" && <JobSeaker />}

  //       {tag === "recruiter" && (
  //         <RequiterType setDynamicPage={setDynamicPage} />
  //       )}
  //       {tag === "own-company" && <Recruiter />}
  //     </>
  //   );
  // };

  // if (tag === "requiter") {
  //   return <RequiterType setDynamicPage={setDynamicPage} />;
  // }
  // if (tag === "job-sicker") {
  //   return <JobSeaker />;
  // }

  if (tag === "job-ads") {
    return <JobAdsHome />;
  }
  return (
    <>
      <div className="w-full p-3">
        <div className="w-full">
          <div className=" flex items-center justify-center w-full">
            {tag === "home" && (
              <p className="md:w-[80%] w-full p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, distinctio. Sapiente optio corrupti adipisci
                eligendi alias itaque, nam eveniet a saepe repellat amet
                reprehenderit tenetur illum, debitis incidunt in id recusandae
                asperiores quae labore earum numquam ut. Doloremque, iusto
                autem?
              </p>
            )}
          </div>
          {/* //header  */}
          <div className="w-full flex border-[1.2px] shadow-md items-center justify-center rounded-sm">
            <div className="md:w-[80%] w-full py-3  flex flex-wrap">
              <div className="md:w-1/5 p-2 flex items-center justify-center ">
                <Link
                  href={"/job?tag=home"}
                  className=" py-2 px-3 w-[140px] font-bold bg-[#ff10f0] text-[white] hover:bg-[#39ff14] duration-200"
                  // onClick={() => setDynamicPage("home")}
                >
                  Home
                </Link>
              </div>
              <div className="md:w-1/5 p-2 flex items-center justify-center ">
                <Link
                  href={"/job?tag=job-sicker"}
                  className=" py-2 px-3 w-[140px] bg-[#ff10f0] text-[white] font-bold hover:bg-[#39ff14] duration-200"
                  // onClick={() => navigate("/job-seeker")}
                  // onClick={() => setDynamicPage("job-seeker")}
                >
                  {" "}
                  Job Seeker{" "}
                </Link>
              </div>
              <div className="md:w-1/5 p-2 flex items-center justify-center ">
                <Link
                  href={"/job?tag=recruiter"}
                  className=" py-2 px-3 w-[140px] bg-[#ff10f0] text-[white] font-bold duration-200 hover:bg-[#39ff14]"
                  // onClick={() => navigate("/recruiter")}
                  // onClick={() => setDynamicPage("recruiter")}
                >
                  Recruiter{" "}
                </Link>
              </div>
              {/* <div className="md:w-1/5 p-2 flex items-center justify-center ">
                <Link
                  href={"/job?tag=null"}
                  className=" py-2 px-3 w-[140px] bg-[#ff10f0] text-[white] font-bold duration-200 hover:bg-[#39ff14]"
                >
                  Some Thing
                </Link>
              </div> */}
              {/* <div className="md:w-1/5 p-2 flex items-center justify-center ">
                <button className=" py-2 px-3 w-[140px] bg-[#ff10f0] text-[white] font-bold hover:bg-[#39ff14] duration-200 ">
                  Something
                </button>
              </div> */}
            </div>
          </div>
          {dynamicPage === "home" && (
            <div className="w-full ">
              <div className="w-full py-5 px-4">
                <div className="w-full flex flex-wrap ">
                  <div className="md:w-1/3 w-full p-2">
                    <JobPostDetailsCards
                      jobs="post"
                      title="Total Job Post"
                      total="2341"
                      icon={<GraduationCap size={50} />}
                    />
                  </div>
                  <div className="md:w-1/3 w-full p-2">
                    <JobPostDetailsCards
                      job="candidate"
                      title="Total Candidate "
                      total="1234"
                      icon={<Users2 size={50} />}
                    />
                  </div>
                  <div className="md:w-1/3 w-full p-2">
                    <JobPostDetailsCards
                      jobs="active"
                      title="Active Jobs"
                      total="7890"
                      icon={<PersonStanding size={50} />}
                    />
                  </div>
                </div>
              </div>

              <p className="text-[1.2rem] p-4 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                animi iusto deserunt quos odio voluptas doloribus eum vero,
                provident dolorum voluptatem enim perspiciatis nostrum
                doloremque consectetur corporis minima minus impedit aliquid nam
                eligendi dolore. Neque nobis soluta ducimus dolorem doloremque
                possimus eum laborum laudantium optio nam. Repellendus atque at
                necessitatibus blanditiis unde quibusdam quas obcaecati? Quaerat
                praesentium facilis illo ut nihil tempore eligendi cumque,
                necessitatibus iusto nam. Nam possimus placeat autem numquam quo
                voluptate facere velit dolores quas dolorem perspiciatis, ex ut
                quia, ratione asperiores minus? Autem, corporis? Incidunt itaque
                recusandae repellendus tempora veritatis labore accusamus ut.
                Debitis deserunt porro perferendis dignissimos magni tempore
                repudiandae minus, vel, voluptas non ab laudantium! Molestias,
                eius rerum ipsum libero officia repellat quae voluptate est cum
                culpa obcaecati. Illo, sunt nemo. Officiis dolor aliquam qui aut
                nemo molestias nulla corrupti sapiente dolore rerum enim
                aperiam, quos nobis quibusdam veniam quae eos provident. Numquam
                laborum quod exercitationem sequi, repellat magnam asperiores,
                nostrum omnis illum incidunt, repudiandae officia. Iste sint
                nobis in deleniti, facilis magnam natus, possimus molestiae
                repudiandae labore ipsa nostrum! Quos fuga aut voluptas suscipit
                aspernatur iste magni nulla possimus eligendi? Natus maiores ea
                voluptas eligendi modi fugiat autem dolor? Dolor provident dicta
                a!
              </p>
            </div>
          )}

          {tag === "job-sicker" && <JobSeaker />}
          {tag === "recruiter" && <Recruiter />}
          {/*
          {tag === "recruiter" && (
            <RequiterType setDynamicPage={setDynamicPage} />
          )}
           */}
        </div>
      </div>
    </>
  );
};

export default JobHomePage;
