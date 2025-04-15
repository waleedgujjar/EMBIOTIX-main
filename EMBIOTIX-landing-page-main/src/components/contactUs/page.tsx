import React from "react";
export const runtime = "edge";

export default function ContactForm() {
  return (
    <div
    id="contact"
      data-aos="fade-up"
      className="md:p-[80px] p-[40px] bg-[#0f0f0f] flex lg:flex-row flex-col gap-[40px] xl:justify-around items-center justify-center"
    >
      <div
        data-aos="flip-left"
        className="flex flex-col gap-[24px] md:w-[540px] w-full"
      >
        <p
          className="md:text-[48px] text-[30px] text-white md:text-left text-center"
          style={{ fontFamily: "Melbourne" }}
        >
          Let’s get started on something great
        </p>
        <p
          className="text-[#7a7b7a] md:text-[24px] text-[16px] md:text-left text-center"
          style={{ fontFamily: "Melbourne" }}
        >
          Join the first wave of startups growing with us.
        </p>
      </div>
      <div
        data-aos="flip-right"
        className="relative md:w-[700px] sm:w-[500px] w-[300px]"
      >
        <div className="absolute md:top-8 md:right-8 sm:top-5 sm:right-5 top-1 right-1 rounded-[40px] border border-[#333] bg-[#0f0f0f] p-[40px] w-full h-full"></div>
        <div
          className="relative text-white rounded-[40px] border border-[#333] bg-[#0f0f0f] p-[40px] flex flex-col gap-[15px]"
          style={{ fontFamily: "Melbourne" }}
        >
          <div className="flex sm:flex-row flex-col gap-[15px]">
            <div className="flex flex-col gap-[6px] flex-1">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="md:p-[12px] p-[8px] bg-[#333] text-[#828991] text-[16px] rounded-[6px]"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-[6px] flex-1">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="md:p-[12px] p-[8px] bg-[#333] text-[#828991] text-[16px] rounded-[6px]"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="md:p-[12px] p-[8px] bg-[#333] text-[#828991] text-[16px] rounded-[6px]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="">Phone number</label>
            <input
              type="tel"
              className="md:p-[12px] p-[8px] bg-[#333] text-[#828991] text-[16px] rounded-[6px]"
              placeholder="US ▼ +1(555) 000-0000"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="">Message</label>
            <textarea
              className="md:p-[12px] p-[8px] bg-[#333] text-[#828991] text-[16px] rounded-[6px] md:h-[176px] h-[100px]"
              placeholder="Leave us a message"
            />
          </div>
          <div>
          <button
  className="bg-[#89f436] text-black w-full py-[10.5px] rounded-[6px] transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-5px] hover:bg-[#171F05] hover:text-[#89f436] active:bg-[#364C09] active:scale-100"
>
  Send Message
</button>
          </div>
        </div>
      </div>
    </div>
  );
}
