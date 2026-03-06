import React from 'react';
import Image from 'next/image';
import AnimatedButton from '../common/AnimatedButton';
import SanityImage from '../common/SanityImage';

const InlineNewsletter = ({ title, description, image, buttonText, buttonLink }) => {
    return (
        <div className="my-12 w-full bg-white rounded-[24px] overflow-hidden border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-stretch min-h-[280px] relative">
            {/* Left Content */}
            <div className="flex-[1.2] p-8 md:p-10 flex flex-col justify-center relative z-10">
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#101828] leading-[1.2] mb-3 tracking-tight">
                    {title || "We create strategic design assets for 200+ B2B & SaaS companies."}
                </h2>
                <p className="text-sm md:text-base text-[#475467] font-normal leading-relaxed mb-6 max-w-[500px]">
                    {description || "Sales presentations, Marketing collateral, Website graphics, Ads Creative and more."}
                </p>
                <div className="w-fit">
                    <AnimatedButton
                        href={buttonLink || "/portfolio"}
                        className="px-7 py-2 rounded-full bg-[#073742] !text-white font-bold border border-[#073742] hover:opacity-90 transition-all no-underline"
                        mainTextSlide="-150%"
                        duplicateTextStart="150%"
                        duplicateTextEnd="-120%"
                    >
                        <span className="!text-white no-underline">{buttonText || "View design portfolio"}</span>
                    </AnimatedButton>
                </div>
            </div>

            {/* Right Image/Collage */}
            <div className="flex-1 relative hidden md:flex items-center justify-center p-6 bg-[#F9FAFB]">
                <div className="w-full h-full relative overflow-hidden rounded-2xl">
                    {image ? (
                        <SanityImage
                            image={image}
                            alt={image?.alt || "Newsletter Featured Image"}
                            fill={true}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    ) : (
                        <div className="relative w-full h-full flex items-center justify-center bg-white border border-gray-100 shadow-inner">
                            <Image
                                src="/images/newsletter-collage.png"
                                alt="Design Assets Collage"
                                fill
                                className="object-contain p-4 opacity-90 transition-transform duration-500 hover:scale-105"
                                unoptimized
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Image */}
            <div className="md:hidden w-full h-[180px] relative bg-[#F9FAFB]">
                {image ? (
                    <SanityImage
                        image={image}
                        alt={image?.alt || "Newsletter Featured Image"}
                        fill={true}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src="/images/newsletter-collage.png"
                        alt="Design Assets Collage"
                        fill
                        className="object-contain p-4"
                        unoptimized
                    />
                )}
            </div>
        </div>
    );
};

export default InlineNewsletter;
