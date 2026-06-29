"use client";

import { useTransition, useState } from "react";
import { loginAdmin } from "@/app/actions/auth";
import Link from "next/link";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await loginAdmin(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F7F3] p-4 text-black">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#EAF0E6]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#244926] mb-2">Login Admin</h1>
          <p className="text-gray-500 text-sm">Masuk untuk mengelola konten website</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
            <input 
              type="text" 
              name="username" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#244926] focus:ring-2 focus:ring-[#244926]/20 transition-all outline-none"
              placeholder="Masukkan username"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#244926] focus:ring-2 focus:ring-[#244926]/20 transition-all outline-none"
              placeholder="Masukkan password"
            />
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-[#244926] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1d3d1f] transition-colors disabled:opacity-70"
          >
            {isPending ? "Memproses..." : "Masuk"}
          </button>
        </form>

      </div>
    </div>
  );
}
