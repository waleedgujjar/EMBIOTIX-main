"use client";
import { useState } from "react";
import Link from "next/link";

export const runtime = "edge";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav data-aos="fade-up" className="bg-black fixed w-full z-20 top-0 left-0">
      <div className="py-[20px] lg:px-[80px] md:px-[35px] sm:px-[20px] px-[10px] flex justify-between items-center">
        <img
          src="/images/Logo.png"
          alt="logo"
          className="md:w-[238px] md:h-[35px] h-[24px] w-[138px]"
        />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-[40px]">
          {[{ href: "#", label: "Home" }, { href: "#experience", label: "About" }, { href: "#services", label: "Services" }, { href: "#team", label: "Team" }].map((item, index) => (
            <Link key={index} href={item.href}>
              <p className="relative text-[16px] text-white font-[Melbourne] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#89f436] after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center">
          <Link href="#contact">
            <button className="md:block hidden md:w-[111px] md:h-[40px] w-[90px] h-[35px] bg-[#89F436] text-black rounded-md md:text-[16px] text-[13px] border border-[#89F436] transition-all duration-300 hover:bg-transparent hover:text-[#89F436]" style={{ fontFamily: "Melbourne" }}>
              Contact Us
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="ml-4 inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#89f436] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black py-[20px] px-[40px] flex flex-col gap-4">
          {[{ href: "#", label: "Home" }, { href: "#experience", label: "About" }, { href: "#services", label: "Services" }, { href: "#team", label: "Team" }, { href: "#contact", label: "Contact Us" }].map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                onClick={() => setMenuOpen(false)}
                className="relative text-[16px] text-white font-[Melbourne] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#89f436] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
