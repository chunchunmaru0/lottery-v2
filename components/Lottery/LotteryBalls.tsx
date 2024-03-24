import React from "react";
import { LotteryType, WinningNumberResponse } from "./types";
import { cn } from "@/lib/utils";
interface ILotteryBalls {
  type: LotteryType;
  latestMmWinningNumber?: WinningNumberResponse["latestMmWinningNumber"];
  latestPbWinningNumber?: WinningNumberResponse["latestPbWinningNumber"];
}
const LotteryBalls: React.FC<ILotteryBalls> = ({
  latestMmWinningNumber,
  latestPbWinningNumber,
  type,
}) => {
  return (
    <div className="mb-4 flex space-x-4">
      {type === "Megamillions"
        ? latestMmWinningNumber?.winningNumber?.map((num, i) => (
            <div
              key={`MM_${i}`}
              className="flex h-10  w-10 items-center justify-center rounded-full bg-white text-2xl font-bold  [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16"
            >
              {num}
            </div>
          ))
        : latestPbWinningNumber?.winningNumber?.map((num, i) => (
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
          ? latestMmWinningNumber?.megaball
          : latestPbWinningNumber?.powerball}
      </div>
    </div>
  );
};

export default LotteryBalls;
