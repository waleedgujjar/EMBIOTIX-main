"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ghufran Khan",
    role: "CEO",
    desc: "Ghufran is the visionary leader driving the company’s mission and long-term strategy. With a deep understanding of market trends and a passion for innovation, he ensures that all departments align with the core objectives of sustainable growth, operational excellence, and customer satisfaction.",
    img: "/images/CEO.jpeg",
  },
  {
    name: "Ahmad Numan",
    role: "CTO",
    desc: "Ahmad leads the technology roadmap and architecture of the company. He specializes in scalable system design, infrastructure security, and modern engineering practices. He drives the development of future-ready solutions that power the company’s digital products.",
    img: "/images/CTO.jpg",
  },
  {
    name: "Muhammad Asjad",
    role: "CMO",
    desc: "Asjad crafts strategic marketing initiatives that elevate brand visibility. His expertise in digital campaigns and storytelling helps the company connect with its audience and maintain a strong market presence.",
    img: "/images/CMO.jpeg",
  },
  {
    name: "Humza Jaffar",
    role: "UI/UX Lead",
    desc: "Humza ensures that all products are visually appealing and intuitive. With a focus on user-centric design, he bridges the gap between aesthetics and functionality, creating memorable user experiences.",
    img: "/images/humza.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-12" id="team">
      <h2 className="text-white text-3xl md:text-4xl text-center mb-10">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {team.map((person, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="bg-[#1a1a1a] w-full max-w-[296px] h-auto mx-auto p-6 rounded-xl border border-[#89f436]/30 text-left flex flex-col items-start shadow-sm"
          >
            <Image
              src={person.img}
              alt={person.name}
              width={64}
              height={64}
              className="rounded-full object-cover object-top w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-base">{person.name}</h3>
            <p className="text-white text-sm font-medium">{person.role}</p>
            <p className="text-[#d1d1d1] text-xs leading-relaxed mt-2 opacity-70">
              {person.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
