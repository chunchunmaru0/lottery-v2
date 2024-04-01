import {
  AllWinningNumberResponse,
  WinningNumberResponse,
} from "@/components/Lottery/types";

import {
  fetchAllLotteryDataFromDB,
  fetchLotteryDataFromDB,
} from "@/services/fetchLotteryData";
import Result from "./Result";

export const revalidate = 3600; // revalidate at most every hour

const ResultPage = async () => {
  const { allMegamillionNumber, allPowerballNumber }: AllWinningNumberResponse =
    await fetchAllLotteryDataFromDB();
  return (
    <section className="container">
      <Result
        allMegamillionNumber={allMegamillionNumber}
        allPowerballNumber={allPowerballNumber}
      />
    </section>
  );
};

export default ResultPage;
