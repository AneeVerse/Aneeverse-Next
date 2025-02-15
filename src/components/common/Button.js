"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({ children, href, border = "border-secondary-500" ,variant = "primary", className = "", ...props }) => {
  // Common styles
  const baseStyles = "px-6 py-[10px] font-semibold rounded-full relative overflow-hidden inline-block tracking-wide cursor-pointer";
  const primaryStyles =`${`bg-primary-500 text-secondary-500 hover:text-primary-500 active:text-secondary-500 border ${border}`}`; 
  const secondaryStyles = "border border-secondary-500 bg-secondary-500  active:text-primary-500 text-primary-500 hover:text-secondary-500";

  return (
    <Link href={href} passHref>
      <motion.div
        className={` ${className} ${baseStyles} ${
          variant === "primary" ? primaryStyles : secondaryStyles
        }`}
        whileHover="hover"
        initial="initial"
        {...props}
      >
        {/* Background Animation */}
        <motion.div
          className={`absolute inset-0 ${variant == "primary" ? " bg-secondary-500 text-primary-100 " : " bg-primary-500 text-secondary-500 "} z-0`}
          variants={{
            initial: { x: "-100%" },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        {/* Text */}
        <span className="relative z-10">{children}</span>
      </motion.div>
    </Link>
  );
};

export default Button;
