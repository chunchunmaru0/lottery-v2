import LotteryBalls from "@/components/Lottery/LotteryBalls";
import LotteryValueDetails from "@/components/Lottery/LotteryValueDetails";
import { AllWinningNumberResponse } from "@/components/Lottery/types";
import React from "react";
interface IResult {
  allMegamillionNumber: AllWinningNumberResponse["allMegamillionNumber"];
  allPowerballNumber: AllWinningNumberResponse["allPowerballNumber"];
}
const ResultMobile: React.FC<IResult> = ({
  allMegamillionNumber,
  allPowerballNumber,
}) => {
  const alternatingComponents = [];

  for (
    let i = 0;
    i < Math.max(allMegamillionNumber.length, allPowerballNumber.length);
    i++
  ) {
    if (allPowerballNumber[i]) {
      alternatingComponents.push(
        <LotteryValueDetails
          type="Powerball"
          heading="Powerball"
          latestPbWinningNumber={allPowerballNumber[i]}
          LotteryBalls={
            <LotteryBalls
              type="Powerball"
              latestPbWinningNumber={allPowerballNumber[i]}
            />
          }
        />,
      );
    }
    if (allMegamillionNumber[i]) {
      alternatingComponents.push(
        <LotteryValueDetails
          type="Megamillions"
          heading="Megamillions"
          latestMmWinningNumber={allMegamillionNumber[i]}
          LotteryBalls={
            <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={allMegamillionNumber[i]}
            />
          }
        />,
      );
    }
  }
  return alternatingComponents;
};

export default ResultMobile;
