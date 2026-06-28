import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "BagasMitraTimurSecretKey123");

export async function proxy(request: NextRequest) {
  // Hanya lindungi route yang dimulai dengan /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin_session")?.value;

    if (!token) {
      // Jika tidak ada token, arahkan ke halaman login
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Verifikasi token
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Jika token tidak valid atau kadaluarsa, hapus cookie dan arahkan ke login
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
