import React from "react";

export const Footer = ({ activeBar }) => {
  return (
    <div
      className={`fixed bottom-0 h-12 px-6 bg-gradient-to-r from-[#55D6C2] to-[#4AC5B2] flex items-center justify-between z-10 w-full transition-all duration-300 shadow-lg ${
        activeBar ? 'ml-0 md:ml-64' : 'ml-0'
      }`}
    >
      <div className="flex items-center space-x-4">
        <h1 className="text-white font-semibold text-sm">© 2025 Helpdesk System</h1>
      </div>
      <div className="flex items-center space-x-4 text-white text-xs">
        <span>Version 1.2.0</span>
        <span>|</span>
        <span>Support: help@company.com</span>
      </div>
    </div>
  );
};