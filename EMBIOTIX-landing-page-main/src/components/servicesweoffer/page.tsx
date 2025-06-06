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
        "We specialize in the design and development of advanced embedded systems tailored to meet the demands of modern industries. Our solutions are engineered for high performance, low power consumption, and robust reliability.",
      image: "/images/softwaredevelopmentlogo.png",
      alt: "Software Development",
    },
    {
      title: "IT & Network Management",
      description:
        "We provide comprehensive and scalable network and IT infrastructure solutions that are designed to meet the growing demands of modern businesses. Our services include the deployment of high-performance networks, server architecture.",
      image: "/images/aidevelopmentlogo.png",
      alt: "AI Development",
    },
    {
      title: "Data Science & AI Solutions",
      description:
        "We leverage the transformative potential of data science and artificial intelligence to provide organizations with actionable insights that drive decision-making and business growth. By combining advanced machine learning algorithms.",
      image: "/images/machinelearninglogo.png",
      alt: "Machine Learning",
    },
    {
      title: "Mobile app development",
      description:
        "We specialize in creating cutting-edge, user-centric mobile applications that prioritize both innovation and ease of use. Our mobile apps are designed to offer seamless, intuitive experiences, ensuring users can effortlessly interact with your brand across any platform or device.",
      image: "/images/digitalmarketinglogo.png",
      alt: "Digital Marketing",
    },
    {
      title: "Web Development",
      description:
        "We specialize in developing scalable, custom web solutions that cater to the unique needs of your business, helping you grow and succeed in a fast-paced digital landscape. Whether you're looking for a sleek, high-converting landing page or a feature-rich, complex web application.",
      image: "/images/cloudcomputinglogo.png",
      alt: "Cloud Computing",
    },
    {
      title: "UI/UX design",
      description:
        "We craft intuitive, user-centered UI/UX designs that prioritize clarity, accessibility, and visual appeal. Our design process begins with a deep understanding of user behavior, goals, and pain points to create experiences that are not only beautiful but also highly functional",
      image: "/images/uiuxlogo.png",
      alt: "UI/UX Design",
    },
  ];

  return (
    <div className="bg-[#0f0f0f] px-4 sm:px-6 md:px-16 lg:px-20 py-10 md:py-16" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <p className="w-fit px-4 py-1 text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[13px] sm:text-[14px]">
          Services
        </p>
        <p className="text-white mt-3 text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-center">
          Services we Offer
        </p>
        <p className="text-[#7a7b7a] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-5 text-center max-w-[768px]">
          We provide cutting-edge AI, ML, IoT, and development services to help businesses innovate and grow.
        </p>
      </motion.div>

      {/* Grid Layout for desktop/tablet */}
      <div className="hidden lg:grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group cursor-pointer bg-[#161616] border border-[#333] p-6 flex flex-col gap-6 rounded-[12px] shadow-md min-h-[400px] transition-all duration-500"
          >
            <img
              src={service.image}
              alt={service.alt}
              className={`transition-transform duration-300 group-hover:scale-110 ${
                service.title === "UI/UX design" ? "w-[62px] h-[50px]" : "w-[64px] h-[64px]"
              }`}
            />
            <div className="flex flex-col gap-2">
              <p className="text-white text-[20px] md:text-[24px] font-normal group-hover:text-[#89f436] transition-colors duration-300">
                {service.title}
              </p>
              <p className="text-[#b9b3b3] text-[14px] md:text-[16px]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Swiper for Mobile */}
      <div className="lg:hidden mt-10 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1.05 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="cursor-pointer bg-[#161616] border border-[#333] p-6 flex flex-col gap-6 rounded-[12px] shadow-md min-h-[400px] transition-all duration-500"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className={`transition-transform duration-300 hover:scale-110 ${
                    service.title === "UI/UX design" ? "w-[62px] h-[50px]" : "w-[64px] h-[64px]"
                  }`}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[20px] sm:text-[22px] font-normal hover:text-[#89f436] transition-colors duration-300">
                    {service.title}
                  </p>
                  <p className="text-[#b9b3b3] text-[14px] sm:text-[16px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6">
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
