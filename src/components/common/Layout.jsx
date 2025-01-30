"use client";
import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`max-w-container mx-auto px-sm md:px-md ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
