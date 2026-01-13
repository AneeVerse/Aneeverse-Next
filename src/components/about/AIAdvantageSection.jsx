"use client";
import Layout from "../common/Layout";
import { FaPiggyBank, FaRobot, FaForward, FaShieldAlt } from 'react-icons/fa';

export default function AIAdvantageSection() {
  const features = [
    {
      icon: <FaPiggyBank className="text-2xl md:text-3xl" />,
      title: "Saving time and money",
      description: "We know the ins and outs of working with AI, completing over 3,000 projects in 2024, saving Aneeverse customers over $3.5M in costs."
    },
    {
      icon: <FaRobot className="text-2xl md:text-3xl" />,
      title: "Integrated human + AI workflow",
      description: "Almost 100% of Aneeverse creatives are AI-certified so they can move faster while ensuring alignment with brand and brief."
    },
    {
      icon: <FaForward className="text-2xl md:text-3xl" />,
      title: "Continuously future-proofing",
      description: "We're always testing the limits of AI tools. When even that's not far enough, our AI experts define custom workflows, models and plugins to keep you ahead."
    },
    {
      icon: <FaShieldAlt className="text-2xl md:text-3xl" />,
      title: "Transparency and control",
      description: "You choose how we use AI in the creative process for your brand, ensuring output aligns with expectations and legal requirements."
    }
  ];

  return (
    <section className="bg-[#eee2ca] relative">
      <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
        <img
          src="/images/about/after-hero.avif"
          alt="Astronaut working at desk"
          className="object-cover w-full h-full"
        />
      </div>
      
      <Layout className="relative">
        <div className="flex flex-col md:flex-row md:min-h-[800px] md:items-center py-8 md:py-16 px-4 md:px-0">
          <div className="w-full md:w-1/2 md:pr-8 lg:pr-16">
            <div className="mb-6 md:mb-8">
              <p className="uppercase text-xs font-normal text-secondary-500/80 tracking-[0.2em] mb-3 md:mb-4">
                SOLUTIONS FOR MODERN TEAMS
              </p>
              <div className="w-full max-w-md border-t border-secondary-500/20 mb-6 md:mb-10"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-secondary-500 leading-[1.1] mb-4 md:mb-8">
              Your shortcut to <span className="font-serif text-[calc(100%+4px)]"><em>AI's creative advantage</em></span>
            </h1>
            
            <p className="text-base md:text-lg font-light text-secondary-500 mb-8 md:mb-20 max-w-xl leading-relaxed">
              You're under pressure to do more: faster, cheaper, and with fewer resources, while 
              figuring out how to use AI safely and effectively. That's where we come in.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-10 md:gap-y-20">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="bg-[#d7ceb8] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-sm mb-3 md:mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-secondary-500 mb-2 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-500/90 text-sm md:text-base font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mobile image - only visible on small screens - moved to end */}
            <div className="md:hidden w-full mt-12">
              <img
                src="/images/about/after-hero.avif"
                alt="Astronaut working at desk"
                className="object-cover rounded-lg w-full h-[300px] sm:h-[400px]"
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
} 
