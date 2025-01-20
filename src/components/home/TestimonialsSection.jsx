"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Peyton Walbeck",
      position: "Head of Marketing",
      text: "Content beta has been amazing at creating creatives exactly how we’ve envisioned them even though they weren’t fully thought out.",
      videoThumbnail: "/images/home/testi-1.webp", // Replace with actual thumbnail path
    },
    {
      name: "Arianna Gonzalez",
      position: "Growth Strategist",
      text: "We have less people asking us questions and we see 33% higher free-to-paid conversions.",
      videoThumbnail: "/images/home/testi-2.webp", // Replace with actual thumbnail path
    },
    {
      name: "Chad Burmeister",
      position: "Founder",
      text: "When we played product explainer video, the first prospect who saw it, bought our platform.",
      videoThumbnail: "/images/home/testi-1.webp", // Replace with actual thumbnail path
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Highly Recommended By Companies Like Yours
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md p-6"
            >
              {/* Video Thumbnail */}
              <div className="relative mb-4">
                <img
                  src={testimonial.videoThumbnail}
                  alt={`${testimonial.name} testimonial`}
                  className="rounded-lg w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-600 italic mb-4">“{testimonial.text}”</p>

              {/* Client Info */}
              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
