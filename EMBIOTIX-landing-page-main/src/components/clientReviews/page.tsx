"use client";

import React, { useState, useEffect } from "react";
import QuoteRight from "@/assets/quoteRight";
import ReviewStars from "@/assets/reviewStars";
import Scroller2 from "@/assets/scroller2";

/* ── TESTIMONIAL DATA ─────────────────────── */
const reviews = [
  {
    name: "Alfredo Lubin",
    description:
      "“Working with Embiotix felt like having an in‑house tech team. They really took the time to understand what we needed.”",
    img: "/images/customer1.png",
  },
  {
    name: "Maria Jensen",
    description:
      "We’re not super technical, but the team made everything easy to follow. Great people, great service.",
    img: "/images/customer1.png",
  },
  {
    name: "Angel Mango",
    description:
      "You can tell they care about what they do—always responsive, thoughtful, and genuinely invested in our project’s success.",
    img: "/images/customer2.png",
  },
];

/* ── HELPER: rotate array so idx becomes centre (position 1) ── */
function rotateToCenter(arr: typeof reviews, originalIdx: number) {
  /* Find where that original item currently is */
  const currentCenter = arr[1];
  const currentCenterOriginalIdx = reviews.indexOf(currentCenter);
  const shift =
    (originalIdx - currentCenterOriginalIdx + reviews.length) %
    reviews.length;

  let out = arr;
  for (let i = 0; i < shift; i++) out = [...out.slice(1), out[0]];
  return out;
}

/* ── COMPONENT ────────────────────────────── */
export default function ClientReviews() {
  const [cards, setCards] = useState(reviews); // order state

  /* Arrow‑key navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setCards(([a, ...rest]) => [...rest, a!]); // forward
      if (e.key === "ArrowLeft")
        setCards((p) => [p[p.length - 1], ...p.slice(0, -1)]); // back
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Centre = index 1 in our 3‑up flex row */
  const isActive = (idx: number) => idx === 1;

  /* Active index for dot navigation */
  const activeIndex = 1;

  /* When user clicks a dot or card */
  const bringToCenter = (originalIdx: number) =>
    setCards((curr) => rotateToCenter(curr, originalIdx));

  return (
    <div className="bg-[#0f0f0f] md:px-[80px] md:pt-[60px] px-[20px] py-[30px]">
      {/* ── HEADER ── */}
      <div className="flex flex-col items-center text-center">
        <button className="w-[111px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]">
          Testimonials
        </button>
        <p className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px]">
          What Clients Say About Us
        </p>
        <p className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] max-w-[768px]">
          See how our expertise in AI, IoT, and development has made a
          difference for our partners.
        </p>
      </div>

      {/* ── CARDS ── */}
      <div className="mt-[40px] flex flex-col lg:flex-row gap-[30px] items-center lg:justify-center">
        {cards.map((card, idx) => {
          const active = isActive(idx);
          return (
            <div
              key={card.name}
              onClick={() => bringToCenter(reviews.indexOf(card))}
              className={`cursor-pointer
                          p-[24px] w-full max-w-[360px] md:h-[357px] h-auto
                          border border-[#333] rounded-[10px] rounded-tl-[40px] rounded-br-[40px]
                          transition-all duration-300
                          hover:-translate-y-1 hover:shadow-lg
                          ${
                            active
                              ? "bg-[#e6ffcd] scale-100"
                              : "bg-[#161616] opacity-70 lg:scale-95"
                          }`}
            >
              {/* top row */}
              <div className="flex gap-[6px]">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-[50px] h-[50px]"
                />
                <div className="flex flex-col gap-[6px]">
                  <p
                    className={`md:text-[24px] text-[16px] font-semibold ${
                      active ? "text-[#000]" : "text-[#fff]"
                    }`}
                  >
                    {card.name}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <ReviewStars key={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="flex flex-col justify-between mt-4 h-[70%]">
                <p
                  className={`lg:text-[24px] text-[16px] ${
                    active ? "text-[#000]" : "text-[#fff]"
                  }`}
                >
                  {card.description}
                </p>
                <div className="flex justify-end mt-4">
                  <QuoteRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DOT NAV ── */}
      <div className="flex justify-center items-center mt-[32px]">
        <Scroller2
          activeIndex={activeIndex}
          setActiveIndex={(index) => {
            bringToCenter(index);
          }}
        />
      </div>
    </div>
  );
}
