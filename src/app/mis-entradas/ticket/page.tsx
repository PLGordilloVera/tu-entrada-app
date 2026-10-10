"use client";

import { useAuthStore } from "@/store/auth";
import { Calendar, MapPin, Ticket as TicketIcon, Download, Wallet, Mail } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketPage() {
  const { user, isAuthenticated } = useAuthStore();
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
      <div className="p-5">
        {/* Title Section */}
        <h1 className="text-[24px] font-extrabold mb-1 leading-tight">Los Fundamentalistas del Aire Acondicionado</h1>
        <div className="text-[15px] text-[#444] uppercase mb-6 leading-snug">
          LOS FUNDAMENTALISTAS DEL AIRE<br />ACONDICIONADO
        </div>

        {/* Info Rows */}
        <div className="flex items-start gap-3 mb-4 text-[16px] text-[#333]">
          <Calendar className="w-5 h-5 text-[#333] mt-[2px] shrink-0" />
          <span>10/10/26 - 21:00</span>
        </div>

        <div className="flex items-start gap-3 mb-6 text-[16px] text-[#333]">
          <MapPin className="w-5 h-5 text-[#333] mt-[2px] shrink-0" />
          <span>Hipódromo de Tucumán, San Miguel de Tucumán</span>
        </div>

        {/* Ticket Card */}
        <div className="bg-[#f2f2f4] rounded-lg p-4 mt-6">
          <div className="text-[15px] text-[#333] mb-2">
            {user?.name || "Usuario"} | Anticipada
          </div>
          
          <div className="flex items-center gap-2 text-[15px] font-medium mb-4">
            <TicketIcon className="w-[22px] h-[22px]" />
            <span><strong>CAMPO</strong> - Sin numerar</span>
          </div>

          <div className="text-right text-[15px] mb-3">
            92.000,00 ARS
          </div>

          {/* QR Section */}
          <div className="bg-white rounded-lg p-5 flex flex-col items-center shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
            <div className="mb-4">
              <QRCodeSVG 
                value={user?.qrCode || "93486BAR9VY60R"} 
                size={180} 
                level="H" 
                includeMargin={false} 
              />
            </div>
            <div className="text-[14px] text-[#333] mb-4 tracking-wide font-medium">
              {user?.qrCode || "93486BAR9VY60R"}
            </div>
            <button className="w-full p-3 bg-white border border-[#111] rounded-lg text-[15px] font-bold text-[#111] active:bg-gray-100 transition">
              Expandir QR
            </button>
          </div>

          {/* PDF & Wallet buttons (inside gray ticket bg) */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-5 flex flex-col gap-3">
            <button className="w-full py-3 bg-white border border-[#111] rounded-lg flex items-center justify-center gap-2 font-bold text-[15px]">
              <Download size={18} />
              PDF
            </button>
            <button className="w-full py-3 bg-[#2a3035] rounded-lg flex items-center justify-center gap-2 font-bold text-[15px] text-white">
              <Wallet size={18} className="text-orange-400" />
              Añadir a Wallet
            </button>
          </div>
        </div>

        {/* Operation Data Section */}
        <div className="mt-8">
          <h2 className="text-[22px] font-extrabold mb-4">Datos de la operación</h2>
          
          <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white">
            <div className="inline-block bg-[#4fa6e8] text-white font-bold text-[14px] px-3 py-1 rounded-sm mb-4">
              Expediente: JX2A7TB622JM
            </div>

            <div className="flex flex-col gap-1 mb-5 text-[15px] text-[#111]">
              <div><strong>Fecha de compra:</strong> {user?.purchaseDate || "7/10/26 - 14:32"}</div>
              <div className="flex items-start">
                <strong className="mr-1 shrink-0">Sesiones:</strong> 
                <span className="leading-tight">Los Fundamentalistas del Aire Acondicionado</span>
              </div>
              <div><strong>Método de pago:</strong> CREDIT_CARD</div>
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <button className="w-full py-3 bg-white border border-[#111] rounded-lg flex items-center justify-center gap-2 font-bold text-[15px]">
                <Download size={18} />
                Descargar todo
              </button>
              <button className="w-full py-3 bg-white border border-[#111] rounded-lg flex items-center justify-center gap-2 font-bold text-[15px]">
                <Mail size={18} />
                Reenviar entradas
              </button>
            </div>

            <div className="flex justify-between items-end border-t border-gray-200 pt-4">
              <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                <TicketIcon size={20} />
                <span className="text-[15px]">1 Entradas</span>
              </div>
              <div className="text-[22px] font-extrabold text-[#111]">
                92.000,00 ARS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
