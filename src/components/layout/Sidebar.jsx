"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlinePlay, HiOutlineClipboardList, HiOutlinePencilAlt, HiOutlineUserGroup } from "react-icons/hi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf, FaCode, FaTag, FaRobot, FaChartLine, FaAmazon, FaEbay, FaRocket } from "react-icons/fa";
import { SiEtsy } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { 
  ShoppingCart, SquareCode, Search, Megaphone, PenTool, FileText, 
  Bot, ChevronRight 
} from "lucide-react";

// Cache for dynamic content to avoid refetching
let blogsCache = [];
let storiesCache = [];
let isBlogsFetched = false;
let isStoriesFetched = false;

// Menu Categories Data
const servicesList = [
  {
    name: "E-Commerce Marketplace Management",
    description: "Manage Amazon, eBay & multi-channel marketplaces for scalable growth.",
    url: "/services#ecommerce-marketplace",
    icon: <ShoppingCart className="w-5 h-5 text-[#E07A5F]" strokeWidth={2} />,
    iconBg: "bg-[#FFF4EB]"
  },
  {
    name: "Platform & Website Development",
    description: "Scalable, secure and high-performance web platforms built to grow.",
    url: "/services/platform-development",
    icon: <SquareCode className="w-5 h-5 text-[#2D9B75]" strokeWidth={2} />,
    iconBg: "bg-[#EEF8F4]"
  },
  {
    name: "AI SEO (GEO) (AEO) (AIO)",
    description: "AI-first SEO strategies to improve visibility in AI and traditional search.",
    url: "/services/ai-seo-geo-aeo-aio",
    icon: <Search className="w-5 h-5 text-[#00A896]" strokeWidth={2} />,
    iconBg: "bg-[#EAF7FA]"
  },
  {
    name: "Marketing & Google / Meta Ads Management",
    description: "ROI-focused ad campaigns that deliver measurable results.",
    url: "/services/marketing-strategy",
    icon: <Megaphone className="w-5 h-5 text-[#E76F51]" strokeWidth={2} />,
    iconBg: "bg-[#FFF6F0]"
  },
  {
    name: "Social, Printable & Ads Creative Designs",
    description: "Eye-catching designs that boost engagement and drive conversions.",
    url: "/services/ad-creative",
    icon: <PenTool className="w-5 h-5 text-[#7C3AED]" strokeWidth={2} />,
    iconBg: "bg-[#F5F3FF]"
  },
  {
    name: "Blogs & SEO Services",
    description: "High-ranking content and SEO strategies that drive organic traffic.",
    url: "/services/blog-writing",
    icon: <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={2} />,
    iconBg: "bg-[#EFF6FF]"
  },
  {
    name: "n8n & AI Automation Workflows",
    description: "Automate tasks, integrate tools and scale your operations.",
    url: "/services/n8n-workflows",
    icon: <Bot className="w-5 h-5 text-[#9333EA]" strokeWidth={2} />,
    iconBg: "bg-[#FAF5FF]"
  }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pathName = usePathname();
  const isAdsEcommerce = pathName === "/ads-ecommerce";
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
        <Link href="/" onClick={toggleSidebar} className="text-secondary-500 text-3xl tracking-wide font-bold flex items-center gap-0">
          <img
            src="/images/Artboard 7@2x.png"
            alt="Aneeverse Logo"
            className="h-[50px] w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)", transform: "translateY(-1px)", marginRight: "-13px" }}
          />
          <span style={{ transform: "translateY(-3px)" }} className="inline-block">aneeverse</span>
        </Link>
        <button onClick={toggleSidebar} className="text-xl text-secondary-500">
          <FaTimes />
        </button>
      </motion.div>

      {/* Menu Sections */}
      <div className="px-5">
        {/* Services Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer text-secondary-500 font-medium" onClick={() => toggleSection("services")}>
          <span className="cursor-pointer">
            Services
          </span>
          {openSection === "services" ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
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
              <div className="max-w-6xl mx-auto py-2 grid grid-cols-1 gap-1">
                {servicesList.map((service, index) => (
                  <Link
                    key={index}
                    href={service.url}
                    onClick={toggleSidebar}
                    className="flex items-center justify-between py-3.5 px-3 md:hover:bg-black/[0.02] active:bg-black/[0.04] rounded-2xl transition-colors duration-200 group border-b border-gray-150 last:border-b-0"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon Box */}
                      <div className={`${service.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 md:group-hover:scale-105`}>
                        {service.icon}
                      </div>
                      {/* Text */}
                      <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-gray-900 md:group-hover:text-[#0D9488] transition-colors leading-tight">
                          {service.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    {/* Arrow */}
                    <ChevronRight className="text-gray-400 md:group-hover:text-[#0D9488] md:group-hover:translate-x-1 transition-all duration-300 w-4 h-4 ml-2 flex-shrink-0" strokeWidth={3} />
                  </Link>
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
            href={isAdsEcommerce ? "/ads-ecommerce#platform-cards" : "/contact"}
            onClick={toggleSidebar}
            className="w-full block text-center py-3 rounded-full bg-secondary-500 text-primary-500 font-semibold"
          >
            {isAdsEcommerce ? "Book a Free Audit" : "Book a Call"}
          </Link>
          {!isAdsEcommerce && (
            <Link
              href="/register"
              onClick={toggleSidebar}
              className="w-full block text-center mt-3 py-3 rounded-full border border-secondary-500 text-secondary-500 font-semibold"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
