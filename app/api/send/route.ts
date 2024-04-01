import LotteryEmail from "@/components/Email/LotteryEmail";
import { LotteryType } from "@/components/Lottery/types";
import { prismaDBClient as prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const EMAIL_FROM = process.env.RESEND_EMAIL_FROM;

  const searchParams = req.nextUrl.searchParams;
  const lotteryType = searchParams.get("lotteryType");

  if (!lotteryType) return Response.json(null, { status: 401 });

  const lotteryParticipants = await prisma.user.findMany({
    where: {
      UserLottery: {
        some: {
          AND: [
            { lotteryType: { equals: lotteryType } },
            { notified: { not: true } }, // Filter out notified lotteries
          ],
        },
      },
    },
    include: {
      UserLottery: true,
    },
  });

  const emails = [];
  console.log(
    "lotteryType:",
    lotteryType,
    "lotteryParticipants",
    lotteryParticipants,
  );
  for (const user of lotteryParticipants) {
    if (!user.email) {
      console.log("No User EMAIL");
      continue;
    }
    const notSentLotteries = user.UserLottery.filter((u) => !u.notified);
    if (notSentLotteries.length === 0) continue;
    emails.push({
      from: EMAIL_FROM!,
      to: [user.email!],
      subject: "Lottery Winnings!",
      html: "",
      react: LotteryEmail({
        lottery: notSentLotteries,
        type: lotteryType as LotteryType,
      }),
    });
    const lotteryIdsToUpdate = notSentLotteries.map((lottery) => lottery.id);
    await prisma.userLottery.updateMany({
      where: {
        id: {
          in: lotteryIdsToUpdate,
        },
      },
      data: {
        notified: true,
      },
    });
    console.log(`Email is being sent to USER:`, user.email);
  }

  try {
    const data = await resend.batch.send(emails);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
