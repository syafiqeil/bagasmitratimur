"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Jika sedang di halaman admin, sembunyikan footer
  if (pathname === "/admin" || pathname?.startsWith("/admin/")) {
    return null;
  }

  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-[#244926] text-lg mb-2">PT Bagas Mitra Makmur</h3>
          <p className="text-gray-500 text-sm font-medium">
            © 2024 PT Bagas Mitra Makmur. Perumahan Nyarong Mandiri.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-[#244926] transition-colors">WhatsApp: 0853 3238 0415</a>
          <a href="#" className="hover:text-[#244926] transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-[#244926] transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
