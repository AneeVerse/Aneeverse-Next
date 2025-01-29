const ServicesSupportSection = () => {
    return (
      <section className="bg-primary-500 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 pr-4 lg:mb-0">
            <p className="text-sm  tracking-[2px] font-light border-b pb-2  text-secondary-500 uppercase mb-2">
              {"A variety of design services at your fingertips".toUpperCase()}
            </p>
            <h1 className="text-4xl lg:text-5xl  leading-tight text-secondary-500 mb-4">
            Get graphic design, print, motion, video{" "}
              <span className="t-4  font-Rock_Salt">
               and more
              </span>
            </h1>
            <p className="text-lg text-secondary-500 mb-6">
            Whether you need an out-of-this-world
illustration, beautiful print designs, or engaging
digital marketing assets, aneeverse’s world-class
graphic designers from around the world will
make it happen.
            </p>
            {/* <p className="text-gray-500 mb-6">
              See us as an extension of your team, freeing you to focus on your
              most impactful and creative work.
            </p> */}
            <button className="px-6 py-3 bg-secondary-500 text-primary-500 font-semibold text-md rounded-full  transition">
              Book a Demo
            </button>
          </div>
  
          {/* Right Video Section */}
          <div className="w-full max-w-xl mx-auto lg:w-1/2">
            <div className="relative w-full h-64 lg:h-80 bg-black rounded-lg overflow-hidden">
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play Video"
              >
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.293 5.293a1 1 0 0 1 1.414 0L10.414 8l-2.707 2.707a1 1 0 1 1-1.414-1.414L8.586 8 6.293 5.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSupportSection;
  