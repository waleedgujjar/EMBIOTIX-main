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
      name: "Alfredo Lubin",
      description:
        "“Working with Embiotix felt like having an in-house tech team. They really took the time to understand what we needed.”",
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
        "You can tell they care about what they do, always responsive, thoughtful, and genuinely invested in our project’s success.",
      img: "/images/customer2.png",
    },
  ];

  return (
    <div className="bg-[#0f0f0f] md:px-[80px] md:pt-[60px] px-[20px] py-[30px]">
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

      {/* Swiper Carousel */}
      <div className="mt-[40px]">
        <Swiper
          pagination={false}
          modules={[Pagination]}
          spaceBetween={30}
          loop={false}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {client_reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center cursor-pointer">
              <div
                className={`p-[24px] w-full max-w-[360px] md:h-[357px] h-auto rounded-[10px] border border-[#333] rounded-tl-[40px] rounded-br-[40px] transition-all duration-300 ${
                  index === activeIndex ? "bg-[#e6ffcd]" : "bg-[#161616]"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  swiperRef.current?.slideTo(index, 0, true);
                }}
              >
                <div className="flex gap-[6px]">
                  <img src={review.img} alt="Customer Image" className="w-[50px] h-[50px]" />
                  <div className="flex flex-col gap-[6px]">
                    <p
                      className={`md:text-[24px] text-[16px] ${
                        index === activeIndex ? "text-[#000]" : "text-[#fff]"
                      }`}
                    >
                      {review.name}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <ReviewStars key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-4">
                  <p
                    className={`lg:text-[24px] text-[16px] ${
                      index === activeIndex ? "text-[#000]" : "text-[#fff]"
                    }`}
                  >
                    {review.description}
                  </p>
                  <div className="flex justify-end mt-4">
                    <QuoteRight />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Scroller for Bullet Navigation */}
      <div className="flex justify-center items-center mt-[32px]">
        <Scroller2
          activeIndex={activeIndex}
          setActiveIndex={(index) => {
            setActiveIndex(index);
            swiperRef.current?.slideTo(index, 0, true);
          }}
        />
      </div>
    </div>
  );
}
