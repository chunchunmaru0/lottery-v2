import React from "react";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchLotteryDataFromDB } from "@/services/fetchLotteryData";
import { LotteryType } from "./types";
import LotteryBalls from "./LotteryBalls";
import LotteryValueDetails from "./LotteryValueDetails";

interface LotteryHeroInterface {
  type: LotteryType;
}
type WinningNumberAPIResponse = {
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
  const { latestMmWinningNumber, latestPbWinningNumber } =
    await fetchLotteryDataFromDB();
  return (
    <section className="w-full bg-secondary  py-12 dark:bg-secondary/30 md:h-auto">
      <div className="container flex flex-wrap justify-between">
        <div>
          <h2
            className={cn(
              "mb-6 inline-block bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent",
              {
                "from-orange-400 to-yellow-700": type === "Megamillions",
                "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
              },
            )}
          >
            {type}
          </h2>
          {/* <div className="mb-4 flex space-x-4">
            {type === "Megamillions"
              ? latestMmWinningNumber.winningNumber.map((num, i) => (
                  <div
                    key={`MM_${i}`}
                    className="flex h-10  w-10 items-center justify-center rounded-full bg-white text-2xl font-bold  [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16"
                  >
                    {num}
                  </div>
                ))
              : latestPbWinningNumber.winningNumber.map((num, i) => (
                  <div
                    key={`PB_${i}`}
                    className="flex h-10  w-10 items-center justify-center rounded-full bg-white text-2xl font-bold  [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16"
                  >
                    {num}
                  </div>
                ))}
            <div
              className={cn(
                " flex h-10 w-10 items-center justify-center rounded-full text-2xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16",
                {
                  "bg-red-700": type === "Powerball",
                  "bg-yellow-500": type === "Megamillions",
                },
              )}
            >
              {type === "Megamillions"
                ? latestMmWinningNumber.megaball
                : latestPbWinningNumber.powerball}
            </div>
          </div> */}
          <LotteryBalls
            type={type}
            latestMmWinningNumber={latestMmWinningNumber}
            latestPbWinningNumber={latestPbWinningNumber}
          />
          <Button
            variant={"ghost"}
            className={cn(
              "mx-auto -mb-2 mt-2 w-full animate-bounce items-center justify-center bg-gradient-to-r bg-clip-text  font-bold text-transparent",
              {
                "from-orange-400 to-yellow-700": type === "Megamillions",
                "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
              },
            )}
            asChild
          >
            <a href="#main">Get Started &darr;</a>
          </Button>

          <div className="flex flex-wrap gap-4 py-6 md:space-x-4 md:py-12">
            <Button variant="outline" asChild size={null} className="p-2">
              <a href="https://youtube.com" target="_blank">
                Watch the Draw <ExternalLinkIcon size={18} />
              </a>
            </Button>
            <Button variant="outline" size={null} className="p-2">
              Past Winning Numbers
            </Button>
          </div>
        </div>

        <LotteryValueDetails
          type={type}
          heading="Next Estimated Jackpot"
          latestMmWinningNumber={latestMmWinningNumber}
          latestPbWinningNumber={latestPbWinningNumber}
        />
      </div>
    </section>
  );
};

export default LotteryHeroSection;
