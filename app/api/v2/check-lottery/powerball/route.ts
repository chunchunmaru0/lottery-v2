import { prismaDBClient as prisma } from "@/lib/db";
import {
  calculatePowerball,
  comparePowerballNumbers,
} from "@/lib/server/helper";

import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("userNumber");

  const userNumbers = query?.trim().split(",").map(Number);

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

  const winningPowerballNumbers = await prisma.powerballResult.findFirst({});

  if (!winningPowerballNumbers)
    return NextResponse.json(
      {
        error: "IDK bro",
      },
      {
        status: 418,
        statusText: "Invalid Input",
      },
    );

  const { matchedNumbers, hasPowerball } = comparePowerballNumbers(
    userNumbers.slice(0, 5),
    userNumbers[5],
    winningPowerballNumbers,
  );

  const prize = calculatePowerball(
    matchedNumbers,
    hasPowerball,
    winningPowerballNumbers.powerball,
    winningPowerballNumbers.jackpot,
  );

  return Response.json({
    winningNumbers: winningPowerballNumbers.winningNumber,
    powerball: winningPowerballNumbers.powerball,
    userNumbers: userNumbers.slice(0, 5),
    userPowerball: userNumbers[5],
    prize,
  });
}
