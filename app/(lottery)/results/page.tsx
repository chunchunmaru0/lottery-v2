import { WinningNumberResponse } from "@/components/Lottery/types";

import { fetchLotteryData } from "@/services/fetchLotteryData";
import Result from "./Result";

const ResultPage = async () => {
  const {
    latestPbWinningNumber,
    latestMmWinningNumber,
  }: WinningNumberResponse = await fetchLotteryData();
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
