// import ClientImage from "@/assets/clientimage";
// import QuoteRight from "@/assets/quoteRight";
// import ReviewStars from "@/assets/reviewStars";
// import Scroller from "@/assets/scroller";
// import React from "react";

// export default function ClientReviews() {
//   const client_reviews = [
//     {
//       name: "Alfredo Lubin",
//       description:
//         "“Amazing UI/UX design and development. They understood our vision and delivered a product that stands out.”.",
//       img: "/images/customer1.png",
//     },
//     {
//       name: "Alfredo Lubin",
//       description:
//         "Their AI solutions transformed our business! The team is professional, and their work exceeded expectations.",
//       img: "/images/customer1.png",
//     },
//     {
//       name: "Angel Mango",
//       description:
//         "Amazing UI/UX design and development. They understood our vision and delivered a product that stands out.",
//       img: "/images/customer2.png",
//     },
//   ];
//   return (
//     <div className=" bg-[#0f0f0f] md:px-[80px] md:py-[60px] px-[40px] py-[30px]">
//       <div className="flex flex-col justify-center items-center">
//         <button
//           className="w-[111px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]"
//           style={{ fontFamily: "Melbourne" }}
//         >
//           Testimonials
//         </button>
//         <p
//           className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px] text-center"
//           style={{ fontFamily: "Melbourne" }}
//         >
//           What Our Clients Say About Us
//         </p>
//         <p
//           className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] text-center max-w-[768px]"
//           style={{ fontFamily: "Melbourne" }}
//         >
//           See how our expertise in AI, IoT, and development has made a
//           difference for our partners.
//         </p>
//       </div>
//       <div className="mt-[40px] flex flex-col gap-[32px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-[32px] gap-[12px]">
//           {client_reviews.map((review, index) => (
//             <div
//               key={index}
//               className={` p-[24px] rounded-[10px] border border-[#333] rounded-tl-[40px] rounded-br-[40px] ${
//                 index === 1 ? "bg-[#e6ffcd]" : "bg-[#161616]"
//               }`}
//             >
//               <div className="flex gap-[6px]">
//                 <img src={review?.img} alt="Customer Image" />
//                 <div className="flex flex-col gap-[6px]">
//                   <p
//                     className={` md:text-[24px] text-[16px] ${
//                       index === 1 ? "text-[#000]" : "text-[#fff]"
//                     } `}
//                     style={{ fontFamily: "Melbourne" }}
//                   >
//                     {review?.name}
//                   </p>
//                   <div className="flex">
//                     <ReviewStars />
//                     <ReviewStars />
//                     <ReviewStars />
//                     <ReviewStars />
//                     <ReviewStars />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-stretch">
//                 <p
//                   className={`md:text-[24px] text-[16px] mt-[32px] ${
//                     index === 1 ? "text-[#000]" : "text-[#fff]"
//                   }`}
//                   style={{ fontFamily: "Melbourne" }}
//                 >
//                   {review?.description}
//                 </p>
//                 <div className="flex justify-end mt-[24px]">
//                   <QuoteRight />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center items-center">
//           <Scroller />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import QuoteRight from "@/assets/quoteRight";
import ReviewStars from "@/assets/reviewStars";
import Scroller from "@/assets/scroller";
import { Swiper as SwiperClass } from "swiper";
import Scroller2 from "@/assets/scroller2";
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
        "You can tell they care about what they do, always responsive, thoughtful, and genuinely invested in our project’s success.",
      img: "/images/customer2.png",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="bg-[#0f0f0f] md:px-[80px] md:pt-[60px] px-[40px] py-[30px]"
    >
      <div
        data-aos="fade-down-right"
        className="flex flex-col justify-center items-center"
      >
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

      {/* Swiper Component */}
      <div className="mt-[40px]">
        <Swiper
          pagination={false} // Disable default pagination bullets
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={2}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1200: { slidesPerView: 3, centeredSlides: true },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {client_reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                data-aos="fade-down-right"
                className={`p-[24px] md:h-[357px] h-[300px] rounded-[10px] border border-[#333] rounded-tl-[40px] rounded-br-[40px] ${
                  index === activeIndex ? "bg-[#e6ffcd]" : "bg-[#161616]"
                }`}
              >
                <div className="flex gap-[6px]">
                  <img src={review?.img} alt="Customer Image" />
                  <div className="flex flex-col gap-[6px]">
                    <p
                      className={`md:text-[24px] text-[16px] ${
                        index === activeIndex ? "text-[#000]" : "text-[#fff]"
                      }`}
                    >
                      {review?.name}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <ReviewStars key={i} />
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

      {/* Custom Scroller for Bullet Navigation */}
      <div className="flex justify-center items-center mt-[32px]">
        <Scroller2
          activeIndex={activeIndex}
          setActiveIndex={(index) => swiperRef?.current?.slideToLoop(index)}
        />
      </div>
    </div>
  );
}
