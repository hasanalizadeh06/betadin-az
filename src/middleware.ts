import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";  // ✅ Bu düzdür
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/az';
    return NextResponse.redirect(url);
  }

  return nextIntlMiddleware(req);  
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/"], 
};