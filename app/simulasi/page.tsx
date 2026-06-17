"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Icons ---
const CalculatorIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

// --- Dummy Data Tabel (Sesuai Gambar) ---
const tabelKPR = [
  { plafon: 185000000, thn10: 1181700, thn15: 1341600, thn20: 1050700 },
  { plafon: 180000000, thn10: 1151100, thn15: 1305800, thn20: 1022300 },
  { plafon: 175000000, thn10: 1119200, thn15: 1269600, thn20: 993900 },
  { plafon: 170000000, thn10: 1087200, thn15: 1233300, thn20: 965500 },
  { plafon: 165000000, thn10: 1055200, thn15: 1197100, thn20: 937100 },
  { plafon: 160000000, thn10: 1023300, thn15: 1160800, thn20: 908700 },
  { plafon: 155000000, thn10: 991300, thn15: 1124600, thn20: 880300 },
];

export default function SimulasiPage() {
  const [plafonStr, setPlafonStr] = useState<string>("185.000.000");
  const [tenor, setTenor] = useState<number>(10);
  const sukuBunga = 5.00;
  const [estimasi, setEstimasi] = useState<number>(1181700);

  const plafonNum = Number(plafonStr.replace(/\./g, "")) || 0;

  useEffect(() => {
    // If it matches our table exactly, use table data
    const row = tabelKPR.find(r => r.plafon === plafonNum);
    if (row) {
      if (tenor === 10) setEstimasi(row.thn10);
      else if (tenor === 15) setEstimasi(row.thn15);
      else if (tenor === 20) setEstimasi(row.thn20);
    } else {
      // Calculate using standard PMT formula for non-matching inputs
      const p = plafonNum;
      const r = sukuBunga / 100 / 12;
      const n = tenor * 12;
      
      if (p === 0) {
        setEstimasi(0);
        return;
      }
      
      const pmt = (p * r) / (1 - Math.pow(1 + r, -n));
      setEstimasi(Math.round(pmt));
    }
  }, [plafonNum, tenor]);

  const handlePlafonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setPlafonStr("");
      return;
    }
    const formatted = Number(val).toLocaleString("id-ID").replace(/,/g, ".");
    setPlafonStr(formatted);
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka).replace("Rp", "Rp ");
  };

  return (
    <div className="font-sans text-black pb-20 bg-[#FAFAFA] min-h-screen pt-32">
      {/* Container utama */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section: Header & Bank */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-3xl font-bold text-[#244926] mb-3">Simulasi KPR Subsidi 2024</h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Wujudkan rumah impian Anda dengan perhitungan cicilan yang transparan dan terencana bersama PT Bagas Mitra Makmur.
            </p>
          </div>
          
          {/* Partner Boxes */}
          <div className="bg-[#F8F9F8] border border-gray-200 rounded-xl p-5 flex items-center gap-8 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="w-16 h-10 bg-gray-800 rounded flex items-center justify-center text-white font-bold text-xs mb-2">BTN</div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Partner Bank</span>
            </div>
            <div className="w-[1px] h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-10 bg-gray-800 rounded flex items-center justify-center text-white font-bold text-[10px] mb-2 px-1 text-center leading-tight">BUMN</div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Kementerian BUMN</span>
            </div>
          </div>
        </div>

        {/* Main Section: Kalkulator & Tabel */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          
          {/* KIRI: Kalkulator KPR */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <CalculatorIcon className="w-6 h-6 text-[#244926]" />
              <h2 className="text-xl font-bold text-[#244926]">Kalkulator KPR</h2>
            </div>
            
            <div className="space-y-6">
              {/* Plafon Pinjaman */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Plafon Pinjaman</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">Rp</span>
                  <input 
                    type="text" 
                    value={plafonStr}
                    onChange={handlePlafonChange}
                    className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#244926] focus:bg-white focus:ring-0 rounded-lg py-3 pl-12 pr-4 text-gray-800 font-medium outline-none transition-all"
                  />
                </div>
              </div>

              {/* Tenor */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Jangka Waktu (Tenor)</label>
                <div className="relative">
                  <select 
                    value={tenor}
                    onChange={(e) => setTenor(Number(e.target.value))}
                    className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#244926] focus:bg-white focus:ring-0 rounded-lg py-3 pl-4 pr-10 text-gray-800 font-medium outline-none transition-all appearance-none"
                  >
                    <option value={10}>10 Tahun</option>
                    <option value={15}>15 Tahun</option>
                    <option value={20}>20 Tahun</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Suku Bunga */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Suku Bunga (Flat)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value="5.00"
                    className="w-full bg-[#EAEAEA] border border-transparent rounded-lg py-3 pl-4 pr-10 text-gray-600 font-medium outline-none cursor-not-allowed"
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between mb-8">
              <div className="text-gray-500 text-sm font-medium leading-snug">Estimasi<br/>Cicilan/Bulan</div>
              <div className="text-2xl font-bold text-[#244926]">{formatRupiah(estimasi)}</div>
            </div>

            <button className="w-full bg-[#244926] text-white py-4 rounded-lg font-semibold text-sm hover:bg-[#1d3d1f] transition-colors flex items-center justify-center gap-2 shadow-md">
              Hubungi Marketing
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* KANAN: Tabel Angsuran */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
            {/* Table Header Area */}
            <div className="bg-[#244926] p-6 md:px-8">
              <h2 className="text-lg md:text-xl font-bold text-white mb-1 uppercase tracking-wide">Tabel Angsuran KPR Subsidi Tahun 2024</h2>
              <p className="text-[#A1D6A5] text-xs font-medium">Suku Bunga Tetap 5% - Program Pemerintah</p>
            </div>
            
            {/* The Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="bg-[#EAF0E6] text-[#244926] text-xs md:text-sm">
                    <th className="py-4 px-6 md:px-8 font-bold uppercase tracking-wider">Plafon Pinjaman</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">10 Tahun</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">15 Tahun</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">20 Tahun</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-medium">
                  {tabelKPR.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 md:px-8 font-bold text-gray-800">{formatRupiah(row.plafon)}</td>
                      <td className="py-5 px-6">{formatRupiah(row.thn10)}</td>
                      <td className="py-5 px-6">{formatRupiah(row.thn15)}</td>
                      <td className={`py-5 px-6 ${index === 0 ? 'text-[#244926] font-bold bg-[#F3F7F3]' : ''}`}>{formatRupiah(row.thn20)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 px-6 md:px-8 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">
                *Nilai di atas merupakan estimasi. Suku bunga dan ketentuan dapat berubah sesuai kebijakan bank penyedia KPR.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: CTA Banner */}
        <div className="bg-[#244926] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Abstract dark green shapes (like buildings) */}
          <div className="absolute right-0 bottom-0 opacity-10 flex gap-4 pointer-events-none">
             <div className="w-16 h-32 bg-white"></div>
             <div className="w-20 h-40 bg-white"></div>
             <div className="w-16 h-24 bg-white mt-auto"></div>
             <div className="w-24 h-48 bg-white"></div>
             <div className="w-12 h-32 bg-white mt-auto"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Mulai Langkah Anda Sekarang</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Konsultasikan rencana hunian Anda dengan tim ahli kami secara gratis. Kami bantu proses administrasi hingga serah terima kunci.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <button className="bg-white text-[#244926] px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-md">
              <MessageCircleIcon className="w-5 h-5 text-[#244926]" />
              WhatsApp Kami
            </button>
            <button className="bg-transparent border border-white/40 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <DownloadIcon className="w-5 h-5" />
              Download Brosur
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}