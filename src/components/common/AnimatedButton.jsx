"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedButton = ({ 
  href, 
  children, 
  className = "", 
  style = {},
  mainTextSlide = "-120%",  // How far main text slides up
  duplicateTextStart = "10%", // Starting position of duplicate text
  duplicateTextEnd = "-100%", // End position of duplicate text
  ...props 
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden inline-block ${className}`}
      style={style}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <Link href={href} className="block w-full h-full relative">
        {/* Current text - slides up on hover */}
        <motion.div
          className="block relative z-10"
          variants={{
            initial: { y: 0 },
            hover: { y: mainTextSlide }
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        
        {/* Duplicate text - hidden below, comes up on hover */}
        <motion.div
          className="absolute top-full left-0 w-full"
          variants={{
            initial: { y: duplicateTextStart },
            hover: { y: duplicateTextEnd }
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AnimatedButton; 