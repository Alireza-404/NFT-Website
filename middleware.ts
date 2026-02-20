import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  const isAuthPage = path === "/login" || path === "/register";

  if (token) {
    try {
      verifyToken(token);

      // کاربر لاگین شده → auth pages ممنوع
      if (isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch {
      // توکن خراب → حذف
      const res = NextResponse.redirect(new URL("/login", req.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}
