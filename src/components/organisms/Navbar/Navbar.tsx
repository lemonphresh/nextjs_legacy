"use client";

import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/shadcn-ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full relative z-30 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          aria-label="Toggle menu"
          className="p-2 text-gray-800"
          style={{ cursor: "pointer" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        <div className="text-[28px] font-serif text-[#006699] tracking-tight select-none">
          Legacy<sup className="text-[10px] ml-0.5">®</sup>
        </div>

        <div>
          <Button
            circular
            className="border-gray-300 text-gray-800 hover:bg-gray-100 px-4 py-2"
            icon={<UserIcon className="w-5 h-5" />}
            variant="secondary"
          >
            Sign In
          </Button>
        </div>
      </div>

      {/* floating menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md z-20">
          <div className="flex flex-col px-4 py-3 gap-3">
            <Link
              className="text-gray-800 hover:text-[#006699] font-medium"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-gray-800 hover:text-[#006699] font-medium"
              href="/obitwriter/obituary"
              onClick={() => setIsMenuOpen(false)}
            >
              ObitWriter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
