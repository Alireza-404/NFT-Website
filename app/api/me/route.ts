import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("sb-access-token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const { data, error } = await getSupabaseServerClient().auth.getUser(token);

  if (error) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: data.user });
}
