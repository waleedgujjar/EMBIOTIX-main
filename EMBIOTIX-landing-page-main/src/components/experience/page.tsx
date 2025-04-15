import React from "react";
export const runtime = "edge";
export default function Experience() {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#eff0f1] flex lg:flex-row flex-col px-[80px] py-[40px] gap-[40px] xl:justify-around items-center justify-center"
      id="experience"
    >
      <div
        data-aos="flip-left"
        className="flex flex-col md:justify-center justify-start items-center  md:items-start gap-[24px] md:w-[650px] sm:w-[400px] w-[300px]"
      >
        <div className="flex flex-col gap-[12px]">
          <p
            className="md:text-[48px] text-[30px] md:text-left text-center"
            style={{ fontFamily: "Melbourne" }}
          >
            Powering Businesses with Proven Success
          </p>
          <p
            className="md:text-[24px] text-[16px] md:mr-[115px] md:text-left text-center"
            style={{ fontFamily: "Melbourne" }}
          >
            With years of expertise, we have successfully delivered innovative
            solutions to businesses worldwide
          </p>
        </div>
        <div className="md:block hidden">
          <button
            className="bg-[#171F05] border border-[#364C09] text-[#89f436] text-[16px] w-[152px] h-[40px] rounded-[6px]"
            style={{ fontFamily: "Melbourne" }}
          >
            Explore Services
          </button>
        </div>
      </div>
      
      <div data-aos="flip-right" className="">
        <img src="/images/Group1.png" alt="Group Image" />
      </div>
      <div className="md:hidden">
        <button
          className="bg-[#171F05] border border-[#364C09] text-[#89f436] text-[16px] w-[152px] h-[40px] rounded-[6px]"
          style={{ fontFamily: "Melbourne" }}
        >
          Explore Services
        </button>
      </div>
    </div>
  );
}
