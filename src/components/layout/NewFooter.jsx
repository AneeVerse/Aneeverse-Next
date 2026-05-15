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

  const socialLinks = [
    { href: "https://www.instagram.com/aneeverse/", icon: FaInstagram },
    { href: "https://www.linkedin.com/company/aneeverse", icon: FaLinkedinIn },
    { href: "https://www.youtube.com/@AneeVerse", icon: FaYoutube },
  ];

  return (
    <footer className="bg-secondary-500 relative text-white">
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block pt-16 pb-8 relative">
        <Image
          src="/footer2.jpg"
          alt="Footer background"
          fill
          className="object-cover -z-0"
          quality={75}
          priority={false}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary-500 opacity-50 z-0" />

        <Layout className="relative z-10">
          {/* Hero CTA */}
          <div className="text-center mb-14">
            <Heading level="h2" color="gredient" spacing="lg" className="text-center font-semibold">
              DESIGN, OPTIMIZE, ADVERTISE{" "}
              <AccentText size="lg" className="block text-orange-400 mt-2">
                we got you covered.
              </AccentText>
            </Heading>
            <AnimatedButton
              href="/contact"
              className="mt-2 px-6 py-3 rounded-full font-medium text-secondary-500 bg-primary-500 border border-primary-500 hover:bg-secondary-500 hover:text-[#EBFAFE] transition-colors"
              mainTextSlide="-130%"
              duplicateTextStart="100%"
              duplicateTextEnd="-100%"
            >
              GET STARTED
            </AnimatedButton>
          </div>

          {/* Links grid */}
          <div className="border-b border-gray-600 pb-10">
            {isAdsEcommerce ? (
              <div className="flex flex-col gap-8 py-4">
                <div>
                  <h3 className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                    Quick Links
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {[
                      { title: "Home", link: "/" },
                      { title: "Services", link: "/#services" },
                      { title: "Blog", link: "/blog" },
                      { title: "About Us", link: "/about" },
                      { title: "Contact", link: "/contact" },
                    ].map((val, i, arr) => (
                      <div key={i} className="flex items-center">
                        <Link
                          href={val.link}
                          className="text-[14px] text-[#c9c9c9] hover:text-white transition-all duration-300 font-medium hover:tracking-wider"
                        >
                          {val.title}
                        </Link>
                        {i !== arr.length - 1 && (
                          <span className="ml-6 text-primary-500/50 font-bold text-[10px]">/</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                    Marketplace & Creative Services
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
                        <Link
                          href={val.link}
                          className="text-[14px] text-[#c9c9c9] hover:text-white transition-all duration-300 font-medium hover:tracking-wider"
                        >
                          {val.title}
                        </Link>
                        {i !== arr.length - 1 && (
                          <span className="ml-6 text-primary-500/50 font-bold text-[10px]">/</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
                {/* Services — 2-column internal grid */}
                <div>
                  <h3 className="text-base font-semibold border-b border-gray-500 pb-2 mb-6">
                    {footerData.services.heading}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {footerData.services.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium text-white mb-3 flex items-center gap-1 text-sm">
                          {item.title} <FiArrowUpRight className="text-sm flex-shrink-0" />
                        </p>
                        <ul className="space-y-2">
                          {item.links.map((val, i) => (
                            <li key={i}>
                              <Link
                                href={val.link}
                                className="text-sm text-[#c9c9c9] hover:text-white hover:underline transition-colors block"
                              >
                                {val.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation — 2-column internal grid */}
                <div>
                  <h3 className="text-base font-semibold border-b border-gray-500 pb-2 mb-6">
                    {footerData.navigation.heading}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {footerData.navigation.sections.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium text-white mb-3 text-sm">{item.title}</p>
                        <ul className="space-y-2">
                          {item.links.map((val, i) => (
                            <li key={i}>
                              <Link
                                href={val.link}
                                className="text-sm text-[#c9c9c9] hover:text-white hover:underline transition-colors block"
                              >
                                {val.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom bar — 2-row layout */}
          <div className="pt-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold tracking-wide">aneeverse</span>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    className="border border-gray-500 rounded-full p-2 hover:border-white transition-colors"
                  >
                    <Icon className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-300">
              <p>&copy; 2025 Aneeverse. All rights reserved.</p>
              <ul className="flex flex-wrap gap-4 justify-end">
                {footerData.legal.map((legalItem, index) => (
                  <li key={index}>
                    <Link
                      href={legalItem.link}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {legalItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden text-white">
        {/* Hero with background image */}
        <div className="relative bg-secondary-500">
          <Image
            src="/footer2.jpg"
            alt="Footer background"
            fill
            className="object-cover -z-0"
            quality={75}
            priority={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary-500 opacity-50 z-0" />
          <div className="relative z-10 px-5 py-10 text-center">
            <Heading level="h2" color="gredient" spacing="lg" className="text-center font-semibold">
              DESIGN, OPTIMIZE, ADVERTISE{" "}
              <AccentText size="lg" className="block text-orange-400 mt-2">
                we got you covered.
              </AccentText>
            </Heading>
            <AnimatedButton
              href="/contact"
              className="mt-6 px-6 py-3 rounded-full font-medium text-secondary-500 bg-primary-500 border border-primary-500 hover:bg-secondary-500 hover:text-[#EBFAFE] transition-colors"
              mainTextSlide="-130%"
              duplicateTextStart="100%"
              duplicateTextEnd="-100%"
            >
              GET STARTED
            </AnimatedButton>
          </div>
        </div>

        {/* Links + bottom */}
        <div className="bg-[#092c30] px-5 pt-2 pb-10">
          {isAdsEcommerce ? (
            <div className="space-y-8 pt-6">
              {[
                {
                  heading: "Quick Links",
                  items: [
                    { title: "Home", link: "/" },
                    { title: "Services", link: "/#services" },
                    { title: "Blog", link: "/blog" },
                    { title: "About Us", link: "/about" },
                    { title: "Contact", link: "/contact" },
                  ],
                },
                {
                  heading: "Marketplaces",
                  items: [
                    { title: "Amazon Management", link: "/ads-ecommerce" },
                    { title: "eBay Management", link: "/ads-ecommerce" },
                    { title: "Etsy Management", link: "/ads-ecommerce" },
                  ],
                },
                {
                  heading: "Creative Services",
                  items: [
                    { title: "Ad Creative", link: "/services/ad-creative" },
                    { title: "Copywriting", link: "/services/copywriting" },
                    { title: "SEO", link: "/services/blog-writing" },
                    { title: "Branding", link: "/services/branding-services" },
                  ],
                },
              ].map((group, gi) => (
                <div key={gi}>
                  <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
                    {group.heading}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((val, i) => (
                      <li key={i}>
                        <Link
                          href={val.link}
                          className="text-[#c9c9c9] hover:text-white transition-colors text-[15px] flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                          {val.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {/* Services accordion */}
              <div className="py-4">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-base font-semibold">Services</span>
                  {servicesOpen ? (
                    <FiChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <FiChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: servicesOpen ? "auto" : 0,
                    opacity: servicesOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 grid grid-cols-2 gap-x-4 gap-y-6">
                    {footerData.services.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium text-white text-sm mb-2">{item.title}</p>
                        <ul className="space-y-2">
                          {item.links.map((val, i) => (
                            <li key={i}>
                              <Link
                                href={val.link}
                                className="text-xs text-gray-300 hover:text-white transition-colors block"
                              >
                                {val.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Navigation accordion */}
              <div className="py-4">
                <button
                  onClick={() => setNavigationOpen(!navigationOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-base font-semibold">Navigation</span>
                  {navigationOpen ? (
                    <FiChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <FiChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: navigationOpen ? "auto" : 0,
                    opacity: navigationOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 grid grid-cols-2 gap-x-4 gap-y-6">
                    {footerData.navigation.sections.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium text-white text-sm mb-2">{item.title}</p>
                        <ul className="space-y-2">
                          {item.links.map((val, i) => (
                            <li key={i}>
                              <Link
                                href={val.link}
                                className="text-xs text-gray-300 hover:text-white transition-colors block"
                              >
                                {val.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Bottom section */}
          <div className="mt-8 pt-6 border-t border-gray-700 space-y-5 text-center">
            <div className="text-3xl font-bold tracking-wide">aneeverse</div>

            <div className="flex justify-center gap-3">
              {socialLinks.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="p-2.5 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-300">
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

            <p className="text-xs text-gray-400">&copy; 2025 Aneeverse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
