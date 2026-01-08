import Layout from "../common/Layout";
import Image from "next/image";

export default function CommandCenter() {
    return (
        <div className="bg-[#03151a] py-20 relative overflow-hidden">
            <Layout>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-6 tracking-tight">
                        COMMAND CENTER
                    </h2>
                    <button className="bg-[#DFFF00] text-black font-bold px-8 py-3 rounded-full text-sm hover:bg-[#CFEF00] transition-all duration-300 hover:scale-105">
                        Get Started
                    </button>
                </div>

                <div className="max-w-7xl mx-auto space-y-6">

                    {/* ROW 1 - Cards 1, 2, 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-[#0D2E3E] rounded-2xl p-6 border border-[#1A4458] hover:border-[#2DC8E6]/50 transition-all duration-300">
                            <div className="mb-4 rounded-xl overflow-hidden bg-[#0A1F2E] border border-[#1A4458] relative w-full h-[200px]">
                                <Image
                                    src="/images/home/command center/1card.png"
                                    alt="Submit your idea"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">
                                <span className="text-[#2DC8E6]">1. </span>
                                Submit your idea
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Upload simple images/notes to submit a project request. Document to hand-off style assets. Upload assets, text content, and files.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0D2E3E] rounded-2xl p-6 border border-[#1A4458] hover:border-[#2DC8E6]/50 transition-all duration-300">
                            <div className="mb-4 rounded-xl overflow-hidden bg-[#0A1F2E] border border-[#1A4458] relative w-full h-[200px]">
                                <Image
                                    src="/images/home/command center/2card.png"
                                    alt="Track in real-time"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">
                                <span className="text-[#2DC8E6]">2. </span>
                                Track in real-time
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Monitor progress and adjust priorities as your creative team is always working on what's most important.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0D2E3E] rounded-2xl p-6 border border-[#1A4458] hover:border-[#2DC8E6]/50 transition-all duration-300">
                            <div className="mb-4 rounded-xl overflow-hidden bg-[#0A1F2E] border border-[#1A4458] relative w-full h-[200px]">
                                <Image
                                    src="/images/home/command center/3card.png"
                                    alt="Collaborate & review"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">
                                <span className="text-[#2DC8E6]">3. </span>
                                Collaborate & review
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Comment directly in the platform or connect via Slack. Revisions are tracked, versioned, and easy to manage.
                            </p>
                        </div>
                    </div>

                    {/* ROW 2 - Cards 4 & 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 4 - NO IMAGE, just text */}
                        <div className="bg-[#0D2E3E] rounded-2xl p-6 border border-[#1A4458] hover:border-[#2DC8E6]/50 transition-all duration-300 flex flex-col justify-center">
                            <h3 className="text-white text-xl font-bold mb-2">
                                <span className="text-[#2DC8E6]">4. </span>
                                Final files delivered, manageable, sharable
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Download layered source files and ready-to-go assets—organized and delivered where and how you need them.
                            </p>
                        </div>

                        {/* Card 5 - WITH IMAGE (image already has design tool icons) */}
                        <div className="bg-[#0D2E3E] rounded-2xl p-6 border border-[#1A4458] hover:border-[#2DC8E6]/50 transition-all duration-300">
                            <div className="rounded-xl overflow-hidden bg-[#0A1F2E] border border-[#1A4458] relative w-full h-[200px]">
                                <Image
                                    src="/images/home/command center/5card.png"
                                    alt="Design tools integration"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    );
}
