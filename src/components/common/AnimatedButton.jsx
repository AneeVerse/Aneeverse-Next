"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedButton = ({ 
  href, 
  children, 
  className = "", 
  style = {},
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
            hover: { y: "-120%" }
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        
        {/* Duplicate text - hidden below, comes up on hover */}
        <motion.div
          className="absolute top-full left-0 w-full"
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" }
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