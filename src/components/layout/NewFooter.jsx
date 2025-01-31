"use client"
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../common/Layout";

export default function NewFooter() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  
    const footerData = {
      services: {
        heading: "Services",
        items: [
          {
            title: "Creative design services",
            links: [
              "Ad creative",
              "Social media creative",
              "Presentation design",
              "Illustration design",
              "Branding services",
              "Email creation",
              "Web design",
              "eBooks & report design",
              "Concept creation",
              "Print design",
              "Packaging & merchandise design",
            ],
          },
          {
            title: "Specialized production services ",
            links: ["Video production", "Motion design", "3D & AR design"],
          },
          {
            title: "AI Services",
            links: ["AI enhanced creative", "AI consulting"],
          },
          {
            title: "Marketing services",
            links: ["Marketing strategy"],
          },
        ],
      },
      navigation: {
        heading: "Navigation",
        sections: {
          items: [
            {
              title: "main",
              links: ["Our Work", "Our people", "About Us", "Pricing", "Careers"],
            },
            {
              title: "learn",
              links: [
                "Blog",
                "Events & Summits",
                "Guides & Reports",
                "Customer Stories",
                "Video Library",
                "Playbooks",
              ],
            }
          ],
          
        },
      },
      legal: ["Privacy Policy", "Terms of Use", ],
      
    };
  
    return (
      <footer className="bg-secondary-500 text-white pt-16 pb-6">
        <Layout>
          {/* Top Sections */}
               {/* Top Section */}
     <div className=" text-center">
     <h2 className="text-4xl font-bold text-white">
       DESIGN, OPTIMIZE, ADVERTISE
     </h2>
     <p className="mt-4 text-3xl text-orange-400 font-Rock_Salt">
       we got you covered.
     </p>
     <button className="mt-8 px-6 text-md py-2 bg-primary-500 text-secondary-500 text-lg font-semibold rounded-full  transition">
       GET STARTED
     </button>
   </div>
   <div className="mt-16 border-b border-gray-600 pb-1">
          {/* Mobile Accordions */}
          <div className="md:hidden space-y-5">
            {/* Services Accordion */}
            <div className=" border-b pb-3 border-gray-600">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full "
              >
                <h3 className="text-lg font-semibold">Services</h3>
                {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {  (
                <motion.div
                initial={{ height:  servicesOpen ? "auto" : 0 }}
                animate={{ height:  servicesOpen ? "auto" : 0 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-6 overflow-y-hidden">
                  {footerData.services.items.map((item, index) => (
                    <div key={index} className="pl-2">
                      <h4 className="font-medium mb-2 flex items-center">
                        {item.title} <FiArrowUpRight className="ml-1" />
                      </h4>
                      <ul className="space-y-2">
                        {item.links.map((link, i) => (
                          <li key={i} className="text-sm text-[#c9c9c9]">
                            <button className="hover:underline w-full text-left">
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Navigation Accordion */}
            <div className="pb-3">
              <button
                onClick={() => setNavigationOpen(!navigationOpen)}
                className={`flex items-center justify-between w-full`}
              >
                <h3 className="text-lg font-semibold">Navigation</h3>
                {navigationOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              { (
                <motion.div
                initial={{ height:  navigationOpen ? "auto" : 0 }}
                animate={{ height:  navigationOpen ? "auto" : 0 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-y-hidden grid grid-cols-1 gap-6 pl-2">
                  {footerData.navigation.sections.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.links.map((link, i) => (
                          <li key={i} className="text-sm text-[#c9c9c9]">
                            <button className="hover:underline w-full text-left">
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services Section */}
            <div className="">  
              <h3 className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4">{footerData.services.heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {footerData.services.items.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{item.title} <FiArrowUpRight className="text-md inline-block" /></h4>
                    <ul>
                      {item.links.map((link, i) => (
                        <li key={i} className="text-sm text-[#c9c9c9] mb-2 cursor-pointer hover:underline">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Navigation Section */}
            <div className="">
              <h3 className="text-lg  border-b border-gray-200 pb-1 font-semibold mb-4">{footerData.navigation.heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerData.navigation.sections.items.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <ul>
                      {item.links.map((link, i) => (
                        <li key={i} className="text-sm text-[#c9c9c9] mb-2 cursor-pointer hover:underline">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              
              </div>
            </div>
            </div>
            </div>
  
          {/* Bottom Section */}
          <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="text-center flex flex-col items-center sm:flex-row justify-between w-full l">
              <p className="text-sm">&copy; 2025 Aneeverse. All rights reserved.</p>
              <ul className="flex flex-row justify-center mt-3 sm:mt-0 gap-4 text-sm ">
                {footerData.legal.map((legalItem, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">
                      {legalItem}
                    </a>
                  </li>
                ))}
              </ul>
            {/* Social Links */}
            <div className=" gap-4 flex justify-center mt-4 sm:mt-0">
             <Link href="https://www.instagram.com/aneeverse/" target="_blank"
             className="border border-gray-200 rounded-full p-2">
             <FaInstagram className="text-xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>
              <Link href="https://www.linkedin.com/company/aneeverse" target="_blank"
              className="border border-gray-200 rounded-full p-2">
              <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>
              <Link href="#" target="_blank" 
              className="border border-gray-200 rounded-full p-2">
              <FaYoutube className="text-xl cursor-pointer hover:text-[#c9c9c9]"/>
              </Link>

            </div>
            </div>
  
          </div>
        </Layout>
      </footer>
    );
  };
  
  