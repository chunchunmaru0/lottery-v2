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
    <>
      <div className="mb-4 flex space-x-4">
        {type === "Megamillions"
          ? latestMmWinningNumber?.winningNumber?.map((num, i) => (
              <div
                key={`MM_${i}`}
                className="flex size-8 items-center justify-center rounded-full bg-white text-xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset]  dark:text-primary-foreground md:size-16 md:text-2xl"
              >
                {num}
              </div>
            ))
          : latestPbWinningNumber?.winningNumber?.map((num, i) => (
              <div
                key={`PB_${i}`}
                className="flex size-8 items-center justify-center rounded-full bg-white text-xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset]  dark:text-primary-foreground md:size-16 md:text-2xl"
              >
                {num}
              </div>
            ))}
        <div
          className={cn(
            " flex size-8 items-center justify-center rounded-full text-xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground md:size-16 md:text-2xl",
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
      <div className="mb-2 text-sm">
        {type === "Megamillions"
          ? latestMmWinningNumber
            ? new Date(latestMmWinningNumber.drawDate).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                weekday: "long",
              }) + ` MEGAPLIER x${latestMmWinningNumber.megaplier}`
            : null
          : latestPbWinningNumber
            ? new Date(latestPbWinningNumber.drawDate).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                weekday: "long",
              }) + ` POWERPLAY x${latestPbWinningNumber.powerplay}`
            : null}
      </div>
    </>
  );
};

export default LotteryBalls;
