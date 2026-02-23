import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  const { fullName, email, password } = await req.json();

  const { error: createError } = await supabaseServer.auth.admin.createUser({
    email,
    password,
    user_metadata: { fullName },
    email_confirm: true,
  });

  if (createError) {
    return NextResponse.json({ error: createError.message }, { status: 400 });
  }

  const { data, error: loginError } =
    await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });

  if (loginError || !data.session) {
    return NextResponse.json({ error: "Login failed" }, { status: 400 });
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
