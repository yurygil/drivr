import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, walletAddress, role } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e email são obrigatórios." },
        { status: 400 }
      );
    }

    const waitlist = await prisma.waitlist.create({
      data: {
        name,
        email,
        walletAddress: walletAddress || null,
        role: role || null,
      },
    });

    return NextResponse.json({ success: true, waitlist }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao cadastrar na waitlist." },
      { status: 500 }
    );
  }
}