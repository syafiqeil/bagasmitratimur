import Image from "next/image";
import { getSiteContent } from "@/app/actions/content";

// --- Icons ---
const TreeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M12 22v-8"/></svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-3 6-3s4 2 6 3a1 1 0 0 1 1 1z"/></svg>
);
const DocumentIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3-6.5 6.5"/><path d="M3 21l6-6"/><path d="M3 21l-1-1"/></svg> 
);
const BedIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
);
const SofaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/></svg>
);
const CarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
);
const MaximizeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
);
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.42 10.922a2 2 0 0 1-.01 3.208l-7.11 5.11a2 2 0 0 1-2.36 0L4.83 14.13a2 2 0 0 1-.01-3.208L11.5 6.1a2 2 0 0 1 2.36 0l7.56 4.82Z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
);
const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

export default async function Home() {
  const content = await getSiteContent();
  return (
    <div className="font-sans text-black pb-10 bg-[#FAFAFA]">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[700px] md:h-[1000px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={content?.homeHeroImg || "../image/fotoRumahHero.jpeg"} 
            alt="Perumahan Nyarong Mandiri" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="inline-block bg-[#EAF0E6] text-[#244926] font-semibold text-xs px-4 py-2 rounded-md mb-6 w-max">
            Perumahan Nyarong Mandiri
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#244926] leading-[1.1] mb-6 whitespace-pre-line">
            {content?.homeHeroTitle}
          </h1>
          <p className="text-gray-700 md:text-lg mb-8 max-w-lg leading-relaxed">
            {content?.homeHeroDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#244926] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1d3d1f] transition-colors shadow-md">
              Pesan Sekarang
            </button>
            <button className="bg-white/50 backdrop-blur-sm text-[#244926] border-2 border-[#244926] px-8 py-3 rounded-md font-medium hover:bg-white transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* 2. Keunggulan Kami Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#244926] mb-4">{content?.homeAboutTitle}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {content?.homeAboutSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Konsep Ramah Lingkungan (Wider) */}
          <div className="md:col-span-2 bg-[#F3F7F3] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="z-10 relative">
              <div className="bg-[#EAF0E6] w-12 h-12 rounded-xl flex items-center justify-center text-[#244926] mb-6 shadow-sm border border-white">
                <TreeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#244926] mb-3 whitespace-pre-line">{content?.aboutCard1Title}</h3>
              <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                {content?.aboutCard1Desc}
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#EAF0E6]/50 rounded-tl-full opacity-50 transform translate-x-10 translate-y-10 transition-transform duration-500 group-hover:scale-110"></div>
          </div>

          {/* Card 2: Keamanan Terjamin */}
          <div className="bg-[#E8E8E8] rounded-2xl p-8 flex flex-col">
            <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-[#244926] mb-6 shadow-sm">
              <ShieldIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 whitespace-pre-line">{content?.aboutCard2Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {content?.aboutCard2Desc}
            </p>
          </div>

          {/* Card 3: Legalitas Lengkap / Harga Terjangkau */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <div className="bg-[#F5F5F5] w-12 h-12 rounded-xl flex items-center justify-center text-[#244926] mb-6">
              <DocumentIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 whitespace-pre-line">{content?.aboutCard3Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {content?.aboutCard3Desc}
            </p>
          </div>

          {/* Card 4: Kemitraan Bank Luas (Wider, Dark) */}
          <div className="md:col-span-2 bg-[#244926] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden text-white group">
            <div className="z-10 relative">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/20">
                <HandshakeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 whitespace-pre-line">{content?.aboutCard4Title}</h3>
              <p className="text-white/80 text-sm max-w-sm leading-relaxed">
                {content?.aboutCard4Desc}
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12H5V22H19V12H22L12 2ZM12 5.8L17 10.8V20H7V10.8L12 5.8Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hunian Ideal: Type 36 Section */}
      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-gray-200">
                <img 
                  src={content?.idealImage || "../image/fotoRumahNyaong.jpeg"} 
                  alt="Rumah Type 36" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-gray-100">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">Tipe Rumah</span>
                <span className="text-xl font-bold text-[#244926]">{content?.idealTypeLabel}</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#244926] mb-6">{content?.idealTitle}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {content?.idealDesc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-[#244926] bg-[#F3F7F3] p-2 rounded-md"><BedIcon className="w-5 h-5"/></div>
                  <span className="text-sm font-semibold text-gray-800">{content?.idealBed}</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-[#244926] bg-[#F3F7F3] p-2 rounded-md"><SofaIcon className="w-5 h-5"/></div>
                  <span className="text-sm font-semibold text-gray-800">{content?.idealLiving}</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-[#244926] bg-[#F3F7F3] p-2 rounded-md"><CarIcon className="w-5 h-5"/></div>
                  <span className="text-sm font-semibold text-gray-800">{content?.idealCarport}</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-[#244926] bg-[#F3F7F3] p-2 rounded-md"><MaximizeIcon className="w-5 h-5"/></div>
                  <span className="text-sm font-semibold text-gray-800">{content?.idealArea}</span>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-[#F3F7F3] rounded-xl p-5 mb-8 border border-[#EAF0E6] flex gap-4 items-start">
                <div className="text-[#244926] mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <p className="text-sm text-[#244926] font-medium leading-relaxed">
                  {content?.idealInfo}
                </p>
              </div>

              <button className="bg-[#244926] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1d3d1f] transition-colors flex items-center gap-2 shadow-md">
                <DocumentIcon className="w-4 h-4" />
                Lihat Detail Unit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Lokasi Strategis Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-block text-xs font-bold tracking-widest text-[#A1D6A5] mb-3 uppercase">
              Area Premium
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Lokasi Strategis di<br/>Desa Kuala Dua</h2>
            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Memiliki aksesibilitas yang sangat baik karena berdekatan dengan pusat transportasi, fasilitas pendidikan, dan mobilitas masyarakat nyata.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#A1D6A5]/10 p-2.5 rounded-lg text-[#A1D6A5] border border-[#A1D6A5]/20">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">15 Menit ke Bandara</h4>
                  <p className="text-gray-400 text-sm">Akses cepat dan bebas macet menuju ke Bandara.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#A1D6A5]/10 p-2.5 rounded-lg text-[#A1D6A5] border border-[#A1D6A5]/20">
                  <GraduationCapIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Dekat Pusat Pendidikan</h4>
                  <p className="text-gray-400 text-sm">Lokasi berdekatan dengan pusat pendidikan dan perbelanjaan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Graphic Image */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
            {/* Filter overlay to make image dark and fit the theme */}
            <div className="absolute inset-0 bg-[#1A1A1A]/80 mix-blend-color z-10"></div>
            <div className="absolute inset-0 bg-[#244926]/30 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent z-20"></div>
            
            <img 
              src="../image/lokasiTanah.png" 
              alt="Peta Lokasi" 
              className="w-full h-full object-center opacity-60 mix-blend-screen grayscale"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#EAF0E6] to-[#D5E2D0] rounded-3xl p-12 text-center shadow-lg border border-white relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-white/60 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#244926] mb-4">
              Siap Menemukan Rumah Impian Anda?
            </h2>
            <p className="text-[#244926]/70 mb-8 max-w-xl mx-auto font-medium">
              Konsultasikan sekarang dan dapatkan unit terbaik Anda. Tim kami selalu sedia untuk menjawab setiap pertanyaan Anda.
            </p>
            <button className="bg-[#244926] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d3d1f] transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-xl shadow-[#244926]/30">
              <MessageCircleIcon className="w-5 h-5" />
              Hubungi via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}