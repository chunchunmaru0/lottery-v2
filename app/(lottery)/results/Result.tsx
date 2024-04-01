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
import { AllWinningNumberResponse } from "@/components/Lottery/types";
import ResultMobile from "./ResultMobile";

interface IResult {
  allMegamillionNumber: AllWinningNumberResponse["allMegamillionNumber"];
  allPowerballNumber: AllWinningNumberResponse["allPowerballNumber"];
}
const Result: React.FC<IResult> = ({
  allMegamillionNumber,
  allPowerballNumber,
}) => {
  const isMobileScreen = useMediaQuery("(max-width: 639px)");

  const alternatingRows = [];

  // Loop through the arrays simultaneously and add alternating rows
  for (
    let i = 0;
    i < Math.max(allMegamillionNumber.length, allPowerballNumber.length);
    i++
  ) {
    if (allPowerballNumber[i]) {
      alternatingRows.push(
        <TableRow key={`powerball-${allMegamillionNumber[i].id}`}>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Powerball"
              latestPbWinningNumber={allPowerballNumber[i]}
            />
          </TableCell>
          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Powerball"
              latestPbWinningNumber={allPowerballNumber[i]}
            />
          </TableCell>
        </TableRow>,
      );
    }

    if (allMegamillionNumber[i]) {
      alternatingRows.push(
        <TableRow key={`megamillion-${allMegamillionNumber[i].id}`}>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={allMegamillionNumber[i]}
            />
          </TableCell>
          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Megamillions"
              latestMmWinningNumber={allMegamillionNumber[i]}
            />
          </TableCell>
        </TableRow>,
      );
    }
  }
  return isMobileScreen ? (
    <div className="my-4 grid grid-cols-1 gap-8">
      <ResultMobile
        allMegamillionNumber={allMegamillionNumber}
        allPowerballNumber={allPowerballNumber}
      />
    </div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lottery</TableHead>

          <TableHead className="text-right">Jackpot</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* <TableRow>
          <TableCell className="w-[100px] font-medium">
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={allMegamillionNumber[0]}
            />
          </TableCell>

          <TableCell className="flex justify-end">
            <LotteryValueDetails
              type="Megamillions"
              latestMmWinningNumber={allMegamillionNumber[0]}
            />
          </TableCell>
        </TableRow> */}
        {alternatingRows}
      </TableBody>
    </Table>
  );
};

export default Result;
