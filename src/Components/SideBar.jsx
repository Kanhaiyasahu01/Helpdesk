import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Ticket, User } from "lucide-react";

export const SideBar = ({ activeBar, setActiveBar, activeModal, setActiveModal }) => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "newticket", icon: PlusCircle, label: "New Ticket" },
    { id: "myticket", icon: Ticket, label: "My Tickets" }
  ];

  return (
    <div>
      {!activeBar && (
        <div className="hidden md:block fixed top-1/2 left-0 z-30 transform -translate-y-1/2">
          <button
            className="w-8 h-16 text-center text-white bg-[#55D6C2] rounded-r-lg shadow-lg hover:bg-[#4AC5B2] transition-colors"
            onClick={() => setActiveBar(true)}
          >
            ›
          </button>
        </div>
      )}

      {activeBar && (
        <div className={`bg-gradient-to-b from-gray-50 to-gray-100 h-screen mt-16 fixed w-64 z-20 top-0 left-0 shadow-xl border-r border-gray-200 transition-transform duration-300 ${
          activeBar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
          <div className="p-6 space-y-4">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#55D6C2] to-[#4AC5B2] rounded-full mx-auto mb-3 flex items-center justify-center">
                <User className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">IT Department</p>
            </div>

            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setActiveModal(item.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                      activeModal === item.id
                        ? "bg-gradient-to-r from-[#55D6C2] to-[#4AC5B2] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </div>
              );
            })}

            <div className="pt-6 mt-8 border-t border-gray-300">
              <div className="space-y-3">
                <button className="w-full p-3 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Switch Account
                </button>
                <button className="w-full p-3 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Logout
                </button>
              </div>
            </div>
          </div>

          <button
            className="md:hidden absolute top-4 right-4 w-8 h-8 text-center text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => setActiveBar(false)}
          >
            ×
          </button>

          <div className="hidden md:block fixed top-1/2 right-0 z-30 transform -translate-y-1/2 translate-x-8">
            <button
              className="w-8 h-16 text-center text-white bg-[#55D6C2] rounded-r-lg shadow-lg hover:bg-[#4AC5B2] transition-colors"
              onClick={() => setActiveBar(false)}
            >
              ‹
            </button>
          </div>
        </div>
      )}
    </div>
  );
};