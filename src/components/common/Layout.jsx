"use client";
import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
