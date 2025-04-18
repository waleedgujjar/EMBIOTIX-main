"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import QuoteRight from "@/assets/quoteRight";
import ReviewStars from "@/assets/reviewStars";
import Scroller2 from "@/assets/scroller2";
import { Swiper as SwiperClass } from "swiper";

export const runtime = "edge";

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const client_reviews = [
    {
      name: "Charlotte",
      description:
        "“Collaborating with Embiotix was like gaining an internal development team. They genuinely invested time to grasp our exact requirements.”",
      img: "/images/customer1.png",
    },
    {
      name: "Alfredo Lubin",
      description:
        "We’re not super technical, but the team made everything easy to follow. Great people, great service.",
      img: "/images/customer1.png",
    },
    {
      name: "Angel Mango",
      description:
        "You can tell they care about what they do, always responsive, thoughtful, and genuinely invested in our project’s success.",
      img: "/images/customer2.png",
    },
  ];

  return (
    <div className="bg-[#0f0f0f] md:px-[80px] md:pt-[60px] px-[40px] py-[30px]">
      <div className="flex flex-col justify-center items-center">
        <button className="w-[111px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]">
          Testimonials
        </button>
        <p className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px] text-center">
          What Our Clients Say About Us
        </p>
        <p className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] text-center max-w-[768px]">
          See how our expertise in AI, IoT, and development has made a
          difference for our partners.
        </p>
      </div>

      <div className="mt-[40px]">
        <Swiper
          pagination={false}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1200: { slidesPerView: 3, centeredSlides: true },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="transition-transform duration-500 ease-in-out"
        >
          {client_reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className={`flex justify-center transition-all duration-500 ease-in-out transform ${
                index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
            >
              <div
                className={`p-[24px] md:h-[357px] h-[300px] w-full max-w-[360px] rounded-[10px] border border-[#333] rounded-tl-[40px] rounded-br-[40px] shadow-md transition-colors duration-500 ${
                  index === activeIndex ? "bg-[#e6ffcd]" : "bg-[#161616]"
                }`}
              >
                <div className="flex gap-[6px]">
                  <img src={review?.img} alt="Customer Image" className="w-[50px] h-[50px] rounded-full" />
                  <div className="flex flex-col gap-[6px]">
                    <p
                      className={`md:text-[24px] text-[16px] font-semibold ${
                        index === activeIndex ? "text-[#000]" : "text-[#fff]"
                      }`}
                    >
                      {review?.name}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <ReviewStars
                          key={i}
                          className={`${index === activeIndex ? "opacity-100" : "opacity-70"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-3/4">
                  <p
                    className={`lg:text-[24px] text-[16px] xl:mt-[32px] mt-[10px] ${
                      index === activeIndex ? "text-[#000]" : "text-[#fff]"
                    }`}
                  >
                    {review?.description}
                  </p>
                  <div className="flex justify-end">
                    <QuoteRight />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center mt-[32px]">
        <Scroller2
          activeIndex={activeIndex}
          setActiveIndex={(index) => swiperRef?.current?.slideToLoop(index)}
        />
      </div>
    </div>
  );
}
