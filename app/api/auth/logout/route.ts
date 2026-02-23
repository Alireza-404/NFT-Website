import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "sb-access-token",
    value: "",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set({
    name: "sb-refresh-token",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return response;
}
