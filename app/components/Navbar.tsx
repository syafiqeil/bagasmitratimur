"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Jika sedang di halaman admin, login, atau register, sembunyikan navbar
  if (
    pathname === "/admin" || 
    pathname?.startsWith("/admin/") ||
    pathname === "/login" ||
    pathname === "/register"
  ) {
    return null;
  }

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

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

        {/* Hamburger Button (Mobile) */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none z-50 relative" 
          onClick={toggleMenu}
          aria-label="Open Mobile Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Menu Navigasi (Desktop) */}
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

      {/* Menu Navigasi (Mobile) */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
        style={{ zIndex: 60 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-end border-b border-gray-100/30">
          {/* Close Button (X) */}
          <button 
            className="text-gray-800 focus:outline-none" 
            onClick={closeMenu}
            aria-label="Close Mobile Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 pb-6 space-y-2 text-base font-semibold text-[#244926]">
          <Link href="/" onClick={closeMenu} className="block w-full px-4 py-3 rounded-lg hover:bg-[#EAF0E6] hover:text-green-800 transition-all">
            Beranda
          </Link>
          <Link href="/product" onClick={closeMenu} className="block w-full px-4 py-3 rounded-lg hover:bg-[#EAF0E6] hover:text-green-800 transition-all">
            Product
          </Link>
          <Link href="/simulasi" onClick={closeMenu} className="block w-full px-4 py-3 rounded-lg hover:bg-[#EAF0E6] hover:text-green-800 transition-all">
            Simulasi KPR
          </Link>
          <Link href="/kontak" onClick={closeMenu} className="block w-full px-4 py-3 rounded-lg hover:bg-[#EAF0E6] hover:text-green-800 transition-all">
            Kontak
          </Link>
        </div>
      </div>
    </header>
  );
}
