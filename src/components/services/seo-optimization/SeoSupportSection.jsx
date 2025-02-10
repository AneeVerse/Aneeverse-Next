"use client";
import Image from "next/image";
import Layout from "../../common/Layout";
import Link from "next/link";

const SeoSupportSection = () => {
  return (
    <section className="bg-primary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg font-medium border-b border-secondary-500 pb-3 tracking-[2px] text-secondary-500 uppercase mb-6">
          {"SEO Strategies for Maximum Visibility".toUpperCase()}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-snug">
          SEO That{" "}
            <span className="text-secondary-500 text-3xl lg:text-4xl font-Rock_Salt">
            ranks & converts
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-secondary-500 leading-relaxed mb-6">
          Drive organic traffic and improve search rankings with our expert SEO solutions.
          We optimize websites for better visibility, engagement, and long-term success.
          </p>
          <p className="text-secondary-500 text-md leading-relaxed mb-8">
          From **technical SEO audits** to **keyword research** and **content optimization**,  
            our tailored strategies ensure that your brand gets discovered and ranks higher in SERPs.
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

export default SeoSupportSection;
