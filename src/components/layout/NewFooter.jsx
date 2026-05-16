"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Layout from "../common/Layout";
import AnimatedButton from "../common/AnimatedButton";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function NewFooter() {
  const pathname = usePathname();
  const isAdsEcommerce = pathname === "/ads-ecommerce";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const footerData = {
    services: {
      heading: "Services",
      items: [
        {
          title: "Creative Design",
          links: [
            { title: "Ad Creative", link: "/services/ad-creative" },
            { title: "Presentation Design", link: "/services/presentation-design" },
            { title: "Branding System & Merchandise", link: "/services/branding-services" },
            { title: "Ebook, Report & Print Design", link: "/services/ebook-digital-report" },
          ],
        },
        {
          title: "Specialized Solutions",
          links: [
            { title: "Platform Development", link: "/services/platform-development" },
            { title: "UI, UX & Web Development", link: "/services/ui-ux-web-development" },
            { title: "Copywriting", link: "/services/copywriting" },
            { title: "SEO & Blog Writing", link: "/services/blog-writing" },
          ],
        },
        {
          title: "AI & Automation",
          links: [
            { title: "AI SEO (GEO) (AEO) (AIO)", link: "/services/ai-seo-geo-aeo-aio" },
            { title: "n8n Workflows", link: "/services/n8n-workflows" },
            { title: "Sales & Marketing Automation", link: "/services/sales-marketing-automation" },
          ],
        },
        {
          title: "Marketing",
          links: [
            { title: "Marketing Strategy", link: "/services/marketing-strategy" },
            { title: "Email Design & Campaign", link: "/services/email-campaign" },
          ],
        },
      ],
    },
    navigation: {
      heading: "Navigation",
      sections: {
        items: [
          {
            title: "Company",
            links: [
              { title: "About Us", link: "/about" },
              { title: "Our Team", link: "/our-team" },
              { title: "Pricing", link: "/pricing" },
              { title: "Contact Us", link: "/contact" },
            ],
          },
          {
            title: "Resources",
            links: [
              { title: "Blog", link: "/blog" },
              { title: "Customer Stories", link: "/customer-stories" },
              { title: "Our Works", link: "/works" },
              { title: "FAQ", link: "/faq" },
            ],
          },
        ],
      },
    },
    legal: [
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Terms of Service", link: "/terms-of-service" },
      { title: "Status page", link: "/status" },
      { title: "DMCA", link: "/dmca" },
    ],
  };

  return (
    <footer className="bg-secondary-500 relative text-white">
      {/* Desktop version */}
      <div className="hidden md:block pt-16 pb-6">
        {/* overlap image bg */}
        <Image
          src="/footer2.jpg"
          alt="Footer background"
          fill
          className="object-cover -z-0"
          quality={75}
          priority={false}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary-500 opacity-50 z-0"></div>
        <Layout className="relative z-10">
          {/* Top Sections */}
          <div className=" text-center">
            <Heading
              level="h2"
              color="gredient"
              spacing="lg"
              className="text-center font-semibold"
            >
              DESIGN, OPTIMIZE, ADVERTISE{" "}
              <AccentText size="lg" className={" block text-orange-400 mt-2 "}>
                we got you covered.
              </AccentText>
            </Heading>

            <AnimatedButton
              href={isAdsEcommerce ? "#platform-solutions" : "/contact"}
              className="mt-2 px-6 py-3 rounded-full font-medium text-secondary-500 bg-primary-500 border border-primary-500 hover:bg-secondary-500 hover:text-[#EBFAFE] transition-colors"
              mainTextSlide="-130%"
              duplicateTextStart="100%"
              duplicateTextEnd="-100%"
            >
              GET STARTED
            </AnimatedButton>
          </div>
          <div className="mt-16 border-b border-gray-600 pb-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isAdsEcommerce ? (
                <>
                  {/* Centered horizontal links for Ads Ecommerce Page */}
                  <div className="flex flex-col gap-6 py-4 md:col-span-2 items-center text-center">
                    {/* Quick Links Row */}
                    <div className="w-full">
                      <h3 className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                        Quick Links
                      </h3>
                      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        {[
                          { title: "Home", link: "/" },
                          { title: "Services", link: "/#services" },
                          { title: "Blog", link: "/blog" },
                          { title: "About Us", link: "/about" },
                          { title: "Contact", link: "/contact" },
                        ].map((val, i, arr) => (
                          <div key={i} className="flex items-center">
                            <Link href={val.link} className="text-[14px] text-[#c9c9c9] hover:text-white transition-all duration-300 font-medium">
                              {val.title}
                            </Link>
                            {i !== arr.length - 1 && (
                              <span className="ml-6 text-white/30 font-bold text-[10px]">/</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Marketplace & Creative Services Row */}
                    <div className="w-full">
                      <h3 className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                        Marketplace & Creative Services
                      </h3>
                      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        {[
                          { title: "Amazon Management", link: "/ads-ecommerce" },
                          { title: "eBay Management", link: "/ads-ecommerce" },
                          { title: "Etsy Management", link: "/ads-ecommerce" },
                          { title: "Ad Creative", link: "/services/ad-creative" },
                          { title: "Copywriting", link: "/services/copywriting" },
                          { title: "SEO", link: "/services/blog-writing" },
                          { title: "Branding", link: "/services/branding-services" },
                        ].map((val, i, arr) => (
                          <div key={i} className="flex items-center">
                            <Link href={val.link} className="text-[14px] text-[#c9c9c9] hover:text-white transition-all duration-300 font-medium">
                              {val.title}
                            </Link>
                            {i !== arr.length - 1 && (
                              <span className="ml-6 text-white/30 font-bold text-[10px]">/</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Standard Services Section */}
                  <div className="">
                    <h3 className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4">
                      {footerData.services.heading}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {footerData.services.items.map((item, index) => (
                        <div key={index}>
                          <Link href={item.links} className="font-medium mb-2 block">
                            {item.title} <FiArrowUpRight className="text-md inline-block" />
                          </Link>
                          <ul>
                            {item.links.map((val, i) => (
                              <Link
                                href={val.link}
                                key={i}
                                className="text-sm text-[#c9c9c9] mb-2 block cursor-pointer hover:underline"
                              >
                                {val.title}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standard Navigation Section */}
                  <div className="">
                    <h3 className="text-lg  border-b border-gray-200 pb-1 font-semibold mb-4">
                      {footerData.navigation.heading}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {footerData.navigation.sections.items.map((item, index) => (
                        <div key={index}>
                          <Link href={item.links} className="font-medium mb-2 block">
                            {item.title}
                          </Link>
                          <ul>
                            {item.links.map((val, i) => (
                              <Link
                                href={val.link}
                                key={i}
                                className="text-sm text-[#c9c9c9] block mb-2 cursor-pointer hover:underline"
                              >
                                {val.title}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="text-center md:text-left  tracking-wide text-4xl mt-6 mb-2 font-bold block">
            aneeverse
          </div>

          {/* Bottom Section */}
          <div className=" flex flex-col lg:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="text-center flex flex-col items-center md:flex-row justify-between w-full ">
              <div>


                <p className="text-sm">
                  &copy; 2025 Aneeverse. All rights reserved.
                </p>
              </div>
              <ul className="flex flex-col sm:flex-row justify-center mt-3 md:mt-0 gap-4 text-sm ">
                {footerData.legal.map((legalItem, index) => (
                  <li key={index}>
                    <Link href={legalItem.link} className="hover:underline block">
                      {legalItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Social Links */}
              <div className=" gap-4 flex justify-center mt-4 md:mt-0">
                <Link
                  href="https://www.instagram.com/aneeverse/"
                  target="_blank"
                  className="border border-gray-200 rounded-full p-2"
                >
                  <FaInstagram className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/aneeverse"
                  target="_blank"
                  className="border border-gray-200 rounded-full p-2"
                >
                  <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
                </Link>
                <Link
                  href="https://www.youtube.com/@AneeVerse"
                  target="_blank"
                  className="border border-gray-200 rounded-full p-2"
                >
                  <FaYoutube className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      {/* Mobile version - Superside style */}
      <div className="md:hidden text-white">

        {/* Hero Section for Mobile - with background image */}
        <div className="relative bg-secondary-500">
          {/* overlap image bg for mobile hero only */}
          <Image
            src="/footer2.jpg"
            alt="Footer background"
            fill
            className="object-cover -z-0"
            quality={75}
            priority={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary-500 opacity-50 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
            <div className="text-center">
              <Heading
                level="h2"
                color="gredient"
                spacing="lg"
                className="text-center font-semibold"
              >
                DESIGN, OPTIMIZE, ADVERTISE{" "}
                <AccentText size="lg" className={" block text-orange-400 mt-2 "}>
                  we got you covered.
                </AccentText>
              </Heading>

              <AnimatedButton
                href={isAdsEcommerce ? "#platform-solutions" : "/contact"}
                className="mt-6 px-6 py-3 rounded-full font-medium text-secondary-500 bg-primary-500 border border-primary-500 hover:bg-secondary-500 hover:text-[#EBFAFE] transition-colors"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                GET STARTED
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Clean background for accordions */}
        <div className="bg-[#092c30]">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {isAdsEcommerce ? (
              <div className="space-y-10">
                {/* Custom Mobile Links for Ads Ecommerce Page */}
                <div>
                  <h3 className="text-lg font-bold border-b border-white/10 pb-3 mb-6 text-white">Quick Links</h3>
                  <div className="flex flex-wrap items-center gap-y-4">
                    {[
                      { title: "Home", link: "/" },
                      { title: "Services", link: "/#services" },
                      { title: "Blog", link: "/blog" },
                      { title: "About Us", link: "/about" },
                      { title: "Contact", link: "/contact" }
                    ].map((val, i, arr) => (
                      <div key={i} className="flex items-center">
                        <Link href={val.link} className="text-[15px] text-[#c9c9c9] hover:text-white transition-colors font-medium">
                          {val.title}
                        </Link>
                        {i !== arr.length - 1 && (
                          <span className="mx-3 text-white/20 font-light text-xs">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold border-b border-white/10 pb-3 mb-6 text-white">Services</h3>
                  <div className="flex flex-wrap items-center gap-y-4">
                    {[
                      { title: "Amazon Management", link: "/ads-ecommerce" },
                      { title: "eBay Management", link: "/ads-ecommerce" },
                      { title: "Etsy Management", link: "/ads-ecommerce" },
                      { title: "Ad Creative", link: "/services/ad-creative" },
                      { title: "Copywriting", link: "/services/copywriting" },
                      { title: "SEO", link: "/services/blog-writing" },
                      { title: "Branding", link: "/services/branding-services" }
                    ].map((val, i, arr) => (
                      <div key={i} className="flex items-center">
                        <Link href={val.link} className="text-[15px] text-[#c9c9c9] hover:text-white transition-colors font-medium">
                          {val.title}
                        </Link>
                        {i !== arr.length - 1 && (
                          <span className="mx-3 text-white/20 font-light text-xs">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Standard Services Accordion */}
                <div className="border-b border-gray-600 py-4">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-medium">Services</h3>
                    <div className="text-gray-400">
                      {servicesOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: servicesOpen ? "auto" : 0,
                      opacity: servicesOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {servicesOpen && (
                      <div className="pt-4 space-y-4">
                        {footerData.services.items.map((item, index) => (
                          <div key={index}>
                            <div className="font-medium text-white mb-2">
                              {item.title}
                            </div>
                            <ul className="space-y-2 pl-4">
                              {item.links.map((val, i) => (
                                <li key={i}>
                                  <Link
                                    href={val.link}
                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                  >
                                    {val.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Standard Navigation Accordion */}
                <div className="border-b border-gray-600 py-4">
                  <button
                    onClick={() => setNavigationOpen(!navigationOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-medium">Navigation</h3>
                    <div className="text-gray-400">
                      {navigationOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: navigationOpen ? "auto" : 0,
                      opacity: navigationOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {navigationOpen && (
                      <div className="pt-4 space-y-4">
                        {footerData.navigation.sections.items.map((item, index) => (
                          <div key={index}>
                            <div className="font-medium text-white mb-2">
                              {item.title}
                            </div>
                            <ul className="space-y-2 pl-4">
                              {item.links.map((val, i) => (
                                <li key={i}>
                                  <Link
                                    href={val.link}
                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                  >
                                    {val.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </>
            )}

            {/* Brand name */}
            <div className="py-8">
              <div className="text-3xl font-bold text-center">
                aneeverse
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-300">
                © 2025 Aneeverse. All rights reserved.
              </p>
            </div>

            {/* Legal links */}
            <div className="text-center mb-6">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                {footerData.legal.map((legalItem, index) => (
                  <Link
                    key={index}
                    href={legalItem.link}
                    className="hover:text-white transition-colors"
                  >
                    {legalItem.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.instagram.com/aneeverse/"
                target="_blank"
                className="p-3 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/aneeverse"
                target="_blank"
                className="p-3 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@AneeVerse"
                target="_blank"
                className="p-3 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
