"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { Info, Calendar, MapPin, Ticket as TicketIcon } from "lucide-react";

export default function MisEntradasPage() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!mounted || !isAuthenticated) return null;

  return (
    <div className="bg-white min-h-screen text-[#111] pb-10">
      {/* Header & Tabs */}
      <div className="px-5 pt-5">
        <h1 className="text-[26px] font-extrabold mb-4 tracking-tight">Entradas</h1>
        
        <div className="flex border-b border-gray-200">
          <div className="font-bold text-[16px] text-[#111] pb-3 border-b-[3px] border-[#17529b] px-1">
            Próximamente
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Info Notice */}
        <div className="flex items-start gap-2 text-[#17529b] mb-6">
          <Info className="w-5 h-5 shrink-0 mt-[2px]" />
          <span className="text-[14px] leading-tight">
            Click en la imagen del evento para VER o<br />TRANSFERIR tus entradas
          </span>
        </div>

        {/* Event Banner (Clickable) */}
        <div className="mb-6">
          <Link href="/mis-entradas/ticket" className="block mb-4 active:opacity-80 transition-opacity">
            <img 
              src="/banner.png" 
              alt="Los Fundamentalistas del Aire Acondicionado" 
              className="w-full rounded-md object-cover shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            />
          </Link>

          {/* Event Details */}
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-[20px] font-bold leading-tight text-[#111]">
              Los Fundamentalistas del Aire Acondicionado
            </h2>
            <div className="flex items-center gap-1 font-bold text-[16px] text-[#111] shrink-0 ml-3">
              <TicketIcon className="w-[20px] h-[20px]" />
              <span>1</span>
            </div>
          </div>
          
          <div className="text-[14px] text-[#555] uppercase font-semibold mb-4 leading-snug tracking-wide">
            LOS FUNDAMENTALISTAS DEL AIRE<br />ACONDICIONADO
          </div>

          <div className="flex items-center gap-3 text-[#444] mb-3 text-[15px]">
            <Calendar className="w-5 h-5 shrink-0" />
            <span>10/10/26 - 21:00</span>
          </div>

          <div className="flex items-center gap-3 text-[#444] text-[15px] mb-8">
            <MapPin className="w-5 h-5 shrink-0" />
            <span>Hipódromo de Tucumán</span>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full py-3.5 rounded-lg border border-[#111] font-bold text-[16px] text-[#111] bg-white active:bg-gray-100 transition-colors">
          Buscar entradas
        </button>
      </div>
    </div>
  );
}
