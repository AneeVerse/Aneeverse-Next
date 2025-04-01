"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineClipboardList,
  HiOutlinePencilAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import Link from "next/link";
import { customerStories } from "@/data/customerStoriesData";

const ResourcesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?limit=2');
        const data = await response.json();
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchBlogs();
    }
  }, [isOpen]);

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
    },
    {
      title: "Customer Stories",
      link: "/customer-stories",
      cards: [
        ...customerStories.slice(0, 2)
      ],
    },
  ];

  return (
    <div
      className=" "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`text-[${color.text}] p-2 cursor-pointer flex items-center group`}
      >
        <span
          className={`${
            isOpen ? "mr-[6px] scale-100 " : " "
          } h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${
            color.text
          }]`}
        ></span>{" "}
        <span className="flex items-center gap-2">
          Resources{" "}
          <FaChevronDown
            className={`${
              isOpen ? " -rotate-180 " : " "
            } group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`}
          />{" "}
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="fixed h-screen inset-0 w-full top-[60px]  pt-5 z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="backdrop-blur-[2px] h-full w-full">
          <motion.div
              onMouseLeave={() => {
                setIsOpen(false);
              }}
          
          className="bg-[#EBFAFE] shadow-lg  border border-gray-200 ">
            <Layout>
              <div className="grid grid-cols-3 gap-6 py-8">
                {/* Learning Center */}
                <div className="border-r border-gray-200 pr-6">
                 
                  <ul className="mt-12  space-y-4">
                    {resources[0].items.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.link} onClick={()=>{setIsOpen(false)}} 
                       className="flex cursor-pointer border-b pb-3 items-start group justify-between gap-3">
                        <div>
                          <h4 className="text-md flex items-center font-medium text-gray-700">
                           <span className="h-[5px] bg-secondary-500 w-[5px] inline-block transition-all  duration-300 scale-0 group-hover:scale-100 rounded-full"></span> <span className=" ml-[-5px] group-hover:ml-[6px]  transition-all duration-300">{item.name}</span>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-gray-700 text-xl">{item.icon}</div>
                      </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog */}
                <div className="border-r border-gray-200 pr-6">
                  <Link onClick={()=>{setIsOpen(false)}} href={resources[1].link} className="text-lg group font-semibold cursor-pointer hover:underline flex items-center text-secondary-500 gap-2">
                    Blog <div className="relative"> <FiArrowUpRight className="  z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className=" absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {isLoading ? (
                      // Loading placeholders
                      Array(2).fill(0).map((_, idx) => (
                        <div key={idx} className="animate-pulse">
                          <div className="bg-gray-200 h-[160px] rounded-md"></div>
                          <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
                        </div>
                      ))
                    ) : blogs.length > 0 ? (
                      // Render actual blogs
                      blogs.map((blog, idx) => (
                        <Link onClick={()=>{setIsOpen(false)}} href={`/blog/${blog.slug}`} key={idx} className="flex flex-col cursor-pointer gap-3">
                          <div className="overflow-hidden rounded-md">
                            <img
                              src={blog.thumbnail}
                              alt={blog.title}
                              className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                            />
                          </div>
                          <p className="text-sm line-clamp-1 font-medium text-gray-700">
                            {blog.title}
                          </p>
                        </Link>
                      ))
                    ) : (
                      // No blogs found
                      <div className="text-center py-4 text-gray-500">
                        No blog posts available
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer Stories */}
                <div>
                  <Link  onClick={()=>{setIsOpen(false)}} href={resources[2].link} className="text-lg group font-semibold flex items-center hover:underline cursor-pointer text-secondary-500 gap-2">
                    Customer Stories <div className="relative"> <FiArrowUpRight className="  z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className=" absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {resources[2].cards.map((card, idx) => (
                      <Link onClick={()=>{setIsOpen(false)}} href={`/customer-stories/${card.id}`} key={idx} className="flex flex-col cursor-pointer gap-3">
                        <div className="overflow-hidden rounded-md">
                        <img
                          src={card.thumbnail}
                          alt={card.title}
                          className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                        /></div>
                        <p className="text-sm line-clamp-1 font-medium text-gray-700">
                          {card.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Layout>
          </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesMegaMenu;
