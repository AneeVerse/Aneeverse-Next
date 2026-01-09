import Layout from "../common/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../common/AnimatedButton";

export default function CommandCenter() {
    return (
        <div className="bg-[#03151a] py-20 relative overflow-hidden">
            <Layout>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
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

                <div className="max-w-7xl mx-auto space-y-8">

                    {/* ROW 1 - Cards 1, 2, 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38]">
                            <div className="mb-6 rounded-2xl overflow-hidden relative w-full h-[220px]">
                                <Image
                                    src="/images/home/command center/1card.png"
                                    alt="Submit your idea"
                                    fill
                                    className="object-contain"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">
                                <span className="text-gray-400">1. </span>
                                Submit your idea
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Use our simple request form to submit a project from ad banners to brand refreshes. Upload assets, set context, and hit go.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38]">
                            <div className="mb-6 rounded-2xl overflow-hidden relative w-full h-[220px]">
                                <Image
                                    src="/images/home/command center/2card.png"
                                    alt="Track in real-time"
                                    fill
                                    className="object-contain"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">
                                <span className="text-gray-400">2. </span>
                                Track in real-time
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Monitor progress and adjust priorities so your creative team is always working on what's important.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38]">
                            <div className="mb-6 rounded-2xl overflow-hidden relative w-full h-[220px]">
                                <Image
                                    src="/images/home/command center/3card.png"
                                    alt="Collaborate & review"
                                    fill
                                    className="object-contain"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">
                                <span className="text-gray-400">3. </span>
                                Collaborate & review
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Comment directly in the platform or connect via Slack. Revisions are tracked, versioned, and easy to manage.
                            </p>
                        </div>
                    </div>

                    {/* ROW 2 - Cards 4 & 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                        {/* Card 4 - Large Text Card */}
                        <div className="md:col-span-2 bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38] flex flex-col justify-center min-h-[300px]">
                            <h3 className="text-white text-3xl font-bold mb-4">
                                <span className="text-gray-400">4. </span>
                                Final files delivered, manageable, sharable
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Download layered source files and ready-to-go assets—organized and delivered where and how you need them.
                            </p>
                        </div>

                        {/* Card 5 - Content Image Card */}
                        <div className="md:col-span-3 bg-[#07242e] rounded-3xl p-8 transition-all duration-300 hover:bg-[#072d38]">
                            <div className="rounded-2xl overflow-hidden relative w-full h-full min-h-[300px]">
                                <Image
                                    src="/images/home/command center/5card.png"
                                    alt="Design tools integration"
                                    fill
                                    className="object-contain"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    );
}
