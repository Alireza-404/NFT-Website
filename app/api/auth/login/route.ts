import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const { data, error } =
    await getSupabaseServerClient().auth.signInWithPassword({
      email,
      password,
    });

  if (error || !data.session) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "sb-access-token",
    value: data.session.access_token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
