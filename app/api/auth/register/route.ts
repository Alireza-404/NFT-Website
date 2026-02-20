import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/hash";
import { validateRegister } from "@/lib/validators";

export async function POST(req: Request) {
  const body = await req.json();

  const error = validateRegister(body);
  if (error) return NextResponse.json({ message: error }, { status: 400 });

  const exists = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (exists)
    return NextResponse.json(
      { message: "Email already registered" },
      { status: 409 },
    );

  const hashedPassword = await hashPassword(body.password);

  await prisma.user.create({
    data: {
      fullName: body.fullName,
      email: body.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "Registration successful" },
    { status: 201 },
  );
}
