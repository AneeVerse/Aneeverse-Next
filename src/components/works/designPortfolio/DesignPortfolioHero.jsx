import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DesignPortfolioHero = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tight">Design Portfolio</h1>
          <p className="text-lg">
            Our team of Top 2% graphic designers, UI/UX Designers, and Creative Directors work together to provide top-notch creative solutions in various categories – Ad Creatives, Landing Pages, Whitepapers and eBooks, and Presentation Deck.
          </p>
          <button className="bg-purple-500 inline-flex gap-2 items-center text-white px-6 py-3 border-[2px] border-purple-500 rounded-lg shadow-lg hover:bg-white hover:text-purple-500 transition-all duration-300">
            PICK YOUR PLAN <FaArrowRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/images/works/design/design-portfolio-hero.webp"
            alt="Design Portfolio"
            className="rounded-md max-h-[400px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignPortfolioHero;
