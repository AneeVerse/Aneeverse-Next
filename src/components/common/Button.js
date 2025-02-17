"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({
  children,
  href = "#",
  textColor = "text-white",
  bgColor = "bg-secondary-500",
  borderColor = "border-secondary-500",
  hoverBgColor = "bg-primary-500",
  hoverTextColor = "text-white",
  
  className = "",
  ...props
}) => {
  return (
    <Link href={href} passHref className="block ">
      <motion.div
        className={`relative px-6 py-[10px] font-semibold rounded-full inline-block tracking-wide cursor-pointer overflow-hidden border ${textColor} ${bgColor} ${borderColor} hover:${hoverTextColor}  group ${className}`}
        whileHover="hover"
        whileTap="active"
        initial="initial"
        // if hold device, click event will not fire and remove focus
        onTouchEnd={(e) => e.target.blur()}
        // fix ios safari focus issue
        onMouseDown={(e) => e.target.blur()}

        {...props}
      >
        {/* Background Animation */}
        <motion.div
          className={`absolute inset-0 ${hoverBgColor} z-0`}
          variants={{
            initial: { x: "-100%" },
            hover: { x: 0 },
            active: { x: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        {/* Button Text */}
        <motion.span
          className="relative z-10"
          variants={{
            initial: { color: textColor },
            hover: { color: hoverTextColor },
            active: { color: hoverTextColor },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Button;