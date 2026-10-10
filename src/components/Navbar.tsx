"use client";

import { Menu, User } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-tuentrada-blue text-white p-3 flex justify-between items-center sticky top-0 z-50">
        <button className="text-white p-1" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        
        <Link href="/mis-entradas" className="flex items-center justify-center">
          {/* Logo was black, so we invert it with Tailwind to make it white for the blue header */}
          <img src="/logo.png" alt="TuEntrada Logo" className="h-7 object-contain brightness-0 invert" />
        </Link>
        
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {user ? (
             <img src={user.profilePic || "https://i.pravatar.cc/100?img=5"} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User size={20} className="text-gray-600" />
          )}
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
