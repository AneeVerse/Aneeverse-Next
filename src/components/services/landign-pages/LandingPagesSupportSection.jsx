"use client";
import Image from "next/image";
import Layout from "../../common/Layout";
import Link from "next/link";

const LandingPagesSupportSection = () => {
  return (
    <section className="bg-primary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg font-medium border-b border-secondary-500 pb-3 tracking-[2px] text-secondary-500 uppercase mb-6">
        {" Optimized for High Conversions".toUpperCase()}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-snug">
          Landing Pages That{" "}
            <span className="text-secondary-500 text-3xl lg:text-4xl font-Rock_Salt">
            convert & engage
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-secondary-500 leading-relaxed mb-6">
          Elevate your digital marketing efforts with high-performing landing pages.  
            We design pages that are visually compelling, strategically structured,  
            and optimized for conversions.
          </p>
          <p className="text-secondary-500 text-md leading-relaxed mb-8">
          From lead generation to e-commerce sales, we create tailored landing pages  
          that capture attention, guide users seamlessly, and drive measurable results.
          </p>
          <Link href={"/contact"} className="px-6 py-3 bg-secondary-500 text-primary-500 inline-block font-semibold text-lg rounded-full transition-all hover:shadow-lg">
            Book a Demo
          </Link>
        </div>

        {/* ✅ Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/services/email-design/about-email.avif"
            alt="Website Design Support"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </Layout>
    </section>
  );
};

export default LandingPagesSupportSection;
