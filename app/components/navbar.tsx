"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../globals.css";

const Navbar = () => {
  const [isClick, setisclick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setisclick(!isClick);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <nav
        className={`bg-[#0f0f0f] w-full z-50  fixed text-white ${
          isScrolled ? "bg-[#1c1c1cd4] backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className=" text-2xl">
                <Link
                  href="#landing">
                  sadee
                </Link>
                  </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <Link
                  href="#about"
                  className=" hover:text-[#147CE5] p-2"
                >
                  About
                </Link>
                <Link
                  href="/#project"
                  className=" hover:text-[#147CE5] p-2"
                >
                  Project
                </Link>
                <Link
                  href="/#contact"
                  className=" hover:text-[#147CE5] p-2"
                >
                  Contact
                </Link>
                <button className="bg-[#147CE5] hover:bg-green-500 hover:scale-[1.05] duration-100 rounded-[5px] h-[40px] w-[130px]">
                  <a href="https://drive.google.com/uc?export=download&id=1Nv1gIVGsVATIZZJx4R-g-Vn_jHI00Om6"
                    className="text-white rounded-md inline-block">
                    Download CV
                  </a>
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none  focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6H16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-50 ">
              <Link
                href="#about"
                className=" block hover:text-[#147CE5] rounded-lg p-2 hover:translate-x-2 duration-150"
              >
                About
              </Link>
              <Link
                href="#project"
                className=" block hover:text-[#147CE5] rounded-lg p-2 hover:translate-x-2 duration-150"
              >
                Project
              </Link>
              <Link
                href="#contact"
                className=" block hover:text-[#147CE5] rounded-lg p-2 hover:translate-x-2 duration-150"
              >
                Contact
              </Link>
              <Link
                href="https://drive.google.com/uc?export=download&id=1Nv1gIVGsVATIZZJx4R-g-Vn_jHI00Om6"
                className=" block hover:text-[#147CE5] rounded-lg p-2 hover:translate-x-2 duration-150"
              >
                Download CV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
