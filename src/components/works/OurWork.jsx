import React from 'react';

const works = [
  {
    image: '/images/works/design/design1.webp',
    title: 'Shopify',
    subtitle: 'Ad Creative',
  },
  {
    image: '/images/works/design/design2.webp',
    title: 'Reddit',
    subtitle: 'Motion Design, Social Media Creative',
  },
  {
    image: '/images/works/design/design3.webp',
    title: 'Salesforce',
    subtitle: 'Motion Design, Ad Creative',
  },
  {
    image: '/images/works/design/design4.webp',
    title: 'Example Work',
    subtitle: 'Example Subtitle',
  },

    {
    image: '/images/works/design/design2.webp',
    title: 'Example Work',
    subtitle: 'Example Subtitle',
    },
    {
    image: '/images/works/design/design1.webp',
    title: 'Example Work',
    subtitle: 'Example Subtitle',
    },
    
];

const OurWork = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {works.map((work, index) => (
            <div key={index} className="break-inside-avoid cursor-pointer mb-8">
                {/* hover zoom animation */}
                <div className='relative rounded-lg overflow-hidden'>
              <img src={work.image} alt={work.title} className="w-full h-auto  rounded-lg shadow-lg hover:scale-110 transition-all duration-300" />
              </div> <h3 className="mt-4 text-xl font-semibold text-left">{work.title}</h3>
              <p className="text-left text-gray-600">{work.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
