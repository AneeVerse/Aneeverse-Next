"use client";

import React from "react";
import Button from "../common/Button";

const CreativeTeamSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Highlighted Heading */}
          <p className="text-pink-500 font-bold uppercase tracking-wide mb-4">
            What if there was a better way
          </p>
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Meet your high-velocity creative team in your Slack
          </h1>
          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-8">
            Content Beta is your shortcut to an AI-powered in-house creative team. Get an on-demand team of vetted designers, motion artists, and video editors + creative director for a flat monthly subscription. No long-term contracts. ZERO wastage.
          </p>
          {/* CTA Button */}
          <Button variant="primary" size="medium" icon="arrow">
            Schedule a call
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/home/caas.webp" // Replace with the actual image path
            alt="Creative Team"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeTeamSection;
