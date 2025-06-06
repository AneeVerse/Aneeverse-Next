import Layout from "../common/Layout";

export default function HeroSectionAbout() {
    return (
        <section className="bg-secondary-500 text-white relative pt-20 pb-8">
            {/* Hero Section */}
            <div className="relative">
                {/* Text Content */}
                <Layout>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="relative">
                                <span className="text-[#a5bcc5] inline-block mb-3 text-sm tracking-widest font-medium">ABOUT ANEEVERSE</span>
                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                                    The creative force{" "}
                                </h1>
                                <div className="mb-6">
                                    <span className="font-Rock_Salt text-[#d9d9d9] text-4xl lg:text-6xl leading-tight block transform -rotate-1">
                                        behind world-leading brands
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-4">
                            <p className="text-lg leading-relaxed text-[#d9d9d9] font-light">
                                The only creative service where enterprise teams get the top 1% of
                                global talent, powered by AI, plugged directly into their workflows.
                            </p>
                        </div>
                    </div>
                </Layout>

                {/* Image */}
                <div className="mt-16">
                    <img
                        src="/images/our-team/our-team-banner.avif"
                        alt="Creative Showcase"
                        className="w-full h-[500px] object-cover shadow-xl"
                    />
                </div>
            </div>

            {/* Supporting Text Section */}
            <div className="py-16">
                <Layout>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl lg:text-4xl font-light text-white leading-tight">
                            Not an agency, not a bunch of freelancers—a 
                            <span className="font-medium"> world-class creative team </span> 
                            ready to support you whenever, and however, you need.
                        </p>
                    </div>
                </Layout>
            </div>
        </section>
    );
}
