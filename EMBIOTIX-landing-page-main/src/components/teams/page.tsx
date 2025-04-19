"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Ghufran Khan",
    role: "CEO",
    description:
      "Leading innovation and setting strategic direction for the company.",
    img: "/images/CEO.jpeg",
    linkedin: "https://www.linkedin.com/in/ghufran-khan",
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
    linkedin: "https://www.linkedin.com/in/muhmmad-asjad",
  },
  {
    name: "Humza Jaffar",
    role: "UI/UX Lead",
    description:
      "Designs intuitive and engaging user experiences that blend aesthetics with functionality.",
    img: "/images/humza.jpg",
    linkedin: "https://www.linkedin.com/in/humza-makhfi-85a5021ab",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<null | typeof teamMembers[0]>(null);

  return (
    <div className="bg-[#0f0f0f] px-6 py-12 md:px-16" id="team">
      <h2 className="text-white text-3xl md:text-4xl text-center mb-8">
        Meet Our Expert Team
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="team-carousel"
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_20px_#89f43650] transition-all duration-300 w-full h-[350px]"
              onMouseEnter={() => setSelected(member)}
              onMouseLeave={() => setSelected(null)}
              onClick={() => setSelected(member)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-xl font-semibold mb-1">
                  {member.name}
                </p>
                <p className="text-[#89f436] text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-[#b9b3b3] text-xs mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f0f] rounded-xl p-6 w-full max-w-md text-white border border-[#364C09] shadow-[0_0_20px_#89f43650]"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-[200px] h-[200px] object-cover object-top rounded-full border-4 border-[#171F05]"
                />
                <span className="text-[#89f436] bg-[#171F05] px-3 py-1 text-sm rounded-full border border-[#364C09]">
                  Team
                </span>
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <p className="text-[#89f436] font-medium">{selected.role}</p>
                <p className="text-[#b9b3b3] text-center">{selected.description}</p>
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#89f436] hover:text-white mt-2"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
