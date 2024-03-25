"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useMediaQuery from "@/hooks/useMediaQuery";
import LotteryBalls from "@/components/Lottery/LotteryBalls";
import LotteryValueDetails from "@/components/Lottery/LotteryValueDetails";
import { WinningNumberResponse } from "@/components/Lottery/types";

interface IResult {
  latestMmWinningNumber: WinningNumberResponse["latestMmWinningNumber"];
  latestPbWinningNumber: WinningNumberResponse["latestPbWinningNumber"];
}
const Result: React.FC<IResult> = ({
  latestMmWinningNumber,
  latestPbWinningNumber,
}) => {
  const isMobileScreen = useMediaQuery("(max-width: 639px)");

  return isMobileScreen ? (
    <>
      <div className="my-4 grid grid-cols-1 gap-8">
        <LotteryValueDetails
          type="Megamillions"
          heading="Megamillions"
          latestMmWinningNumber={latestMmWinningNumber}
          LotteryBalls={
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          }
        />{" "}
        <LotteryValueDetails
          type="Megamillions"
          heading="Megamillions"
          latestMmWinningNumber={latestMmWinningNumber}
          LotteryBalls={
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          }
        />{" "}
        <LotteryValueDetails
          type="Megamillions"
          heading="Megamillions"
          latestMmWinningNumber={latestMmWinningNumber}
          LotteryBalls={
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          }
        />{" "}
        <LotteryValueDetails
          type="Megamillions"
          heading="Megamillions"
          latestMmWinningNumber={latestMmWinningNumber}
          LotteryBalls={
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          }
        />
      </div>
    </>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lottery</TableHead>

          <TableHead className="text-right">Jackpot</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>

          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>

          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>

          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Powerball"
              latestPbWinningNumber={latestPbWinningNumber}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Result;
