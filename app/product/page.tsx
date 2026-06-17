import Image from "next/image";
import { getSiteContent } from "@/app/actions/content";

// --- Icons ---
const MaximizeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
);
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-3 6-3s4 2 6 3a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);
const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

export default async function ProductPage() {
  const content = await getSiteContent();
  return (
    <div className="font-sans text-black pb-20 bg-[#FAFAFA] min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-24">
          
          {/* LEFT COLUMN: Hero & Specs */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* Hero Image Unit */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image 
                src={content?.prodHeroImg || "/image/product_hero.png"} 
                alt="Rumah Type 36" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">{content?.prodHeroTitle}</h1>
                <p className="text-gray-300 font-medium">{content?.prodHeroSub}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed md:text-lg">
              {content?.prodHeroDesc}
            </p>

            {/* Specs Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F3F7F3] rounded-xl p-6 border border-[#EAF0E6]">
                <div className="flex items-center gap-2 text-[#244926] font-bold text-xs uppercase tracking-wider mb-4">
                  <MaximizeIcon className="w-4 h-4" />
                  Spesifikasi Luas
                </div>
                <div className="text-3xl font-extrabold text-gray-800 mb-1">{content?.prodSpecArea}</div>
                <div className="text-sm text-gray-500 font-medium">Luas Tanah Keseluruhan</div>
              </div>

              <div className="bg-[#F3F7F3] rounded-xl p-6 border border-[#EAF0E6]">
                <div className="flex items-center gap-2 text-[#244926] font-bold text-xs uppercase tracking-wider mb-4">
                  <MapPinIcon className="w-4 h-4" />
                  Lokasi Strategis
                </div>
                <div className="text-xl font-bold text-gray-800 mb-1">{content?.prodSpecLoc}</div>
                <div className="text-sm text-gray-500 font-medium">{content?.prodSpecSt}</div>
              </div>
            </div>

            {/* Verifikasi Section */}
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-[#244926]" />
                <h2 className="text-2xl font-bold text-[#244926]">Proses Verifikasi</h2>
              </div>
              <div className="bg-[#F3F7F3] rounded-r-xl border-l-4 border-[#244926] p-6 shadow-sm">
                <h3 className="font-bold text-[#244926] mb-3">Administrasi Terjamin</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kami mengutamakan keamanan investasi Anda melalui proses verifikasi administrasi yang ketat dan transparan. Setiap tahap kepemilikan dipantau untuk memastikan legalitas dokumen dan kenyamanan Anda dalam proses serah terima bangunan.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Gallery & CTA */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-32">
            {/* Side Image */}
            <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src={content?.prodSideImg || "/image/product_side.png"} 
                alt="Sudut Lain Rumah Type 36" 
                fill
                className="object-cover"
              />
            </div>

            {/* Site Plan Box */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 shadow-sm">
              <h3 className="font-bold text-[#244926]">Site Plan</h3>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner cursor-pointer group">
                <Image 
                  src={content?.prodSitePlanImg || "/image/product_siteplan.png"} 
                  alt="Site Plan Perumahan" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-center text-gray-500 font-medium">Klik untuk memperbesar denah</p>
            </div>

            {/* CTA Box */}
            <div className="bg-[#244926] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Tertarik?</h3>
              <p className="text-sm text-white/80 mb-8 leading-relaxed relative z-10">
                Dapatkan penawaran eksklusif dan jadwalkan kunjungan lokasi hari ini.
              </p>
              
              <div className="flex flex-col gap-3 relative z-10">
                <button className="bg-white text-[#244926] w-full py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <MessageCircleIcon className="w-4 h-4" />
                  WhatsApp Sekarang
                </button>
                <button className="bg-transparent border border-white/40 text-white w-full py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <DownloadIcon className="w-4 h-4" />
                  Unduh Brosur PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Visualisasi Lingkungan */}
        <div className="pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visualisasi Lingkungan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vis 1 */}
            <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={content?.prodVis1Img || "/image/product_vis_1.png"} 
                  alt="Kualitas Bangunan" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#244926] mb-2 text-lg">{content?.prodVis1Title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {content?.prodVis1Desc}
                </p>
              </div>
            </div>

            {/* Vis 2 */}
            <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={content?.prodVis2Img || "/image/product_vis_2.png"} 
                  alt="Lingkungan Asri" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#244926] mb-2 text-lg">{content?.prodVis2Title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {content?.prodVis2Desc}
                </p>
              </div>
            </div>

            {/* Vis 3 */}
            <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={content?.prodVis3Img || "/image/product_vis_3.png"} 
                  alt="Tata Kelola Lahan" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#244926] mb-2 text-lg">{content?.prodVis3Title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {content?.prodVis3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
