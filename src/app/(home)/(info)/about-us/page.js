import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="text-gray-800 ">
      {/* Hero Section */}
      <section className=" relative py-24 text-center text-white">
        {/* overlap image  */}
          <img src="/images/about/about-banner.webp" alt="About Us" className="w-full absolute top-0 left-0 -z-20 h-full object-cover" />
          <div className="bg-white absolute top-0 left-0 -z-10 bg-opacity-50 w-full h-full"></div>
       
        <h1 className="text-5xl font-extrabold text-gray-950 mb-4">About Us</h1>
        <p className="text-lg text-gray-950">Explore our journey, mission, and the passionate people behind Aneeverse Digital Marketing.</p>
      </section>
      <div className='max-w-6xl mx-auto'>

      {/* Mission, Vision, and Values Sections */}
      {[
        {
          title: 'Our Mission',
          description: 'At Aneeverse, our mission is to empower brands through innovative digital marketing strategies that drive growth and deliver measurable results.',
          list: ['Tailored marketing strategies', 'Enhanced online presence', 'Data-driven results'],
          imgSrc: '/images/about/about1.webp',
          imgAlt: 'Our Mission',
        },
        {
          title: 'Our Vision',
          description: 'Our vision is to be the leading digital marketing agency, trusted by businesses globally for our expertise in crafting compelling online campaigns that resonate with audiences.',
          list: ['Transforming brands through digital', 'Creating long-term value for clients', 'Being at the forefront of marketing innovation'],
          imgSrc: '/images/about/about1.webp',
          imgAlt: 'Our Vision',
        },
        {
          title: 'Our Values',
          description: 'Our values are the foundation of everything we do. They guide our team in creating impactful digital marketing solutions and establishing lasting relationships with our clients.',
          list: ['Integrity', 'Innovation', 'Collaboration', 'Transparency', 'Excellence'],
          imgSrc: '/images/about/about1.webp',
          imgAlt: 'Our Values',
        },
      ].map(({ title, description, list, imgSrc, imgAlt, button }, index) => (
        <div key={index} className={`px-6 md:px-12 flex flex-col md:${index % 2 === 0 ? 'flex-row-reverse ' : 'flex-row '} items-center py-16 gap-8`}>
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-lg mb-4">{description}</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              {list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {button && (
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 inline-flex gap-2 items-center text-white px-8 py-4 border-2 border-transparent rounded-full shadow-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300">
                {button} <FaArrowRight />
              </button>
            )}
          </div>

          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src={imgSrc} alt={imgAlt} className="rounded-xl shadow-sm max-h-[450px] w-full object-cover" />
          </div>
        </div>
      ))}
      </div>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Creative Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: 'John Doe', role: 'CEO & Founder', imgSrc: '/images/team/john.jpg' },
              { name: 'Jane Smith', role: 'Chief Marketing Officer', imgSrc: '/images/team/jane.jpg' },
              { name: 'Emily Johnson', role: 'Creative Director', imgSrc: '/images/team/emily.jpg' },
              { name: 'Michael Lee', role: 'Head of Strategy', imgSrc: '/images/team/michael.jpg' },
            ].map(({ name, role, imgSrc }, idx) => (
              <div key={idx} className="text-center">
                <img src={imgSrc} alt={name} className="rounded-full mx-auto w-40 h-40 mb-4 border-4 border-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 shadow-lg" />
                <h3 className="font-semibold text-xl">{name}</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center text-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Ready to Accelerate Your Growth?</h2>
        <p className="text-lg mb-8">Let us help you build an outstanding digital presence. Get in touch with us today!</p>
        <Link href={"/contact"} className="bg-purple-500 text-white inline-flex gap-2 items-center px-6 py-3 border-[2px] border-purple-500 rounded-lg shadow-lg hover:bg-white hover:text-purple-500 transition">
          Contact Us <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
