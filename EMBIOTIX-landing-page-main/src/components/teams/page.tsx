"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Scroller2 from "@/assets/scroller2";
export const runtime = "edge";
export default function Teams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const teamMembers = [
    {
      name: "Ghufran Khan",
      role: "CEO",
      description:
        "Leading innovation and setting strategic direction for the company.",
      img: "/images/CEO.jpeg",
      linkedin: "https://www.linkedin.com/in/ghufran-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Replace with actual link
    },
    {
      name: "Ahmad Nauman",
      role: "CTO",
      description: "Designing intelligent systems that drive business growth.",
      img: "/images/CTO.jpg",
      linkedin: "#",
    },
    {
      name: "Muhammad Asjad",
      role: "CMO",
      description:
        "Leads marketing strategies to grow brand visibility and drive customer engagement.",
      img: "/images/CMO.jpeg",
      linkedin: "https://www.linkedin.com/in/muhmmad-asjad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Humza Jaffar",
      role: "UI/UX Lead",
      description:
        "Designs intuitive and engaging user experiences that blend aesthetics with functionality.",
      img: "/images/humza.jpg",
      linkedin: "https://www.linkedin.com/in/humza-makhfi-85a5021ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="bg-[#0f0f0f] md:px-[80px] md:pt-[60px] px-[40px] py-[30px]"
      id="team"
    >
      <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="3000">
        <p className="w-[100px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]">
          Our Team
        </p>
        <p className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px] text-center">
          Meet Our Expert Team
        </p>
        <p className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] text-center max-w-[768px]">
          Passionate professionals dedicated to building smarter digital solutions.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mt-[40px]">
        <Swiper
          pagination={false}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          initialSlide={0} // Always start from CEO
          centeredSlides={true} // good for mobile
          loopAdditionalSlides={teamMembers.length} // Ensures smooth looping
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: false, 
            },
            1200: {
              slidesPerView: 3,
              centeredSlides: false, 
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`p-[20px] rounded-[10px] border flex flex-col gap-[24px] transition-all duration-300 ${
                  index === activeIndex
                    ? "border-white shadow-[0_0_20px_#89f43650]"
                    : "border-[#333]"
                }`}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={member.img}
                    alt={`${member.name} Background`}
                    className="rounded-lg object-cover w-[250px] h-[250px]"
                  />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <button className="w-[80px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-[6px] text-[14px]">
                    Team
                  </button>
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-white text-[20px] leading-[28px]">
                      {member.name}
                    </p>
                    <p className="text-[#89f436] text-[14px]">{member.role}</p>
                    <p className="text-[#b9b3b3] text-[16px]">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-white text-[14px]">{member.name}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#89f436] hover:text-white transition"
                    >
                      <FaLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scroller */}
      <div className="flex justify-center items-center mt-[32px]">
        <Scroller2
          activeIndex={activeIndex}
          setActiveIndex={(activeIndex: number) =>
            swiperRef?.current?.slideToLoop(activeIndex)
          }
        />
      </div>
    </div>
  );
}