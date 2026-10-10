import Navbar from "@/components/Navbar";

export default function MisEntradasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full h-full bg-white">
        {children}
      </main>
    </div>
  );
}
