"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import ServicesMegaMenu from "./megamenu/ServicesMegaMenu";
import Button from "../common/Button";
import Link from "next/link";
import ResourcesMegaMenu from "./megamenu/ResourcesMegaMenu";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full h-[80px] px-2 flex items-center z-40">
      <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold flex items-center">
          <span className="text-black">content</span>
          <span className="text-purple-500">β</span>
        </Link>

        {/* Large Screen Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          <ServicesMegaMenu />
          <Link href="#pricing" className="text-gray-700 hover:text-purple-500">
            Pricing
          </Link>
         <ResourcesMegaMenu />
          <Link href="#login" className="text-gray-700 hover:text-purple-500">
            Login
          </Link>
          <Button variant="primary" size="medium">
            Schedule a call
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar for small screens */}
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </nav>
  );
};

export default Navbar;
