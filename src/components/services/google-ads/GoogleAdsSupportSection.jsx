"use client";
import Image from "next/image";
import Layout from "../../common/Layout";
import Link from "next/link";

const GoogleAdsSupportSection = () => {
  return (
    <section className="bg-primary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg font-medium border-b border-secondary-500 pb-3 tracking-[2px] text-secondary-500 uppercase mb-6"> {"Maximize Your ROI with Google Ads".toUpperCase()}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-snug">
          Google Ads That{" "}
            <span className="text-secondary-500 text-3xl lg:text-4xl font-Rock_Salt">
            drive results
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-secondary-500 leading-relaxed mb-6">
          Elevate your digital marketing efforts with our expert Google Ads services. From creating high-performing campaigns to optimizing them for maximum conversions, we help your business reach its full potential.
          </p>
          <p className="text-secondary-500 text-md leading-relaxed mb-8">
          Our comprehensive **Google Ads strategies** are designed to meet your business objectives. We offer everything from **keyword research and bid management** to **ad copywriting and A/B testing**, ensuring that your ads not only appear in front of the right audience but also generate meaningful results. Our **Google Shopping Ads** and **Google Display Network Ads** further ensure that your business reaches a broader market.
          
          </p>
          <Link href={"/contact"} className="px-6 py-3 bg-secondary-500 text-primary-500 inline-block font-semibold text-lg rounded-full transition-all hover:shadow-lg">
            Book a Demo
          </Link>
        </div>

        {/* ✅ Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/services/google-ads/about-google-ads.avif"
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

export default GoogleAdsSupportSection;
