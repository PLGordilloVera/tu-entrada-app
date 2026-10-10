"use client";

import { Menu, Ticket, Crown, HelpCircle, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-[#1a5ba8] z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header inside sidebar (matches the navbar) */}
        <div className="flex items-center p-4 border-b border-blue-800/30">
          <button onClick={onClose} className="text-white p-1 mr-4">
            <Menu size={28} />
          </button>
          <div className="flex items-center justify-center w-full pr-10">
            <img src="/logo.png" alt="TuEntrada Logo" className="h-6 object-contain brightness-0 invert" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-6 flex flex-col gap-2">
          {/* Entradas */}
          <Link 
            href="/mis-entradas" 
            onClick={onClose}
            className={`flex items-center gap-3 px-6 py-3 mx-4 rounded-md transition-colors ${
              pathname.includes("/mis-entradas") 
                ? "bg-white text-[#17529b] font-semibold shadow-sm" 
                : "text-white hover:bg-white/10"
            }`}
          >
            <Ticket size={20} className={pathname.includes("/mis-entradas") ? "text-[#17529b]" : "text-white"} />
            <span className="text-[15px]">Entradas</span>
          </Link>

          {/* Suscripción */}
          <button 
            onClick={() => { alert("Funcionalidad de Suscripción en desarrollo"); onClose(); }}
            className="flex items-center gap-3 px-6 py-3 mx-4 rounded-md text-white hover:bg-white/10 transition-colors text-left"
          >
            <Crown size={20} />
            <span className="text-[15px]">Suscripción</span>
          </button>

          {/* Ayuda */}
          <button 
            onClick={() => { alert("Centro de ayuda"); onClose(); }}
            className="flex items-center gap-3 px-6 py-3 mx-4 rounded-md text-white hover:bg-white/10 transition-colors text-left"
          >
            <HelpCircle size={20} />
            <span className="text-[15px]">Ayuda</span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#16488a] mt-auto">
          <button className="flex items-center gap-2 border border-white/40 rounded-full px-4 py-1.5 text-white text-sm mb-6 hover:bg-white/10 transition">
            <Globe size={16} />
            <span className="font-medium">Castellano</span>
          </button>

          <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-bold text-white mb-6">
            <Link href="#" className="hover:underline">Política de cookies</Link>
            <span>•</span>
            <Link href="#" className="hover:underline">Configuración de cookies</Link>
            <span>•</span>
            <Link href="#" className="hover:underline">Aviso Legal</Link>
            <span>•</span>
            <Link href="#" className="hover:underline">Política de privacidad</Link>
          </div>

          <div className="text-[11px] text-white/80 leading-relaxed">
            <p>© Copyright 2026</p>
            <p className="flex items-center gap-1 mt-0.5">Powered by <span className="font-bold tracking-widest text-white">ONEBOX</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
