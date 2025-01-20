import React from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi"; // Import icons

const Button = ({ children, onClick, variant = "primary", rounded = "medium", size = "medium", icon = null }) => {
  const baseStyles = "font-medium focus:outline-none transition flex items-center justify-center";
  

  // Button Rounded
  const roundedStyles = {
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
  };
  // Button Variants
  const variantStyles = {
    primary: "bg-purple-500 border-[1px] border-purple-500 text-white hover:bg-white hover:text-purple-500 hover:border-purple-500",
    outline: "border border-purple-500 text-purple-500 hover:bg-purple-100",
    secondary: "bg-red-500 text-white hover:bg-red-600",
  };

  // Button Sizes
  const sizeStyles = {
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    small: "px-4 py-2 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]}`}
      onClick={onClick}
    >
      {children}
      {icon === "arrow" && <FiArrowRight className="ml-2" />}
      {icon === "external" && <FiExternalLink className="ml-2" />}
    </button>
  );
};

export default Button;
