import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { getRecommendedPostsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function WeRecommend() {
    let rawPosts = [];
    try {
        rawPosts = await client.fetch(getRecommendedPostsQuery, {}, { next: { revalidate: 3600 } });
    } catch (error) {
        console.error("Error fetching recommended posts:", error);
    }

    // Filter for unique categories
    const uniquePosts = [];
    const usedCategories = new Set();

    // First pass: Try to find 3 posts with distinct categories
    for (const post of rawPosts) {
        if (uniquePosts.length >= 3) break;
        const cat = post.categories?.[0]?.title || "Uncategorized";
        if (!usedCategories.has(cat)) {
            uniquePosts.push(post);
            usedCategories.add(cat);
        }
    }

    // Second pass: If we don't have 3 yet, fill with remaining posts skipping duplicates
    if (uniquePosts.length < 3) {
        for (const post of rawPosts) {
            if (uniquePosts.length >= 3) break;
            if (!uniquePosts.find(p => p._id === post._id)) {
                uniquePosts.push(post);
            }
        }
    }

    // Helper to generate image URL safely
    const getImageUrl = (source) => {
        try {
            if (source?.sanityImage) {
                return urlForImage(source.sanityImage).url();
            }
            if (source?.externalImage) {
                return source.externalImage;
            }
            return "/images/home/we recommend/01_2_43dc6e305a.png";
        } catch (e) {
            console.error("Error generating image URL:", e);
            return "/images/home/we recommend/01_2_43dc6e305a.png";
        }
    };

    const staticCards = [
        {
            id: 'static-1',
            category: "CREATIVITY",
            title: "Illustration vs. photography: Which is better for your advertising campaigns?",
            image: "/images/home/we recommend/01_2_43dc6e305a.png",
            bgColor: "#072d36",
            textColor: "white",
            link: "#"
        },
        {
            id: 'static-2',
            category: "BUSINESS TIPS",
            title: "Top Design Subscription Services Compared to Design Pickle",
            image: "/images/home/we recommend/Comparison_Blog_Header_Image_a5cc660fd9.png",
            bgColor: "#072d36",
            textColor: "white",
            link: "#"
        },
        {
            id: 'static-3',
            category: "B2B",
            title: "How ShiftUp scaled their visual identity with Design Pickle",
            image: "/images/home/we recommend/shift_up_ai_cs_image_1_6a853c0fe2.png",
            bgColor: "#072d36",
            textColor: "white",
            link: "#"
        }
    ];

    const cards = uniquePosts.length > 0 ? uniquePosts.map((post) => ({
        id: post._id,
        category: post.categories?.[0]?.title?.toUpperCase() || "BLOG",
        title: post.title,
        image: getImageUrl(post.mainImage),
        bgColor: "#072d36",
        textColor: "white",
        link: `/blog/${post.slug?.current || '#'}`
    })) : staticCards;

    const finalCards = cards.length > 0 ? cards : staticCards;

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#03151a] relative overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 md:mb-12">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-gray-400 text-xs md:text-sm mb-2 tracking-widest uppercase">
                            GOT TIME?
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                            WE RECOMMEND
                        </h2>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#072d36] hover:bg-teal-700 text-white text-sm rounded-full transition-all duration-300 hover:gap-3 group mt-8">
                        <span className="font-medium">View all</span>
                    </Link>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                    {finalCards.map((card) => (
                        <Link
                            key={card.id}
                            href={card.link}
                            className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex-shrink-0 w-[85vw] md:w-auto snap-start"
                            style={{ backgroundColor: card.bgColor }}
                        >
                            {/* Card Container - Fixed heights for uniformity */}
                            <div className="relative flex flex-col h-[420px] md:h-[480px]">
                                {/* Image Section - Fixed Height (60%) */}
                                <div className="relative h-[60%] overflow-hidden w-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section - Fixed Height (40%) */}
                                <div className="flex flex-col h-[40%] p-6 pb-7 bg-opacity-0">
                                    <div className="mb-3">
                                        <span
                                            className="inline-block text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
                                            style={{ color: card.textColor }}
                                        >
                                            {card.category}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-base md:text-lg font-semibold leading-snug line-clamp-3"
                                        style={{ color: card.textColor }}
                                    >
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile View All Button */}
            <div className="md:hidden mt-8 flex justify-center">
                <Link href="/blog" className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-full transition-all duration-300">
                    <span className="font-medium">View all</span>
                </Link>
            </div>
        </section>
    );
}
