import { WinningNumberResponse } from "@/components/Lottery/types";

import { fetchLotteryDataFromDB } from "@/services/fetchLotteryData";
import Result from "./Result";

export const revalidate = 3600; // revalidate at most every hour

const ResultPage = async () => {
  const {
    latestPbWinningNumber,
    latestMmWinningNumber,
  }: WinningNumberResponse = await fetchLotteryDataFromDB();
  return (
    <section className="container">
      <Result
        latestMmWinningNumber={latestMmWinningNumber}
        latestPbWinningNumber={latestPbWinningNumber}
      />
    </section>
  );
};

export default ResultPage;
