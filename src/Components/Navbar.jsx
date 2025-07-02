import React, { useState } from "react";
import { Bell, LogOut, User } from "lucide-react";

export const Navbar = ({ activeBar, setActiveBar }) => {
  const [active, setActive] = useState("BM");
  
  return (
    <div className="fixed flex bg-gradient-to-r from-[#55D6C2] to-[#4AC5B2] justify-between h-16 w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center">
        <button
          className="md:hidden ml-4 p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
          onClick={() => setActiveBar(!activeBar)}
        >
          ☰
        </button>
        <h1 className="text-white text-3xl font-bold ml-4">
          <span className="text-yellow-300">Help</span>desk
        </h1>
      </div>

      <div className="flex items-center space-x-3 md:space-x-6 text-white mr-4 md:mr-6">
        <div className="flex items-center bg-white/20 rounded-lg p-1">
          <button
            className={`flex justify-center h-8 w-12 md:h-10 md:w-14 items-center rounded-md font-semibold transition-all ${
              active === "BM" ? "bg-white text-[#55D6C2] shadow-md" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setActive("BM")}
          >
            BM
          </button>
          <button
            className={`flex justify-center h-8 w-12 md:h-10 md:w-14 items-center rounded-md font-semibold transition-all ${
              active === "BI" ? "bg-white text-[#55D6C2] shadow-md" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setActive("BI")}
          >
            BI
          </button>
        </div>
        <div className="relative">
          <Bell className="cursor-pointer text-xl hover:text-yellow-300 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
        </div>
        <User className="cursor-pointer text-xl hover:text-yellow-300 transition-colors" />
        <LogOut className="cursor-pointer text-xl hover:text-yellow-300 transition-colors" />
      </div>
    </div>
  );
};