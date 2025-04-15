import Facebook from "@/assets/facebook";
import Instagram from "@/assets/instagram";
import Linkedin from "@/assets/linkedin";
import Twitter from "@/assets/twitter";
import React from "react";
export const runtime = "edge";
export default function Footer() {
  return (
    <div data-aos="fade-up" className="bg-black md:px-[80px] px-[40px] pt-[62.99px] pb-[2.99px]">
      <div className="py-[40px] flex flex-col gap-[40px]">
        <div className="flex lg:flex-row flex-col gap-[70px] lg:justify-around">
          <div className="flex flex-col gap-[32px] lg:w-[456px]">
            <img src="/images/Logo.png" alt="logo" className="md:w-[238px] md:h-[35px] h-[24px] w-[138px]" />
            <div className="flex flex-col gap-[24px]">
              <p className="text-[20px] opacity-[90%] text-white" style={{ fontFamily: "Melbourne" }}>
                Driving digital transformation with AI, ML, IoT and innovative tech solutions
              </p>
              <div className="flex gap-[10px]">
                <Facebook />
                <Twitter />
                <Linkedin />
                <Instagram />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-[60px] text-white lg:w-[754px]">
            {[
              { title: "Company", links: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Team", href: "#team" }] },
              { title: "Help", links: [{ label: "Customer Support", href: "#support" }, { label: "Terms & Conditions", href: "#terms" }, { label: "Privacy Policy", href: "#privacy" }] },
            ].map((section, index) => (
              <div key={index} className="flex flex-col gap-[32px]">
                <p className="text-[20px]" style={{ fontFamily: "Melbourne" }}>{section.title}</p>
                <div className="flex flex-col gap-[24px]">
                  {section.links.map((link, idx) => (
                    <a key={idx} href={link.href} className="text-[16px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#89f436] after:transition-all after:duration-300 hover:after:w-full" style={{ fontFamily: "Melbourne" }}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-[20px] flex flex-col gap-[20px]" style={{ fontFamily: "Melbourne" }}>
              <p>Subscribe to Newsletter</p>
              <div className="flex gap-0 rounded-md">
                <input
                  type="text"
                  className="text-white placeholder:text-white md:placeholder:text-[16px] placeholder:text-[14px] bg-[#242424] md:px-[12px] md:py-[15.5px] md:h-[50px] md:w-[264px] pl-[8px] pr-[10px] py-[12px] h-[40px] w-[180px] rounded-tl-[8px] rounded-bl-[8px]"
                  placeholder="Enter Email Address"
                  style={{ fontFamily: "Melbourne" }}
                />
                <button
                  className="text-black md:text-[16px] text-[14px] bg-[#89f436] md:px-[44.5px] md:py-[15.5px] md:w-[120px] md:h-[50px] px-[20px] py-[9px] h-[40px] w-[80px] rounded-br-[8px] rounded-tr-[8px] transition-all duration-300 hover:bg-transparent hover:text-[#89f436] hover:border-[#89f436] border border-[#89f436]"
                  style={{ fontFamily: "Melbourne" }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#333] h-[1px] border-none" />
        <p className="text-[#B9B3B3] text-center text-[14px] leading-[20px] tracking-[0.5px]" style={{ fontFamily: "outfitRegular" }}>
          © Copyright 2024, All Rights Reserved by EMB
          <span className="text-[#89f436] text-[14px] leading-[20px] tracking-[0.5px]"> IOT </span>
          IX
        </p>
      </div>
    </div>
  );
}
