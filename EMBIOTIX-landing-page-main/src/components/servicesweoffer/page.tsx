"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowLeft from "@/assets/arrowLeft";
import ArrowRight from "@/assets/arrowRight";
import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

export const runtime = "edge";

export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);

  const services = [
    {
      title: "Embedded Systems Development",
      description:
        "We design and develop cutting-edge embedded systems that offer high performance, reliability, and efficiency, enabling seamless integration.",
      image: "/images/softwaredevelopmentlogo.png",
      alt: "Software Development",
    },
    {
      title: "Network & IT Infrastructure Management",
      description:
        "We deliver robust, scalable network and IT infrastructure solutions that ensure seamless connectivity, high availability, and secure data management.",
      image: "/images/aidevelopmentlogo.png",
      alt: "AI Development",
    },
    {
      title: "Data Science & AI Solutions",
      description:
        "We harness the power of data and AI to deliver actionable insights and intelligent solutions, enabling businesses to make data-driven decisions, optimize processes.",
      image: "/images/machinelearninglogo.png",
      alt: "Machine Learning",
    },
    {
      title: "Mobile app development",
      description:
        "We create innovative, user-friendly mobile apps that drive engagement and deliver seamless experiences across all devices.",
      image: "/images/digitalmarketinglogo.png",
      alt: "Digital Marketing",
    },
    {
      title: "Web Development",
      description:
        "We build scalable, custom web solutions, from sleek landing pages to complex web applications, that power modern business growth.",
      image: "/images/cloudcomputinglogo.png",
      alt: "Cloud Computing",
    },
    {
      title: "UI/UX design",
      description:
        "We design intuitive, user-focused interfaces that blend seamless functionality with modern aesthetics.",
      image: "/images/uiuxlogo.png",
      alt: "UI/UX Design",
    },
  ];

  return (
    <div
      className="bg-[#0f0f0f] md:px-[80px] md:py-[60px] px-[40px] py-[30px]"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <p className="w-[82px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]">
          Services
        </p>
        <p className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px] text-center">
          Services we Offer
        </p>
        <p className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] text-center max-w-[768px]">
          We provide cutting-edge AI, ML, IoT, and development services to help
          businesses innovate and grow.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="hidden lg:grid mt-[40px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[32px] gap-[12px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-[#161616] border border-[#333] p-[32px] flex flex-col gap-[24px] rounded-[12px] shadow-md transition-all duration-500 hover:shadow-[0_8px_30px_rgba(137,244,54,0.3)]"
          >
            <motion.img
              src={service.image}
              alt={service.alt}
              className="w-[64px] h-[64px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col gap-[10px]">
              <motion.p
                className="text-white text-[24px] font-normal"
                whileHover={{ color: "#89f436" }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.p>
              <p className="text-[#b9b3b3] text-[16px] font-normal">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Swiper for Mobile */}
      <div className="lg:hidden mt-[40px] relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#161616] border border-[#333] p-[32px] flex flex-col gap-[24px] rounded-[12px] shadow-md transition-all duration-500 hover:shadow-[0_8px_30px_rgba(137,244,54,0.3)]"
              >
                <motion.img
                  src={service.image}
                  alt={service.alt}
                  className="w-[64px] h-[64px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col gap-[10px]">
                  <motion.p
                    className="text-white text-[24px] font-normal"
                    whileHover={{ color: "#89f436" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.p>
                  <p className="text-[#b9b3b3] text-[16px] font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-[10px] mt-[20px]">
          <button
            type="button"
            aria-label="Previous Slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-white text-[24px]"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next Slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="text-white text-[24px]"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

