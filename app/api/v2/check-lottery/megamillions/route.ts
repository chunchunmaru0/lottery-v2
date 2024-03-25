import { prismaDBClient as prisma } from "@/lib/db";
import {
  calculateMegaMillion,
  compareMegaMilNumbers,
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

  const winningMegaMillions = await prisma.megamillionResult.findFirst({});

  if (!winningMegaMillions)
    return NextResponse.json(
      {
        error: "IDK bro",
      },
      {
        status: 418,
        statusText: "Invalid Input",
      },
    );

  const { matchedNumbers, hasMegaBall } = compareMegaMilNumbers(
    userNumbers.slice(0, 5),
    userNumbers[5],
    winningMegaMillions,
  );

  const prize = calculateMegaMillion(
    matchedNumbers,
    hasMegaBall,
    winningMegaMillions.megaplier,
    winningMegaMillions.jackpot,
  );

  return Response.json({
    winningNumbers: winningMegaMillions.winningNumber,
    powerball: winningMegaMillions.megaball,
    userNumbers: userNumbers.slice(0, 5),
    userPowerball: userNumbers[5],
    prize,
  });
}

// if (request.user) {
//   // If the user is logged in, update the user's lottery history
//   try {
//     // console.log(request.user, "megaMillion");
//     const userId = request.user.token;
//     // console.log(userId);
//     await User.findByIdAndUpdate(userId, {
//       $push: {
//         lotteryHistory: {
//           numbers: userNumbers.slice(0, 5),
//           megaball: userNumbers[5],
//           category: "megamillion",
//           drawdate: winningMegaMillions.drawDate,
//           timestamp: new Date(),
//         },
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "An error occurred while updating lottery history.",
//     });
//     return;
//   }
// }
