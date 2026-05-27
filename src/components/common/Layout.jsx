"use client";
import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-6 xl:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
