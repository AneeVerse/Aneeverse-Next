"use client";
import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1120px] mx-auto px-3 sm:px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
