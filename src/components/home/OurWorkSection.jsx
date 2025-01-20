"use client";

import React from "react";

const OurWorkSection = () => {
  const cards = [
    {
      title: "Ad Creative",
      image: "/images/home/work/Ad3.webp", // Replace with actual image path
    },
    {
      title: "Product Explainer",
      image: "/images/home/work/product.gif", // Replace with actual image path
    },
    {
      title: "Social Asset",
      image: "/images/home/work/work2.gif", // Replace with actual image path
    },
    {
      title: "Animated Video",
      image: "/images/home/work/work3.gif", // Replace with actual image path
    },
    {
      title: "Campaign Assets",
      image: "/images/home/work/work5.gif", // Replace with actual image path
    },
    {
      title: "Whitepaper",
      image: "/images/home/work/work4.gif", // Replace with actual image path
    },
    {
      title: "Short-form Video",
      image: "/images/home/work/work5.gif", // Replace with actual image path
    },

    {
      title: "Ad Creative",
      image: "/images/home/work/Ad3.webp", // Replace with actual image path
    },
    {
      title: "Product Explainer",
      image: "/images/home/work/product.gif", // Replace with actual image path
    },
    {
      title: "Social Asset",
      image: "/images/home/work/work2.gif", // Replace with actual image path
    },
    {
      title: "Animated Video",
      image: "/images/home/work/work3.gif", // Replace with actual image path
    },
    {
      title: "Campaign Assets",
      image: "/images/home/work/work5.gif", // Replace with actual image path
    },
    {
      title: "Whitepaper",
      image: "/images/home/work/work4.gif", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 bg-[#FDF5F3]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
          <p className="text-gray-600 mt-2">
            Your one-stop shop for all your video and design creatives.
          </p>
        </div>

        {/* Cards in Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-[2px] p-4 border-gray-900 rounded-2xl shadow-lg overflow-hidden break-inside-avoid"
            >
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-950">
                  {card.title}
                </h3>
              </div>
              {/* Image */}
              <div className="h-auto overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
