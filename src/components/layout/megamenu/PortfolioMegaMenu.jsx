"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

// Cache for portfolio works
let portfolioCache = [];
let isPortfolioFetched = false;
let isFetchingPortfolio = false;

// Prefetch portfolio works
const prefetchPortfolioWorks = async () => {
    if (isFetchingPortfolio || isPortfolioFetched) return;

    try {
        isFetchingPortfolio = true;
        const data = await client.fetch(`
      *[_type == "portfolioWork"] | order(featured desc, publishedAt desc)[0...4] {
        _id,
        title,
        slug,
        mainImage,
        thumbnailImage,
        industry,
        featured
      }
    `);
        if (data) {
            portfolioCache = data;
            isPortfolioFetched = true;
        }
    } catch (error) {
        console.error('Error prefetching portfolio works:', error);
    } finally {
        isFetchingPortfolio = false;
    }
};

// Start prefetching as soon as module loads
if (typeof window !== 'undefined') {
    prefetchPortfolioWorks();
}

const PortfolioMegaMenu = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [portfolioWorks, setPortfolioWorks] = useState(portfolioCache);
    const [isLoading, setIsLoading] = useState(!isPortfolioFetched);

    // Fetch portfolio works on mount
    useEffect(() => {
        const fetchPortfolioWorks = async () => {
            if (isPortfolioFetched) {
                setPortfolioWorks(portfolioCache);
                setIsLoading(false);
                return;
            }

            if (isFetchingPortfolio) {
                const checkCache = setInterval(() => {
                    if (isPortfolioFetched) {
                        setPortfolioWorks(portfolioCache);
                        setIsLoading(false);
                        clearInterval(checkCache);
                    }
                }, 100);
                return () => clearInterval(checkCache);
            }

            try {
                setIsLoading(true);
                isFetchingPortfolio = true;
                const data = await client.fetch(`
          *[_type == "portfolioWork"] | order(featured desc, publishedAt desc)[0...4] {
            _id,
            title,
            slug,
            mainImage,
            thumbnailImage,
            industry,
            featured
          }
        `);
                if (data) {
                    portfolioCache = data;
                    isPortfolioFetched = true;
                    setPortfolioWorks(data);
                }
            } catch (error) {
                console.error('Error fetching portfolio works:', error);
            } finally {
                setIsLoading(false);
                isFetchingPortfolio = false;
            }
        };

        fetchPortfolioWorks();
    }, []);

    // Prefetch on mouse near
    const handleMouseNear = () => {
        if (!isPortfolioFetched && !isFetchingPortfolio) {
            prefetchPortfolioWorks().then(() => {
                setPortfolioWorks(portfolioCache);
                setIsLoading(false);
            });
        }
    };

    // Get image URL from portfolio work
    const getImageUrl = (work) => {
        if (work.thumbnailImage?.asset) {
            return urlForImage(work.thumbnailImage)?.width(400).height(300).url();
        }
        if (work.mainImage?.asset) {
            return urlForImage(work.mainImage)?.width(400).height(300).url();
        }
        return '/images/placeholder-work.jpg';
    };

    return (
        <div
            className=""
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onMouseOver={handleMouseNear}
        >
            <button
                style={{ color: color.text }}
                className="p-2 cursor-pointer flex items-center group"
            >
                <span
                    style={{ backgroundColor: color.text }}
                    className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
                ></span>{" "}
                <span className="flex items-center gap-2">
                    Portfolio{" "}
                    <FaChevronDown
                        className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`}
                    />
                </span>
            </button>
            {isOpen && (
                <motion.div
                    className="fixed h-screen inset-0 w-full top-[60px] pt-5 z-[90]"
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
                            className="bg-[#EBFAFE] shadow-lg border border-gray-200"
                        >
                            <Layout>
                                <div className="py-8">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            href="/works"
                                            className="text-lg group font-semibold cursor-pointer hover:underline flex items-center text-secondary-500 gap-2"
                                        >
                                            Our Work{" "}
                                            <div className="relative">
                                                <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" />
                                                <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                                            </div>
                                        </Link>
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            href="/works"
                                            className="text-sm text-gray-600 hover:text-secondary-500 transition-colors"
                                        >
                                            View all projects →
                                        </Link>
                                    </div>

                                    {/* Portfolio Grid - 4 cards */}
                                    <div className="grid grid-cols-4 gap-6">
                                        {isLoading ? (
                                            // Loading placeholders
                                            Array(4)
                                                .fill(0)
                                                .map((_, idx) => (
                                                    <div key={idx} className="animate-pulse">
                                                        <div className="bg-gray-200 h-[160px] rounded-lg"></div>
                                                        <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
                                                        <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
                                                    </div>
                                                ))
                                        ) : portfolioWorks && portfolioWorks.length > 0 ? (
                                            // Render actual portfolio works
                                            portfolioWorks.map((work, idx) => (
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    href={`/works/${work.slug?.current || work._id}`}
                                                    key={work._id || idx}
                                                    className="flex flex-col cursor-pointer group"
                                                >
                                                    <div className="overflow-hidden rounded-lg">
                                                        <img
                                                            src={getImageUrl(work)}
                                                            alt={work.title}
                                                            className="w-full h-[160px] group-hover:scale-110 transition-all duration-300 object-cover rounded-lg"
                                                        />
                                                    </div>
                                                    <p className="text-sm line-clamp-1 font-medium text-gray-700 mt-3">
                                                        {work.title}
                                                    </p>
                                                    {work.industry && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {work.industry}
                                                        </p>
                                                    )}
                                                </Link>
                                            ))
                                        ) : (
                                            // No portfolio works found
                                            <div className="col-span-4 text-center py-8 text-gray-500">
                                                Check out our portfolio for latest projects
                                            </div>
                                        )}
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

export default PortfolioMegaMenu;
