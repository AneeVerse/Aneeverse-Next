"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import ServicesMegaMenu from "./megamenu/ServicesMegaMenu";
import Button from "../common/Button";
import Link from "next/link";
import ResourcesMegaMenu from "./megamenu/ResourcesMegaMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // State for colors
  const [color, setColor] = useState({
    text: pathName === "/" ? "#EBFAFE" : "#073742",
    bg: "#ebfafe00",
  });

  // Update color dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        setColor({
          text: "#073742",
          bg: "#EBFAFE",
        });
      } else {
        setScrolled(false);
        setColor({
          text: pathName === "/" ? "#EBFAFE" : "#073742",
          bg: "#ebfafe00",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathName]);

  // Ensure color is updated correctly on route change
  useEffect(() => {
    setColor({
      text: pathName === "/" ? "#EBFAFE" : "#073742",
      bg: "#ebfafe00",
    });
  }, [pathName]);

  return (
    <nav
      className={`fixed top-0 w-full h-[80px] px-2 flex items-center z-40 transition-all duration-300 bg-[${color.bg}]`}
    >
      <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold flex items-center">
          <span className={`text-[${color.text}]`}>aneeverse</span>
        </Link>

        {/* Large Screen Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <ServicesMegaMenu color={color} />
          <Link
            href="#pricing"
            className={`hover:text-purple-500 text-[${color.text}]`}
          >
            Our Work
          </Link>
          <ResourcesMegaMenu color={color} />
          <Link
            href="#pricing"
            className={`hover:text-purple-500 text-[${color.text}]`}
          >
            Pricing 
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href={"/contact"} className={`text-[${pathName != "/" ? "#EBFAFE" : (color.bg !=  "#EBFAFE") ?  "#073742":  "#EBFAFE" }] bg-[${color.text}] text-sm border border-[${color.bg}]  px-6 py-[10px] rounded-full`}>
            Book a Call
          </Link>
          <Link href={"/login"} className={`text-[${color.text}] text-sm bg-[${color.bg}] border border-[${color.text}] px-6 py-[10px] rounded-full`}>
            Login
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className={`lg:hidden text-2xl ${
            scrolled ? "text-[#073742]" : color.text
          }`}
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar for small screens */}
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </nav>
  );
};

export default Navbar;
