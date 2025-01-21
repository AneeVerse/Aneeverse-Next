import React from 'react';

const images = [
  '/images/works/design/design6.webp',
    '/images/works/design/design2.webp',
    '/images/works/design/design3.webp',
    '/images/works/design/design4.webp',
    '/images/works/design/design1.webp',
    '/images/works/design/design5.webp',
    '/images/works/design/design3.webp',
    '/images/works/design/design4.webp',

  '/images/works/design/design6.webp',
  '/images/works/design/design2.webp',
  '/images/works/design/design3.webp',
  '/images/works/design/design4.webp',
  '/images/works/design/design1.webp',
  '/images/works/design/design5.webp',
  '/images/works/design/design3.webp',
  '/images/works/design/design4.webp',
];

const ImageColumnLayout = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2> */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <img src={image} alt={`Work ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageColumnLayout;
