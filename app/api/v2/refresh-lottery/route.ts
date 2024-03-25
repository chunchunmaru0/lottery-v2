import { prismaDBClient as prisma } from "@/lib/db";
import { getLottery } from "@/lib/server/getLottery";

// export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  try {
    const { MMpayload, PBpayload } = await getLottery();

    const existingMegamillionResult = await prisma.megamillionResult.findUnique(
      {
        where: { drawDate: MMpayload.drawDate },
      },
    );

    if (!existingMegamillionResult) {
      // Save MegamillionResult
      await prisma.megamillionResult.create({
        data: MMpayload,
      });
      console.log(`MegamillionResult stored successfully. ${new Date()}`);
    }
    const existingPowerballResult = await prisma.powerballResult.findUnique({
      where: { drawDate: PBpayload.drawDate },
    });

    if (!existingPowerballResult) {
      // Save PowerballResult
      await prisma.powerballResult.create({
        data: PBpayload,
      });
      console.log(`PowerballResult stored successfully. ${new Date()}`);
    }
    return Response.json({ MMpayload, PBpayload });
  } catch (error) {
    console.error("Error getting and storing lottery data:", error);
    return new Response(null, { status: 400 });
  }
}
