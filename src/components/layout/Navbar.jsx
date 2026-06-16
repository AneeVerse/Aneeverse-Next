"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import ServicesMegaMenu from "./megamenu/ServicesMegaMenu";
import Link from "next/link";
import ResourcesMegaMenu from "./megamenu/ResourcesMegaMenu";
import PortfolioMegaMenu from "./megamenu/PortfolioMegaMenu";
import { usePathname } from "next/navigation";
import Layout from "../common/Layout";
import Button from "../common/Button";
import AnimatedButton from "../common/AnimatedButton";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Check if current path is in the Why Us section
  const isWhyUsSection = pathName === "/about-us" || pathName === "/our-team";

  // Ads landing pages swap CTA text and hide Login
  const isAdsEcommerce = pathName === "/ads-ecommerce";
  const isAdsDigitalMarketing = pathName === "/ads-digital-marketing";
  const isAdsLanding = isAdsEcommerce || isAdsDigitalMarketing;

  const isLightNavPage =
    pathName === "/" ||
    pathName === "/services" ||
    pathName.includes("/services/") ||
    isAdsLanding ||
    pathName === "/customer-stories" ||
    pathName.includes("/customer-stories/") ||
    pathName === "/about-us" ||
    pathName === "/contact";

  const ctaHref = isAdsEcommerce
    ? "/ads-ecommerce#platform-cards"
    : isAdsDigitalMarketing
      ? "/ads-digital-marketing#consultation-form"
      : "/contact";
  const ctaText = isAdsEcommerce ? "Book a Free Audit" : "Book a Call";

  // State for colors
  const [color, setColor] = useState({
    text: isLightNavPage ? "#EBFAFE" : "#073742",
    bg: "transparent",
  });

  // Update color dynamically on scroll with debouncing
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            setScrolled(true);
            setColor({ text: "#073742", bg: "#EBFAFE" });
          } else {
            setScrolled(false);
            setColor({
              text: isLightNavPage ? "#EBFAFE" : "#073742",
              bg: "transparent",
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathName, isLightNavPage]);

  // Ensure color is updated correctly on route change
  useEffect(() => {
    setColor({
      text: isLightNavPage ? "#EBFAFE" : "#073742",
      bg: "transparent",
    });
  }, [pathName, isLightNavPage]);

  // Determine button text color for "Book a Call"
  const callTextColor = pathName !== "/"
    ? (pathName === "/services" || pathName.includes("/services/") || isAdsLanding || pathName === "/customer-stories" || pathName.includes("/customer-stories/") || pathName === "/about-us" || pathName === "/contact")
      ? (color.bg !== "#EBFAFE" ? "#073742" : "#EBFAFE")
      : "#EBFAFE"
    : (color.bg !== "#EBFAFE" ? "#073742" : "#EBFAFE");

  return (
    <nav
      style={{
        backgroundColor: scrolled
          ? (pathName.includes('/customer-stories') ? '#EBFAFE' : color.bg)
          : (pathName === '/' ? 'rgba(7, 55, 66, 0)' : (pathName.includes('/customer-stories') ? '#EBFAFE' : color.bg))
      }}
      className="fixed top-0 w-full h-[70px] sm:h-[80px] flex items-center z-[99] transition-all duration-300"
    >
      <Layout className="flex w-full justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl ml-2 sm:ml-0 tracking-wide font-bold flex items-center gap-0">
          <img
            src="/images/Artboard 7@2x.png"
            alt="Aneeverse Logo"
            className="h-[50px] w-auto object-contain transition-all duration-300"
            style={{
              filter: (pathName.includes('/customer-stories') || color.text === "#073742") ? "none" : "brightness(0) invert(1)",
              transform: "translateY(-1.2px)",
              marginRight: "-11px"
            }}
          />
          <span style={{ color: pathName.includes('/customer-stories') ? '#073742' : color.text, transform: "translateY(-3px)" }} className="inline-block">
            aneeverse
          </span>
        </Link>

        {/* Large Screen Menu */}
        <div className="hidden lg:flex lg:gap-6 gap-3 items-center">
          <ServicesMegaMenu color={pathName.includes('/customer-stories') ? { text: '#073742', bg: '#EBFAFE' } : color} />

          <PortfolioMegaMenu color={pathName.includes('/customer-stories') ? { text: '#073742', bg: '#EBFAFE' } : color} />

          {/* Why Us - Hidden for now */}
          {/* <WhyUsMegaMenu color={pathName.includes('/customer-stories') ? { text: '#073742', bg: '#EBFAFE' } : color} /> */}

          <ResourcesMegaMenu color={pathName.includes('/customer-stories') ? { text: '#073742', bg: '#EBFAFE' } : color} />

          <Link
            href="/pricing"
            className="flex items-center group"
            style={{ color: pathName.includes('/customer-stories') ? '#073742' : color.text }}
          >
            <span
              className="h-[5px] w-[5px] inline-block rounded-full transition-all duration-300 scale-0 group-hover:scale-100 mr-0 group-hover:mr-1.5"
              style={{ backgroundColor: pathName.includes('/customer-stories') ? '#073742' : color.text }}
            />
            <span>Pricing</span>
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <AnimatedButton
            href={ctaHref}
            className="px-6 py-2 rounded-full border"
            style={{
              color: pathName === "/about-us" ? "#073742" : (pathName.includes('/customer-stories') ? '#EBFAFE' : callTextColor),
              backgroundColor: pathName === "/about-us" ? "#EBFAFE" : (pathName.includes('/customer-stories') ? '#073742' : color.text),
              borderColor: pathName.includes('/customer-stories') ? '#EBFAFE' : color.bg
            }}
            mainTextSlide="-140%"
            duplicateTextStart="100%"
            duplicateTextEnd="-100%"
          >
            {ctaText}
          </AnimatedButton>
          {!isAdsLanding && (
            <AnimatedButton
              href="/login"
              className="px-6 py-2 rounded-full border"
              style={{
                color: pathName.includes('/customer-stories') ? '#073742' : color.text,
                backgroundColor: pathName.includes('/customer-stories') ? '#EBFAFE' : color.bg,
                borderColor: pathName.includes('/customer-stories') ? '#073742' : color.text
              }}
              mainTextSlide="-140%"
              duplicateTextStart="100%"
              duplicateTextEnd="-100%"
            >
              Login
            </AnimatedButton>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={`lg:hidden mr-2 sm:mr-0 text-2xl`}
          style={{ color: pathName.includes('/customer-stories') ? '#073742' : (scrolled ? "#073742" : color.text) }}
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </Layout>

      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
