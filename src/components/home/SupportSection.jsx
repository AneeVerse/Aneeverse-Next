const SupportSection = () => {
    return (
      <section className="bg-primary-500 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 pr-4 lg:mb-0">
            <p className="text-sm font-semibold border-b pb-2  tracking-wide text-secondary-500 uppercase mb-2">
              {"A New Era of Creative Work".toUpperCase()}
            </p>
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-secondary-500 mb-4">
              The support your team{" "}
              <div className="text-orange-500 text-2xl mt-4 lg:text-3xl  font-Rock_Salt">
               {" has been asking for".toUpperCase()}
              </div>
            </h1>
            <p className="text-xl text-secondary-500 mb-4">
              Aneeverse is your dedicated, on-call creative team to expand your
              production capacity and extend your team’s creative capabilities.
            </p>
            <p className="text-gray-500 mb-6">
              See us as an extension of your team, freeing you to focus on your
              most impactful and creative work.
            </p>
            <button className="px-6 py-3 bg-orange-400 text-white font-semibold text-lg rounded-lg hover:bg-orange-500 transition">
              Get Started
            </button>
          </div>
  
          {/* Right Video Section */}
          <div className="lg:w-1/2">
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
  
  export default SupportSection;
  