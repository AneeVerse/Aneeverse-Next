"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Layout from "../common/Layout";
import { FaPlay } from "react-icons/fa";

const OurWorkWithVideoOurTeam = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const togglePlay = () => {
    const video = videoRef.current;
    
    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-secondary-500 py-3 md:py-10">
      <Layout className="flex flex-col items-center justify-center min-h-screen">
        
      <h2 className="text-primary-500 text-center text-4xl md:text-6xl font-semibold mb-6">See how <span className="font-Rock_Salt">top brands</span> use aneeverse.</h2>
      <p className="text-gray-300 text-center max-w-xl mb-6">
        Take a glimpse of what's possible—check out some of our most creative collaborations to date.
      </p>
      <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#0e2f50] transition-all">
        Explore our work
      </button>
      <motion.div
        ref={ref}
        style={{ scale }}
        className="mt-6 w-full max-w-5xl overflow-hidden rounded-lg shadow-lg relative"
      >
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover cursor-pointer"
          src="/video/workvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          onClick={togglePlay}
        ></video>
        
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
              <FaPlay className="text-secondary-500 text-xl md:text-2xl ml-1" />
            </div>
          </div>
        )}
      </motion.div>
      
      </Layout>
    </section>
  );
};

export default OurWorkWithVideoOurTeam;
