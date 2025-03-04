"use client";
import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`max-w-container mx-auto px-sm md:px-md lg:mx-[20px] xl:mx-[50px]  2xl:mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
