import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f6ef] text-center text-sm text-gray-700 py-10">
      <div className="flex justify-center gap-4 flex-wrap text-[#006699] font-medium mb-4">
        <a className="hover:underline" href="#">
          Contact Us
        </a>
        <span className="text-gray-400">|</span>
        <a className="hover:underline" href="#">
          FAQ
        </a>
        <span className="text-gray-400">|</span>
        <a className="hover:underline" href="#">
          Privacy Policy
        </a>
        <span className="text-gray-400">|</span>
        <a className="hover:underline" href="#">
          Terms of Use
        </a>
      </div>

      <div className="text-[#006699] font-serif text-lg font-medium">
        Legacy<sup className="text-xs ">®</sup>
      </div>
      <div className="text-gray-600 text-xs mt-1">
        ©2025 Legacy.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
