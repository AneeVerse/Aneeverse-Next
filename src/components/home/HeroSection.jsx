import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/common/Button"; // Import your reusable Button component
import Container from "../common/Container";

const HeroSection = () => {
  return (
    <div className="bg-[#073742] text-[#EBFAFE]">
    <Container className="pt-[120px] pb-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 px-3 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            On-demand Video and Design for Tech
          </h1>
          <p className="text-lg mb-6">
            Get access to high-velocity creative team that works with your brand. Ship campaigns —
            faster, more reliably, and at scale.
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-4 mb-8">
            {["24-hour turnaround", "Dedicated Creative Director", "We work in your Slack"].map(
              (feature, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <FaCheckCircle className="text-[#EBFAFE]" />
                  {feature}
                </li>
              )
            )}
          </ul>

          {/* Call to Action */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Updated Button */}
            <Button variant="primary" size="medium" rounded="large">
              Talk to us
            </Button>
            <Button variant="outline" size="medium">
              How it Works
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-center lg:text-left mt-6">Flat pricing. Cancel Anytime.</p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/home/CB-Hero-Image-New.webp" // Replace with the actual image path
            alt="Testimonials"
            className="w-full"
          />
        </div>
      </div>
    </Container>
    </div>
  );
};

export default HeroSection;
