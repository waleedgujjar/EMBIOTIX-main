"use client";

import React from "react";
import { motion } from "framer-motion";

export const runtime = "edge";

export default function Experience() {
  return (
    <div
      className="bg-[#eff0f1] relative flex lg:flex-row flex-col px-[80px] py-[40px] gap-[40px] xl:justify-around items-center justify-center overflow-hidden"
      id="experience"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d2d2d2_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />

      {/* Left Side - Text & Button */}
      <motion.div
        className="flex flex-col md:justify-center justify-start items-center md:items-start gap-[24px] md:w-[650px] sm:w-[400px] w-[300px] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-[12px]">
          <p
            className="md:text-[48px] text-[30px] md:text-left text-center font-semibold text-gray-800"
            style={{ fontFamily: "Melbourne" }}
          >
            Powering Businesses with Proven Success
          </p>
          <p
            className="md:text-[24px] text-[16px] md:mr-[115px] md:text-left text-center text-gray-600"
            style={{ fontFamily: "Melbourne" }}
          >
            With years of expertise, we have successfully delivered innovative
            solutions to businesses worldwide.
          </p>
        </div>

        {/* Desktop Button */}
        <div className="md:block hidden">
  <a href="#services">
    <button
      className="bg-[#171F05] border border-[#364C09] text-[#89f436] text-[16px] w-[152px] h-[40px] rounded-[6px] transition-all duration-300 hover:bg-transparent hover:text-black"
      style={{ fontFamily: "Melbourne" }}
    >
      Explore Services
    </button>
  </a>
</div>

      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/Group1.png"
          alt="Group Illustration"
          className="max-w-[400px] w-full object-contain"
        />
      </motion.div>

      {/* Mobile Button */}
      <div className="md:hidden z-10 mt-4">
        <a href="#services">
          <button
            className="bg-[#171F05] border border-[#364C09] text-[#89f436] text-[16px] w-[152px] h-[40px] rounded-[6px] transition-all duration-300 hover:bg-transparent hover:text-[#89f436]"
            style={{ fontFamily: "Melbourne" }}
          >
            Explore Services
          </button>
        </a>
      </div>
    </div>
  );
}
