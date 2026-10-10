import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuEntrada - Mobile",
  description: "Clon de TuEntrada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 max-w-md mx-auto min-h-screen shadow-lg">
        {children}
      </body>
    </html>
  );
}
