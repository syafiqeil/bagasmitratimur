import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" });
    }

    const apiKey = process.env.API_URL;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: "API_URL (ImgBB API Key) is not configured" });
    }

    // Menyiapkan data untuk dikirim ke ImgBB
    const imgbbFormData = new FormData();
    imgbbFormData.append("image", file);

    // Mengirim request ke ImgBB
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: imgbbFormData,
    });

    const result = await response.json();

    if (result.success) {
      // Berhasil diunggah ke ImgBB, kembalikan URL gambar
      return NextResponse.json({ success: true, url: result.data.url });
    } else {
      console.error("ImgBB upload error:", result);
      return NextResponse.json({ success: false, error: result.error?.message || "Gagal mengunggah ke ImgBB" });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: "Upload failed" });
  }
}
