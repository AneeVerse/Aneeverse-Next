"use client"
import Layout from "../common/Layout";
import { useEffect, useState } from "react";

const SupportSection = () => {
  const vimeoVideoId = "347119375"; // अपना Vimeo वीडियो ID यहां डालें
  const [isPlaying, setIsPlaying] = useState(false);


  // Vimeo Player Initialization
  useEffect(() => {
    const loadVimeoScript = () => {
      const script = document.createElement('script');
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (typeof window !== 'undefined') {
      loadVimeoScript();
    }
  }, []);

  const handlePlay = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new window.Vimeo.Player(iframe);
      player.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-primary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-sm font-light border-b pb-2 tracking-[2px] text-secondary-500 uppercase mb-2">
            {"A New Era of Creative Work".toUpperCase()}
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-secondary-500 mb-4">
            The support your team{" "}
            <span className="block text-orange-500 text-2xl mt-4 lg:text-3xl font-Rock_Salt">
              {"has been asking for"}
            </span>
          </h1>
          <p className="text-lg text-secondary-500 mb-4">
            Aneeverse is your dedicated, on-call creative team to expand your
            production capacity and extend your team’s creative capabilities.
          </p>
          <p className="text-gray-500 mb-6">
            See us as an extension of your team, freeing you to focus on your
            most impactful and creative work.
          </p>
          <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold text-md rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src={`https://player.vimeo.com/video/${vimeoVideoId}?loop=1&controls=1&title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Aneeverse Demo Video"
            ></iframe>

            {/* Custom Play Button */}
            {!isPlaying && (
              <button 
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 hover:bg-black/20 transition-colors"
                aria-label="Play Video"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg 
                    className="w-8 h-8 text-gray-900 ml-1" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default SupportSection;