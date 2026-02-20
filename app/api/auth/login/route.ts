import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { comparePassword } from "@/lib/hash";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json(
      { message: "Email and password required" },
      { status: 400 },
    );

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user)
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );

  const isValid = await comparePassword(password, user.password);
  if (!isValid)
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );

  const token = signToken({ userId: user.id });

  const response = NextResponse.json({
    message: "Login successful",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
