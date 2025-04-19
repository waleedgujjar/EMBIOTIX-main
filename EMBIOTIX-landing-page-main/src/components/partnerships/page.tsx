"use client";
import React from "react";

export const runtime = "edge";
export default function Partnerships() {
  const partners = [
    { src: "/images/arm.png", name: "ARM" },
    { src: "/images/cisco.png", name: "Cisco" },
    { src: "/images/rs.jpg", name: "Raspberry PI OS" },
    { src: "/images/st.png", name: "STMicro" },
    { src: "/images/tensor.png", name: "TensorFlow" },
    { src: "/images/nxp.png", name: "NXP" },
  ];

  return (
    <div
      data-aos="fade-up"
      className="py-10 md:py-16 bg-[#161616] overflow-hidden bg-center bg-cover w-full"
      style={{
        backgroundImage: "url(/images/partnerships.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        imageRendering: "crisp-edges",
      }}
      id="partner"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
        <h2
          className="text-white text-2xl md:text-3xl text-center font-semibold"
          style={{ fontFamily: "Melbourne" }}
        >
          Building Strong Partnerships for a Smarter Future
        </h2>

        {/* Full-width smooth infinite slider */}
        <div className="relative w-full overflow-hidden">
          <div className="slider-track flex gap-16">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {partners.map((partner, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex flex-col items-center justify-center min-w-[140px] mx-2 text-center text-white opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-16 w-auto object-contain mb-2"
                    />
                    <span className="text-xs md:text-sm">{partner.name}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for sliding */}
      <style jsx>{`
        .slider-track {
          animation: slide-left 30s linear infinite;
          width: max-content;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
