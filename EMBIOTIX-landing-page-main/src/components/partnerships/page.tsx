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
      className="py-10 md:py-16 bg-[#161616] overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url(/images/partnerships.png)" }}
      id="partner"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
        <h2
          className="text-white text-2xl md:text-3xl text-center font-semibold"
          style={{ fontFamily: "Melbourne" }}
        >
          Building Strong Partnerships for a Smarter Future
        </h2>

        {/* Scrolling slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {partners.map((partner, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex flex-col items-center justify-center min-w-[100px] mx-2 text-center text-white opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-10 w-auto object-contain mb-2"
                    />
                    <span className="text-xs md:text-sm">{partner.name}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
