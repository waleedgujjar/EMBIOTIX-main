"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Ghufran Khan",
    role: "CEO",
    description: "Leading innovation and setting strategic direction for the company. Passionate about building high-performing teams and driving business growth through technology and vision.",
    expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
    experience: "10+ years in Tech Industry",
    img: "/images/CEO.jpeg",
    linkedin: "https://www.linkedin.com/in/ghufran-khan",
    github: "#"
  },
  {
    name: "Ahmad Nauman",
    role: "CTO",
    description: "Designing intelligent systems that drive business growth. Expert in scalable architectures and emerging technologies.",
    expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure"],
    experience: "8+ years in Software Development",
    img: "/images/CTO.jpg",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Muhammad Asjad",
    role: "CMO",
    description: "Leads marketing strategies to grow brand visibility and drive customer engagement. Skilled in digital marketing and creative campaigns.",
    expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"],
    experience: "7+ years in Marketing",
    img: "/images/CMO.jpeg",
    linkedin: "https://www.linkedin.com/in/muhmmad-asjad",
    github: "#"
  },
  {
    name: "Humza Jaffar",
    role: "UI/UX Lead",
    description: "Designs intuitive and engaging user experiences that blend aesthetics with functionality. Focused on user-centric design and accessibility.",
    expertise: ["UI/UX Design", "Prototyping", "User Research"],
    experience: "6+ years in UI/UX",
    img: "/images/humza.jpg",
    linkedin: "https://www.linkedin.com/in/humza-makhfi-85a5021ab",
    github: "#"
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#0f0f0f] px-2 py-8 md:px-8" id="team">
      <h2 className="text-white text-2xl md:text-3xl text-center mb-6">
        Meet Our Expert Team
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32} // Increased space between cards
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
        }}
        className="team-carousel"
      >
      {teamMembers.map((member, idx) => (
  <SwiperSlide key={idx}>
    <div className="w-full h-[350px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#161616] text-white p-3 flex flex-col items-center justify-center rounded-2xl border border-[#89f436] shadow-[0_0_10px_rgba(137,244,54,0.2)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-[16px] font-bold mb-2 uppercase text-center"
              style={{ fontFamily: "Melbourne" }}
            >
              {member.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-white/80 text-xs mb-2 text-center"
            >
              {member.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs text-center text-white/60 mb-2"
            >
              {member.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-2 w-full flex flex-col items-center"
            >
              <p className="text-[#89f436] text-[10px] mb-1 text-center font-semibold uppercase tracking-wide">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full px-2 py-1 text-[11px] font-medium"
                    style={{ fontFamily: "Melbourne" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-[10px] mb-2 text-center"
            >
              {member.experience}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex gap-3 text-[#89f436] justify-center"
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaGithub size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
}