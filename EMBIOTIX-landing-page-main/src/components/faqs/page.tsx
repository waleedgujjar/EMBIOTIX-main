"use client";
import IconMinus from "@/assets/iconMinus";
import IconPlus from "@/assets/iconPlus";
import React, { useState } from "react";

export const runtime = "edge";
export default function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "At Embiotix, we provide end-to-end technology solutions to help businesses innovate and scale. Our key services include:Embedded Systems Development,Network & Infrastructure Management,ata Services & AI Solutions,UI/UX Design,Web Development,Mobile Application Development"
    },
    {
      question: "How can AI & ML benefit my business?",
      answer:
        "AI and machine learning can transform your business by:Automating repetitive tasks, reducing costs and human error.Enhancing decision-making with predictive analytics and real-time insights.Improving customer experiences through chatbots, recommendation engines, and personalization.Optimizing operations with intelligent monitoring in IoT, manufacturing, and logistics.At Embiotix, we tailor AI/ML solutions to your specific needs, ensuring measurable business impact.Scalable Architecture – Future-proofing your systems for growth."
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Absolutely! At Embiotix, we understand that every business has unique challenges. We specialize in custom-built solutions across embedded systems, AI, web, and mobile development. Our approach includes:Requirement Analysis – Understanding your goals and technical needs.Tailored Development – Designing solutions that align with your workflows."
    },
    {
      question: "What industries do you work with?",
      answer:
        "We serve a diverse range of industries, including:Healthcare – IoT-enabled medical devices, AI diagnostics, and telemedicine solutions.Manufacturing & Industrial Automation – Embedded control systems and predictive maintenance.Smart Cities & Infrastructure – Network management, IoT sensors, and data-driven urban solutions.•	Retail & E-commerce – AI-driven analytics, inventory management, and personalized shopping experiences.Finance & FinTech – Secure transaction systems, fraud detection, and automated trading.Transportation & Logistics – Fleet management, route optimization, and real-time tracking.Our cross-industry expertise ensures we deliver innovative, scalable, and secure solutions tailored to your sector."
    },

  ];

  return (
    <div
      data-aos="fade-up"
      className="bg-[#0f0f0f] md:px-[80px] md:py-[60px] px-[40px] py-[30px] flex flex-col gap-[40px]"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex flex-col justify-center items-center"
      >
        <p
          className="w-[52px] h-[28px] flex justify-center items-center text-[#89f436] bg-[#171F05] border border-[#364C09] rounded-full text-[14px]"
          style={{ fontFamily: "Melbourne" }}
        >
          FAQ
        </p>
        <p
          className="text-white mt-[12px] text-[24px] md:text-[34px] lg:text-[40px] text-center"
          style={{ fontFamily: "Melbourne" }}
        >
          Frequently asked questions
        </p>
        <p
          className="text-[#7a7b7a] md:text-[20px] text-[16px] mt-[20px] text-center max-w-[768px]"
          style={{ fontFamily: "Melbourne" }}
        >
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-8 lg:px-[256px]">
        {faqData.map((faq, index) => (
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={index}
            className="flex flex-col"
          >
            {index !== 0 && <hr className="bg-[#333] h-[1px] border-none" />}
            <div className="mt-6 flex justify-between">
              <p
                className="md:text-20 text-16 text-white"
                style={{ fontFamily: "Melbourne" }}
              >
                {faq.question}
              </p>
              <div
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="cursor-pointer"
              >
                {expandedIndex === index ? (
                  <IconMinus className="w-6 h-[26px]" />
                ) : (
                  <IconPlus className="w-6 h-[26px]" />
                )}
              </div>
            </div>
            {expandedIndex === index && (
              <p
                className="text-16 text-[#7a7b7a] mt-2 md:mr-[48px]"
                style={{ fontFamily: "Melbourne" }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="bg-[#e6ffcd] flex flex-col gap-[32px] py-[24px] px-[32px] items-center rounded-[10px]"
      >
        <img
          src="/images/Avatargroup.png"
          alt="Avatar Group"
          className="w-[120px] h-[56px]"
        />
        <div>
          <p
            className="text-[20px] text-[#000] text-center"
            style={{ fontFamily: "Melbourne" }}
          >
            Still have questions?
          </p>
          <p
            className="text-[16px] text-[#161616] text-center"
            style={{ fontFamily: "Melbourne" }}
          >
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button
          className="md:w-[123px] h-[40px] w-full bg-[#171f05] text-[16px] border border-[#364c09] text-[#89f436] rounded-[10px]"
          style={{ fontFamily: "Melbourne" }}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
