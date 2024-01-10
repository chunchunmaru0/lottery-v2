import React from "react";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchLotteryData } from "@/app/(lottery)/layout";

interface LotteryHeroInterface {
  type: "Powerball" | "Megamillions";
}
type WinningNumberResponse = {
  latestMmWinningNumber: {
    _id: string;
    drawDate: string;
    nextDrawDate: string;
    jackpot: number;
    allNumber: number[];
    winningNumber: number[];
    megaball: number;
    megaplier: number;
    __v: number;
  };
  latestPbWinningNumber: {
    _id: string;
    drawDate: string;
    nextDrawDate: string;
    jackpot: number;
    allNumber: number[];
    winningNumber: number[];
    powerball: number;
    powerplay: number;
    __v: number;
  };
};
const LotteryHeroSection = async ({ type }: LotteryHeroInterface) => {
  const {
    latestPbWinningNumber,
    latestMmWinningNumber,
  }: WinningNumberResponse = await fetchLotteryData();
  return (
    <section className="w-full py-12  bg-secondary dark:bg-secondary/30 md:h-auto">
      <div className="container flex flex-wrap justify-between">
        <div>
          <h2
            className={cn(
              "text-4xl font-bold mb-6 bg-gradient-to-r inline-block text-transparent bg-clip-text",
              {
                "from-orange-400 to-yellow-700": type === "Megamillions",
                "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
              }
            )}
          >
            {type}
          </h2>
          <div className="flex space-x-4 mb-4">
            {type === "Megamillions"
              ? latestMmWinningNumber.winningNumber.map((num, i) => (
                  <div
                    key={`MM_${i}`}
                    className="bg-white rounded-full  flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground  sm:w-16 sm:h-16 w-10 h-10"
                  >
                    {num}
                  </div>
                ))
              : latestPbWinningNumber.winningNumber.map((num, i) => (
                  <div
                    key={`PB_${i}`}
                    className="bg-white rounded-full  flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground  sm:w-16 sm:h-16 w-10 h-10"
                  >
                    {num}
                  </div>
                ))}
            <div
              className={cn(
                " rounded-full flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground sm:w-16 sm:h-16 w-10 h-10",
                {
                  "bg-red-700": type === "Powerball",
                  "bg-yellow-500": type === "Megamillions",
                }
              )}
            >
              {type === "Megamillions"
                ? latestMmWinningNumber.megaball
                : latestPbWinningNumber.powerball}
            </div>
          </div>
          <div className="text-sm mb-2">
            {type === "Megamillions"
              ? new Date(latestMmWinningNumber.drawDate).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    weekday: "long",
                  }
                ) + ` MEGAPLIER x${latestMmWinningNumber.megaplier}`
              : new Date(latestPbWinningNumber.drawDate).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    weekday: "long",
                  }
                ) + ` POWERPLAY x${latestPbWinningNumber.powerplay}`}
          </div>
          <div className="flex flex-wrap md:space-x-4 md:py-12 py-8 gap-4">
            <Button variant="outline" asChild className="pr-12 justify-end">
              <a href="https://youtube.com" target="_blank" className="">
                Watch the Draw <ExternalLinkIcon size={18} className="" />
              </a>
            </Button>
            <Button variant="outline">Past Winning Numbers</Button>
          </div>
        </div>

        <div className="bg-muted-foreground/30 rounded-lg p-6 max-w-sm">
          <h3 className="text-3xl font-bold mb-4">Next Estimated Jackpot</h3>
          <p
            className={cn(
              "text-6xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-700 inline-block text-transparent bg-clip-text ",
              {
                "from-orange-500 to-yellow-400": type === "Megamillions",
                "from-red-500  to-rose-900": type === "Powerball",
              }
            )}
          >
            {/* <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-yellow-500 inline-block text-transparent bg-clip-text"> */}
            {/* $165 Million */}
            {/* {type === "Megamillions"
              ? latestMmWinningNumber.jackpot.valueOf()
              : latestPbWinningNumber.powerball}
             */}
            {Intl.NumberFormat("en", {
              style: "currency",
              currency: "USD",
              compactDisplay: "short",
              notation: "compact",
            }).format(
              type === "Megamillions"
                ? latestMmWinningNumber.jackpot
                : latestPbWinningNumber.jackpot
            )}

            {/* </span> */}
          </p>
          {/* <p className="text-sm mb-4">CASH OPTION: $79.9 MILLION</p> */}
          <p className="text-lg mb-4 py-4">
            Next Drawing:
            <br />
            <span
              className={cn(
                "bg-gradient-to-r inline-block text-transparent bg-clip-text",
                {
                  "from-orange-500 to-yellow-400": type === "Megamillions",
                  "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
                }
              )}
            >
              {new Date(
                type === "Megamillions"
                  ? latestMmWinningNumber.nextDrawDate
                  : latestPbWinningNumber.nextDrawDate
              ).toLocaleString("en-US", {
                timeZoneName: "short",
                day: "numeric",
                month: "short",
                weekday: "long",
                hour: "2-digit",
              })}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LotteryHeroSection;
