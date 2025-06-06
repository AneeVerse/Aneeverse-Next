"use client";
import Layout from "../common/Layout";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const TextWithVideo = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Try to autoplay the video when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
      <section className="pt-8 md:pt-12">
        <Layout className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-0">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-4">
           
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-primary-500 mb-4">
              A <span className="font-Rock_Salt">smarter</span> way to scale your creative
              
            </h1>
            <p className="text-base md:text-lg text-primary-500 mb-4">
              aneeverse replaces creative bottlenecks with limitless creative output, empowering you to bring your bold visions to life faster.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
              "aneeverse combines creative talent from around the world with purpose-built tech to
              deliver a significantly faster, cheaper and better customer experience than traditional
              agency networks and freelance marketplaces."
            </p>

            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
              - Fredrik Thomassen, Co-founder and CEO
            </p>
           
          </div>
  
          {/* Right Video Section */}
          <div className="w-full lg:w-1/2 lg:ml-auto lg:mr-0">
            <div 
              className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-black rounded-lg overflow-hidden" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setTimeout(() => setIsHovering(false), 2000)}
            >
              <video 
                ref={videoRef}
                src="/video/3209211-uhd_3840_2160_25fps.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
                autoPlay
                muted
                loop
                onClick={handlePlayVideo}
                playsInline
              />
              {isHovering && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity duration-300"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  onClick={handlePlayVideo}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-900 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                    {isPlaying ? (
                      <FaPause className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    ) : (
                      <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" />
                    )}
                  </div>
                </button>
              )}
            </div>
          </div>
        </Layout>
      </section>
    );
  };
  
  export default TextWithVideo;
  