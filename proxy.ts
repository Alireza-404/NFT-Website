import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("sb-access-token")?.value;

  const authPages = ["/login", "/register"];

  const isAuthPage = authPages.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  let userExists = false;

  if (token) {
    try {
      const { data, error } =
        await getSupabaseServerClient().auth.getUser(token);
      if (!error && data.user) userExists = true;
    } catch {
      userExists = false;
    }
  }

  if (isAuthPage && userExists) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
