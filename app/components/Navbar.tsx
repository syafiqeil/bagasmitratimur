"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Jika sedang di halaman admin, sembunyikan navbar
  if (pathname === "/admin" || pathname?.startsWith("/admin/")) {
    return null;
  }

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image 
              src="/image/logoBTM.png" 
              alt="Logo PT Bagas Mitra Makmur" 
              width={200} 
              height={60} 
              className="drop-shadow-sm w-auto h-10 object-contain" 
              priority
            />
          </Link>
        </div>
        {/* Menu Navigasi */}
        <nav className="hidden md:block">
          <ul className="flex justify-end gap-8 text-sm font-semibold text-gray-800 drop-shadow-sm">
            <li>
              <Link href="/" className="group relative hover:text-[#244926] transition-colors">
                Beranda
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#244926] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/product" className="group relative hover:text-[#244926] transition-colors">
                Product
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#244926] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/simulasi" className="group relative hover:text-[#244926] transition-colors">
                Simulasi KPR
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#244926] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="group relative hover:text-[#244926] transition-colors">
                Kontak
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#244926] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
