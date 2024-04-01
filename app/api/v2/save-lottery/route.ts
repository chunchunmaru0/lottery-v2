import { prismaDBClient as prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, numbers: userNumbers } = body;
    if (!userId) {
      return new Response(null, { status: 400 });
    }
    if (!userNumbers)
      return NextResponse.json(
        { error: "Invalid Input" },
        {
          status: 400,
          statusText: "Invalid Input",
        },
      );

    if (userNumbers.length !== 6 || userNumbers.some(isNaN)) {
      return NextResponse.json(
        {
          error: "Invalid input. Please provide 6 numbers separated by commas.",
        },
        {
          status: 400,
          statusText: "Invalid Input",
        },
      );
    }

    const userLotteryExists = await prisma.userLottery.findFirst({
      where: {
        userId: body?.userId,
        AND: { numbers: { equals: body?.numbers } },
      },
    });
    if (userLotteryExists) {
      return NextResponse.json(
        { error: "Number Already Exist" },
        {
          status: 409,
        },
      );
    }

    await prisma.userLottery.create({ data: body });
    return new Response(null, { status: 201 });
  } catch (error) {
    console.error("Error getting and storing lottery data:", error);
    return new Response(null, { status: 400 });
  }
}
