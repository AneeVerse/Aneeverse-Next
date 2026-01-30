"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlinePlay, HiOutlineClipboardList, HiOutlinePencilAlt, HiOutlineUserGroup } from "react-icons/hi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf, FaCode, FaTag, FaRobot, FaChartLine, FaAmazon, FaEbay, FaRocket, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

// Cache for dynamic content to avoid refetching
let blogsCache = [];
let storiesCache = [];
let isBlogsFetched = false;
let isStoriesFetched = false;

// Menu Categories Data
const menuCategories = [
  {
    title: "Creative Design",
    link: "/services",
    color: "bg-purple-100 hover:bg-purple-200 text-purple-900",
    items: [
      { name: "Ad Creative", description: "Eye-catching ad creatives that convert.", icon: <FaPaintBrush />, link: "/services/ad-creative" },
      { name: "Presentation Design", description: "Pitch-perfect presentations.", icon: <FaSlideshare />, link: "/services/presentation-design" },
      { name: "Branding System & Merchandise", description: "Complete brand identity solutions.", icon: <FaTag />, link: "/services/branding-services" },
      { name: "Ebook, Report & Print Design", description: "Professional digital publications.", icon: <FaFilePdf />, link: "/services/ebook-digital-report" },
    ],
  },
  {
    title: "Specialized Solutions",
    link: "/services",
    color: "bg-blue-100 hover:bg-blue-200 text-blue-900",
    items: [
      { name: "Platform Development", description: "Scalable web platforms.", icon: <FaCode />, link: "/services/platform-development" },
      { name: "UI, UX & Web Development", description: "Exceptional digital experiences.", icon: <FaDesktop />, link: "/services/ui-ux-web-development" },
      { name: "Copywriting", description: "Copy that converts.", icon: <FaPenFancy />, link: "/services/copywriting" },
      { name: "SEO & Blog Writing", description: "Boost search rankings.", icon: <FaSearch />, link: "/services/seo-optimization" },
    ],
  },
  {
    title: "AI & Automation",
    link: "/services",
    color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
    items: [
      { name: "AI SEO (GEO) (AEO) (AIO)", description: "Next-generation SEO optimization.", icon: <FaChartLine />, link: "/services/ai-seo-geo-aeo-aio" },
      { name: "n8n Workflows", description: "Workflow Automation & Integrations.", icon: <FaRobot />, link: "/services/n8n-workflows" },
      { name: "Sales & Marketing Automation", description: "Streamline your workflows.", icon: <FaChartPie />, link: "/services/sales-marketing-automation" },
      { type: "category", name: "Marketing", color: "bg-orange-100 hover:bg-orange-200 text-orange-900" },
      { name: "Marketing Strategy", description: "Data-driven marketing plans.", icon: <FaChartPie />, link: "/services/marketing-strategy" },
      { name: "Email Design & Campaign", description: "Automated email campaigns.", icon: <FaEnvelope />, link: "/services/email-campaign" },
    ],
  },
  {
    title: "Ecommerce Marketplace",
    link: "/services",
    color: "bg-[#FFF8E1] hover:bg-[#FFECB3] text-[#F57F17]",
    items: [
      { name: "Amazon Management", description: "Scale more on Amazon without firefighting.", icon: <FaAmazon />, link: "/services/amazon-marketplace-management" },
      { name: "eBay Management", description: "Profitable eBay store management.", icon: <FaEbay />, link: "/services/ebay-marketplace-management" },
      { name: "Zepto Management", description: "Win in quick commerce.", icon: <FaRocket />, link: "/services/zepto-marketplace-management" },
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSection, setOpenSection] = useState(null);
  const [blogs, setBlogs] = useState(blogsCache);
  const [customerStories, setCustomerStories] = useState(storiesCache);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(!isBlogsFetched);
  const [isLoadingStories, setIsLoadingStories] = useState(!isStoriesFetched);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Fetch dynamic blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      if (isBlogsFetched) {
        setBlogs(blogsCache);
        setIsLoadingBlogs(false);
        return;
      }

      try {
        setIsLoadingBlogs(true);
        const response = await fetch('/api/sanity-blogs?limit=2', {
          cache: 'no-store',
          next: { revalidate: 300 }
        });
        const data = await response.json();
        if (data.success) {
          blogsCache = data.blogs;
          isBlogsFetched = true;
          setBlogs(data.blogs);
        } else {
          console.error('Failed to fetch blogs:', data.error);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoadingBlogs(false);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch dynamic customer stories
  useEffect(() => {
    const fetchCustomerStories = async () => {
      if (isStoriesFetched) {
        setCustomerStories(storiesCache);
        setIsLoadingStories(false);
        return;
      }

      try {
        setIsLoadingStories(true);
        const response = await fetch('/api/sanity-customer-stories?limit=2', {
          cache: 'no-store',
          next: { revalidate: 300 }
        });
        const data = await response.json();
        if (data.success) {
          storiesCache = data.stories;
          isStoriesFetched = true;
          setCustomerStories(data.stories);
        } else {
          console.error('Failed to fetch customer stories:', data.error);
        }
      } catch (error) {
        console.error('Error fetching customer stories:', error);
      } finally {
        setIsLoadingStories(false);
      }
    };

    fetchCustomerStories();
  }, []);

  // Dynamic resources data
  const resources = [
    {
      title: "",
      link: "#",
      items: [
        {
          name: "Blog",
          link: "/blog",
          description: "Latest articles and insights",
          icon: <HiOutlinePencilAlt />,
        },
        {
          name: "Customer Stories",
          link: "/customer-stories",
          description: "Success stories from our clients",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Guides & Quizzes",
          link: "/blog",
          description: "Insights from marketing leaders",
          icon: <HiOutlineBookOpen />,
        },
        {
          name: "Video Library",
          link: "/video-library",
          description: "Aneeverse's latest videos",
          icon: <HiOutlinePlay />,
        }
      ],
    },
    {
      title: "Blog",
      link: "/blog",
      cards: blogs,
      isLoading: isLoadingBlogs,
    },
    {
      title: "Customer Stories",
      link: "/customer-stories",
      cards: customerStories,
      isLoading: isLoadingStories,
    },
  ];

  return (
    <motion.div
      initial={{ maxHeight: "0px" }}
      animate={{ maxHeight: "100vh" }}
      transition={{ duration: 0.3 }}
      exit={{ maxHeight: "0px" }}
      className="fixed h-[100vh] overflow-y-auto inset-0 pb-24 bg-primary-500 w-full z-[100] shadow-lg"
    >
      {/* Header Section */}
      <motion.div
        initial={{ padding: "0px 0px" }}
        animate={{ padding: "0px 20px" }}
        transition={{ duration: 0.3 }}
        exit={{ padding: "0px 0px" }}
        className="flex justify-between items-center h-[70px] sm:h-[80px] px-sm md:px-md"
      >
        <Link href="/" onClick={toggleSidebar} className="text-secondary-500 text-3xl tracking-wide font-bold">
          aneeverse
        </Link>
        <button onClick={toggleSidebar} className="text-xl text-secondary-500">
          <FaTimes />
        </button>
      </motion.div>

      {/* Menu Sections */}
      <div className="px-5">
        {/* Services Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("services")}>
          <Link href="/services" onClick={toggleSidebar}>
            Services
          </Link>
          {openSection === "services" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "services" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-6xl mx-auto py-2 grid grid-cols-1 gap-6">
                {menuCategories.map((category, index) => (
                  <div key={index}>

                    <Link href={`${category.link}`} className={`text-base font-semibold py-2 px-6 min-w-fit rounded-xl inline-flex items-center gap-2 border border-black/5 shadow-sm ${category.color}`} onClick={toggleSidebar}>
                      <span>{category.title} </span> <FaChevronRight className="text-xs" />
                    </Link>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, idx) => (
                        item.type === "category" ? (
                          <div key={idx} className="pl-0 pr-3 pt-2 mt-5 pb-3 mb-2">
                            <div className={`text-base font-semibold py-2 px-6 rounded-xl inline-flex items-center cursor-pointer gap-2 border border-black/5 shadow-sm transition-all duration-300 ${item.color}`}>
                              {item.name}
                              <FaChevronRight className="text-xs" />
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.link}
                            key={idx}
                            className="flex group px-2 py-2 border-b items-center justify-between gap-3"
                            onClick={toggleSidebar}
                          >
                            <div className="flex items-center gap-3">
                              <div>
                                <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                            <div className="text-gray-700 text-lg self-center">{item.icon}</div>
                          </Link>
                        )
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Section */}
        <Link href="/works" onClick={toggleSidebar} className="py-3 block cursor-pointer">
          Portfolio
        </Link>

        {/* Why Us Section - Hidden for now */}
        {/*
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("whyUs")}>
          <span>Why Us</span>
          {openSection === "whyUs" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "whyUs" && (
            <motion.div
              className="space-y-3 px-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/about-us" onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog1.avif"
                  alt="About"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">About Us</p>
                  <p className="text-sm">Our mission, goals & values</p>
                </div>
              </Link>
              <Link href="/our-team" onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog2.avif"
                  alt="Our People"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">Our Team</p>
                  <p className="text-sm">Meet your dedicated team</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        */}

        {/* Resources Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("resources")}>
          <span>Resources</span>
          {openSection === "resources" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "resources" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-6 px-2 max-w-6xl mx-auto py-2">
                {resources.map((resource, index) => (
                  <div key={index}>
                    <Link href={resource.link} onClick={toggleSidebar} className={`${index == 0 ? "hidden " : "inline-flex "} text-lg hover:underline font-bold flex-row min-w-fit items-center gap-2`}>
                      <span>{resource.title}</span> <FiArrowUpRight />
                    </Link>
                    <div className={`${index == 0 ? " mt-0 " : " mt-4 "} space-y-4`}>
                      {resource.items &&
                        resource.items.map((item, idx) => (
                          <Link href={item.link} key={idx} onClick={toggleSidebar} className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <div className="text-gray-700 text-xl">{item.icon}</div>
                          </Link>
                        ))}

                      {/* Dynamic Cards Section */}
                      {resource.cards !== undefined && (
                        <div className="space-y-3">
                          {resource.isLoading ? (
                            // Loading state - skeleton cards
                            <>
                              <div className="flex flex-row gap-3 animate-pulse">
                                <div className="w-[120px] h-[70px] bg-gray-300 rounded-md"></div>
                                <div className="flex-1">
                                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-3 animate-pulse">
                                <div className="w-[120px] h-[70px] bg-gray-300 rounded-md"></div>
                                <div className="flex-1">
                                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                </div>
                              </div>
                            </>
                          ) : resource.cards && resource.cards.length > 0 ? (
                            // Actual dynamic cards
                            resource.cards.map((card, idx) => (
                              <Link
                                href={`/${resource.title === "Blog" ? "blog" : "customer-stories"}/${card.slug}`}
                                onClick={toggleSidebar}
                                key={idx}
                                className="flex flex-row gap-3 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors"
                              >
                                <div className="relative overflow-hidden rounded-md flex-shrink-0">
                                  <img
                                    src={card.thumbnail}
                                    alt={card.title}
                                    className="w-[120px] h-[70px] object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                  <p className="text-sm font-medium text-gray-700 line-clamp-2 leading-snug mt-1">
                                    {card.title}
                                  </p>
                                  {card.excerpt && (
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                      {card.excerpt}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))
                          ) : (
                            // No content available
                            <div className="text-center py-4 px-2">
                              <p className="text-sm text-gray-500">
                                {resource.title === "Blog" ? "Check out our blog for latest updates" : "No stories available yet"}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Links */}
        <Link href="/pricing" onClick={toggleSidebar} className="py-3 block cursor-pointer">
          Pricing
        </Link>

        {/* Action Buttons */}
        <div className="mt-6">
          <Link
            href="/contact"
            onClick={toggleSidebar}
            className="w-full block text-center py-3 rounded-full bg-secondary-500 text-primary-500 font-semibold"
          >
            Book a Call
          </Link>
          <Link
            href="/register"
            onClick={toggleSidebar}
            className="w-full block text-center mt-3 py-3 rounded-full border border-secondary-500 text-secondary-500 font-semibold"
          >
            Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
