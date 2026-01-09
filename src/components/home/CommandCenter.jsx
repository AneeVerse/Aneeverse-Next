import Layout from "../common/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../common/AnimatedButton";

export default function CommandCenter() {
    const cards = [
        {
            type: "standard",
            id: 1,
            title: "Submit your idea",
            desc: "Use our simple request form to submit a project from ad banners to brand refreshes. Upload assets, set context, and hit go.",
            image: "/images/home/command center/1card.png"
        },
        {
            type: "standard",
            id: 2,
            title: "Track in real-time",
            desc: "Monitor progress and adjust priorities so your creative team is always working on what's important.",
            image: "/images/home/command center/2card.png"
        },
        {
            type: "standard",
            id: 3,
            title: "Collaborate & review",
            desc: "Comment directly in the platform or connect via Slack. Revisions are tracked, versioned, and easy to manage.",
            image: "/images/home/command center/3card.png"
        },
        {
            type: "text-only",
            id: 4,
            title: "Final files delivered, manageable, sharable",
            desc: "Download layered source files and ready-to-go assets—organized and delivered where and how you need them.",
        },
        {
            type: "image-only",
            id: 5,
            image: "/images/home/command center/5card.png"
        }
    ];

    return (
        <div className="bg-[#03151a] py-20 relative overflow-hidden">
            <Layout>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                    <h2 className="text-white font-bw-gradual font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tighter uppercase leading-[1.1]">
                        YOUR <span className="font-Rock_Salt text-[#2DC8E6] normal-case text-[0.6em] relative -top-4 inline-block transform -rotate-3 mx-2">Creative</span> <br className="sm:hidden" />
                        COMMAND CENTER
                    </h2>
                    <AnimatedButton
                        href="/pricing"
                        className="px-10 py-4 rounded-full font-bold text-base shadow-[0_0_20px_rgba(136,215,240,0.1)]"
                        style={{
                            backgroundColor: "#88D7F0",
                            color: "#073742"
                        }}
                        mainTextSlide="-140%"
                        duplicateTextStart="40%"
                        duplicateTextEnd="-100%"
                    >
                        GET STARTED
                    </AnimatedButton>
                </div>

                {/* Cards Container */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide px-6 md:grid md:grid-cols-12 md:gap-8 md:px-0 md:overflow-visible md:pb-0">
                        {cards.map((card, index) => {
                            // Desktop Spans
                            let colSpan = "md:col-span-4"; // Default for 1, 2, 3
                            if (card.id === 4) colSpan = "md:col-span-5";
                            if (card.id === 5) colSpan = "md:col-span-7";

                            return (
                                <div
                                    key={card.id}
                                    className={`bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38] flex-shrink-0 w-[85vw] md:w-auto snap-start ${colSpan} flex flex-col`}
                                >
                                    {/* Standard Card */}
                                    {card.type === "standard" && (
                                        <>
                                            <div className="mb-6 rounded-2xl overflow-hidden relative w-full h-[220px] flex-shrink-0">
                                                <Image
                                                    src={card.image}
                                                    alt={card.title}
                                                    fill
                                                    className="object-contain"
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            </div>
                                            <h3 className="text-white text-2xl font-bold mb-3">
                                                <span className="text-gray-400">{card.id}. </span>
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </>
                                    )}

                                    {/* Text Only Card */}
                                    {card.type === "text-only" && (
                                        <div className="flex flex-col justify-center h-full min-h-[300px]">
                                            <h3 className="text-white text-3xl font-bold mb-4">
                                                <span className="text-gray-400">{card.id}. </span>
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-400 text-lg leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    )}

                                    {/* Image Only Card */}
                                    {card.type === "image-only" && (
                                        <div className="rounded-2xl overflow-hidden relative w-full h-full min-h-[300px]">
                                            <Image
                                                src={card.image}
                                                alt="Design tools integration"
                                                fill
                                                className="object-contain"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 60vw"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </div>
    );
}
