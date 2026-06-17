import Image from "next/image";

// --- Icons ---
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const SendIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default function KontakPage() {
  return (
    <div className="font-sans text-black pb-20 bg-[#FAFAFA] min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#EAF0E6] text-[#244926] font-semibold text-xs px-4 py-2 rounded-md mb-6 uppercase tracking-wider">
            Hubungi Kami
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#244926] leading-tight mb-6">
            Mari Wujudkan Rumah Impian Anda Bersama Kami
          </h1>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            Tim kami siap membantu Anda dengan informasi detail mengenai perumahan Nyarong Mandiri. Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
            <div className="bg-[#F3F7F3] w-16 h-16 rounded-full flex items-center justify-center text-[#244926] mb-6 group-hover:scale-110 transition-transform">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Telepon / WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-4">Senin - Minggu (08:00 - 17:00 WIB)</p>
            <a href="tel:+6285332380415" className="text-[#244926] font-semibold text-lg hover:underline">
              0853 3238 0415
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#244926] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center text-white relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform relative z-10">
              <MailIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">Email</h3>
            <p className="text-white/80 text-sm mb-4 relative z-10">Kirimkan pertanyaan detail Anda kepada kami</p>
            <a href="mailto:info@bagasmitramakmur.com" className="text-white font-semibold text-lg hover:underline relative z-10">
              info@bagasmitramakmur.com
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
            <div className="bg-[#F3F7F3] w-16 h-16 rounded-full flex items-center justify-center text-[#244926] mb-6 group-hover:scale-110 transition-transform">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Kantor Pemasaran</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-[200px]">
              Desa Kuala Dua, Jln. Sumber Maju, Kalimantan Barat
            </p>
            <span className="text-[#244926] font-semibold text-sm flex items-center gap-1 cursor-pointer hover:underline">
              Lihat di Peta <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#244926] mb-2">Kirim Pesan</h2>
            <p className="text-gray-500 text-sm mb-8">
              Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda kembali.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-[#F9FBF9] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#244926]/30 focus:border-[#244926] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Nomor Telepon / WA</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="Contoh: 08123456789"
                    className="w-full bg-[#F9FBF9] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#244926]/30 focus:border-[#244926] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Alamat Email (Opsional)</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Masukkan email Anda"
                  className="w-full bg-[#F9FBF9] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#244926]/30 focus:border-[#244926] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Pesan Anda</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  className="w-full bg-[#F9FBF9] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#244926]/30 focus:border-[#244926] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-[#244926] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1d3d1f] transition-all transform flex items-center justify-center gap-2 shadow-lg shadow-[#244926]/20"
              >
                Kirim Pesan Sekarang <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right: Map / Info Area */}
          <div className="w-full lg:w-1/2 bg-[#F3F7F3] relative min-h-[400px] flex items-center justify-center">
             {/* Decorative Background for visual interest without an actual map */}
            <div className="absolute inset-0 bg-[#244926]/5 z-0"></div>
            <div className="absolute inset-0 bg-[url('/image/lokasiTanah.png')] bg-cover bg-center opacity-30 mix-blend-multiply grayscale z-0"></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-sm w-[90%] border border-white">
              <h3 className="font-bold text-[#244926] text-xl mb-4">Jam Operasional</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#EAF0E6] p-2 rounded-lg text-[#244926]">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Senin - Jumat</h4>
                    <p className="text-gray-500 text-sm">08:00 - 17:00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#EAF0E6] p-2 rounded-lg text-[#244926]">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Sabtu - Minggu</h4>
                    <p className="text-gray-500 text-sm">09:00 - 15:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed font-medium text-center">
                  Kami siap menyambut kunjungan Anda di kantor pemasaran kami.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
