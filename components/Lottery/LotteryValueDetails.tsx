import React from "react";
import { LotteryType, WinningNumberResponse } from "./types";
import { cn } from "@/lib/utils";
interface ILotteryBalls {
  type: LotteryType;
  latestMmWinningNumber?: WinningNumberResponse["latestMmWinningNumber"];
  latestPbWinningNumber?: WinningNumberResponse["latestPbWinningNumber"];
}

const LotteryValueDetails: React.FC<ILotteryBalls> = ({
  type,
  latestMmWinningNumber,
  latestPbWinningNumber,
}) => {
  return (
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
            ? latestMmWinningNumber
              ? latestMmWinningNumber.jackpot
              : 0
            : latestPbWinningNumber
              ? latestPbWinningNumber.jackpot
              : 0,
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
              ? latestMmWinningNumber
                ? latestMmWinningNumber?.nextDrawDate
                : 0
              : latestPbWinningNumber
                ? latestPbWinningNumber?.nextDrawDate
                : 0,
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
  );
};

export default LotteryValueDetails;
