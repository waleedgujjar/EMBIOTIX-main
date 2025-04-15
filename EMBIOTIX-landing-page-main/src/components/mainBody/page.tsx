"use client";
import React from "react";

export const runtime = "edge";

export default function MainBody() {
  return (
    <div
      data-aos="fade-up"
      style={{ backgroundImage: "url(/images/Hero.png)" }}
      className="md:h-screen md:m-0 mt-[50px] h-[500px] bg-cover bg-center flex items-center justify-center"
    >
      <div className="max-w-[1016px]">
        <div
          className="text-white text-4xl sm:text-5xl md:text-[60px] leading-normal text-center lg:mx-0 md:[5px] mx-[10px]"
          style={{ fontFamily: "poppinsSemiBold" }}
        >
          Revolutionizing Tech with Smart AI & IoT Solutions
        </div>
        <div
          className=" text-white pt-[6px] text-base sm:text-lg md:text-[28px] sm:px-[50px] md:px-[130px] text-center md:mx-0 mx-[10px]"
          style={{ fontFamily: "poppinsMedium" }}
        >
          From AI automation to cutting-edge IoT solutions, we help businesses
          scale with smart technology
        </div>
        <div className="pt-[40px] flex flex-col sm:flex-row md:mx-auto mx-[20px] gap-[10px] justify-center items-center">
  {/* Explore Services Button */}
  <a href="#services">
    <button
      className="w-[152px] h-[40px] rounded-md text-[#89f436] border border-[#89f436] text-base transition-all duration-300 hover:bg-[#89f436] hover:text-black"
      style={{ fontFamily: "Melbourne" }}
    >
      Explore Services
    </button>
  </a>

  {/* Get Started Button */}
  <a href="#contact">
    <button
      className="w-[152px] h-[40px] rounded-md bg-[#89f436] text-base text-black border border-[#89f436] transition-all duration-300 hover:bg-transparent hover:text-[#89f436]"
      style={{ fontFamily: "Melbourne" }}
    >
      Get Started
    </button>
  </a>
</div>


      </div>
    </div>
  );
}
