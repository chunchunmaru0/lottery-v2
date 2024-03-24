import React from "react";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchLotteryData } from "@/services/fetchLotteryData";
import { LotteryType } from "./types";
import LotteryBalls from "./LotteryBalls";

interface LotteryHeroInterface {
  type: LotteryType;
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
          <div className="mb-2 text-sm">
            {type === "Megamillions"
              ? new Date(latestMmWinningNumber.drawDate).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    weekday: "long",
                  },
                ) + ` MEGAPLIER x${latestMmWinningNumber.megaplier}`
              : new Date(latestPbWinningNumber.drawDate).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    weekday: "long",
                  },
                ) + ` POWERPLAY x${latestPbWinningNumber.powerplay}`}
          </div>
          <div className="flex flex-wrap gap-4 py-8 md:space-x-4 md:py-12">
            <Button variant="outline" asChild className="justify-end pr-12">
              <a href="https://youtube.com" target="_blank" className="">
                Watch the Draw <ExternalLinkIcon size={18} className="" />
              </a>
            </Button>
            <Button variant="outline">Past Winning Numbers</Button>
          </div>
        </div>

        <div className="max-w-sm rounded-lg bg-muted-foreground/30 p-6">
          <h3 className="mb-4 text-3xl font-bold">Next Estimated Jackpot</h3>
          <p
            className={cn(
              "mb-2 inline-block bg-gradient-to-r from-orange-400 to-yellow-700 bg-clip-text text-6xl font-bold text-transparent ",
              {
                "from-orange-500 to-yellow-400": type === "Megamillions",
                "from-red-500  to-rose-900": type === "Powerball",
              },
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
                : latestPbWinningNumber.jackpot,
            )}

            {/* </span> */}
          </p>
          {/* <p className="text-sm mb-4">CASH OPTION: $79.9 MILLION</p> */}
          <p className="mb-4 py-4 text-lg">
            Next Drawing:
            <br />
            <span
              className={cn(
                "inline-block bg-gradient-to-r bg-clip-text text-transparent",
                {
                  "from-orange-500 to-yellow-400": type === "Megamillions",
                  "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
                },
              )}
            >
              {new Date(
                type === "Megamillions"
                  ? latestMmWinningNumber.nextDrawDate
                  : latestPbWinningNumber.nextDrawDate,
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
