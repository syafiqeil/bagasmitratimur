"use client";

import { useState, useTransition } from "react";
import { updateSiteContent } from "@/app/actions/content";
import { logoutAdmin } from "@/app/actions/auth";
import Image from "next/image";

export default function AdminForm({ initialData }: { initialData: any }) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Menyimpan...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Check and upload files first
    const fileInputs = form.querySelectorAll('input[type="file"]');
    for (const input of Array.from(fileInputs)) {
      const fileInput = input as HTMLInputElement;
      const file = fileInput.files?.[0];
      const fieldName = fileInput.name.replace("_file", ""); // e.g. idealImage_file -> idealImage

      if (file) {
        const uploadData = new FormData();
        uploadData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (res.ok) {
          const { url } = await res.json();
          formData.set(fieldName, url); // update the hidden text field with the new URL
        }
      }
      formData.delete(fileInput.name); // we don't send the raw file to the database
    }

    startTransition(async () => {
      const result = await updateSiteContent(formData);
      if (result?.success) {
        setMessage("Berhasil disimpan!");
      } else {
        setMessage("Gagal menyimpan data.");
      }
    });
  }

  // Helper to render text inputs
  const renderInput = (label: string, name: string, isTextArea = false) => (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
      {isTextArea ? (
        <textarea
          name={name}
          defaultValue={initialData?.[name] || ""}
          className="w-full p-2 border rounded"
          rows={4}
        />
      ) : (
        <input
          type="text"
          name={name}
          defaultValue={initialData?.[name] || ""}
          className="w-full p-2 border rounded"
        />
      )}
    </div>
  );

  // Helper to render image inputs
  const renderImageInput = (label: string, name: string) => (
    <div className="mb-4 p-4 border rounded bg-gray-50">
      <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
      {initialData?.[name] && (
        <div className="mb-2">
          <Image src={initialData[name]} alt={label} width={200} height={150} className="object-cover rounded" />
        </div>
      )}
      {/* Hidden input to store current URL, updated if new file is uploaded */}
      <input type="hidden" name={name} defaultValue={initialData?.[name] || ""} />
      <input type="file" name={`${name}_file`} accept="image/*" className="w-full" />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md mt-10 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button 
          type="button" 
          onClick={() => logoutAdmin()} 
          className="bg-red-50 text-red-600 px-4 py-2 rounded font-bold hover:bg-red-100 transition-colors text-sm"
        >
          Logout
        </button>
      </div>
      
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Homepage: Hero Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Homepage: Hero (Atas)</h2>
          {renderInput("Hero Judul", "homeHeroTitle")}
          {renderInput("Hero Deskripsi", "homeHeroDesc", true)}
          {renderImageInput("Foto Latar Belakang (Hero)", "homeHeroImg")}
        </div>

        {/* Homepage: Keunggulan */}
        <div>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Homepage: Keunggulan (Tentang Perusahaan)</h2>
          {renderInput("Judul Bagian", "homeAboutTitle")}
          {renderInput("Subjudul", "homeAboutSub", true)}
          
          <h3 className="font-bold mt-4 mb-2">Card 1</h3>
          {renderInput("Judul Card 1", "aboutCard1Title")}
          {renderInput("Deskripsi Card 1", "aboutCard1Desc", true)}
          
          <h3 className="font-bold mt-4 mb-2">Card 2</h3>
          {renderInput("Judul Card 2", "aboutCard2Title")}
          {renderInput("Deskripsi Card 2", "aboutCard2Desc", true)}
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Card 3</h3>
          {renderInput("Judul Card 3", "aboutCard3Title")}
          {renderInput("Deskripsi Card 3", "aboutCard3Desc", true)}
          
          <h3 className="font-bold mt-4 mb-2">Card 4</h3>
          {renderInput("Judul Card 4", "aboutCard4Title")}
          {renderInput("Deskripsi Card 4", "aboutCard4Desc", true)}
        </div>

        {/* Homepage Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Homepage: Hunian Ideal (Type 36)</h2>
          {renderInput("Label Tipe", "idealTypeLabel")}
          {renderInput("Judul", "idealTitle")}
          {renderInput("Deskripsi", "idealDesc", true)}
          {renderInput("Kamar Tidur", "idealBed")}
          {renderInput("Ruang Tamu", "idealLiving")}
          {renderInput("Carport", "idealCarport")}
          {renderInput("Luas Tanah", "idealArea")}
          {renderInput("Info Tambahan", "idealInfo", true)}
          {renderImageInput("Foto Rumah (Homepage)", "idealImage")}
        </div>

        {/* Product Page Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Product Page: Header & Specs</h2>
          {renderInput("Hero Judul", "prodHeroTitle")}
          {renderInput("Hero Subjudul", "prodHeroSub")}
          {renderInput("Hero Deskripsi", "prodHeroDesc", true)}
          {renderImageInput("Foto Hero", "prodHeroImg")}
          {renderImageInput("Foto Samping (Side Image)", "prodSideImg")}
          {renderImageInput("Foto Site Plan", "prodSitePlanImg")}
          
          <h3 className="font-bold mt-4 mb-2">Spesifikasi Lokasi</h3>
          {renderInput("Spesifikasi Luas", "prodSpecArea")}
          {renderInput("Lokasi (Desa/Kota)", "prodSpecLoc")}
          {renderInput("Jalan", "prodSpecSt")}
        </div>
        
        {/* Product Page Vis */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Product Page: Visualisasi Lingkungan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              {renderImageInput("Visualisasi 1 (Foto)", "prodVis1Img")}
              {renderInput("Vis 1 Judul", "prodVis1Title")}
              {renderInput("Vis 1 Deskripsi", "prodVis1Desc", true)}
            </div>
            <div>
              {renderImageInput("Visualisasi 2 (Foto)", "prodVis2Img")}
              {renderInput("Vis 2 Judul", "prodVis2Title")}
              {renderInput("Vis 2 Deskripsi", "prodVis2Desc", true)}
            </div>
            <div>
              {renderImageInput("Visualisasi 3 (Foto)", "prodVis3Img")}
              {renderInput("Vis 3 Judul", "prodVis3Title")}
              {renderInput("Vis 3 Deskripsi", "prodVis3Desc", true)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t">
        <button
          type="submit"
          disabled={isPending}
          className="bg-[#244926] text-white px-6 py-2 rounded font-bold hover:bg-[#1d3d1f] disabled:opacity-50"
        >
          {isPending ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}
