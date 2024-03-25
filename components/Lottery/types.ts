import { WinningMegaMillions, WinningPowerball } from "@/lib/server/types";

export type LotteryType = "Powerball" | "Megamillions";
export type WinningNumberAPIResponse = {
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
export type WinningNumberResponse = {
  latestMmWinningNumber: WinningMegaMillions;
  latestPbWinningNumber: WinningPowerball;
};

export interface LotteryCheckResponse {
  winningNumbers: number[];
  userNumbers: number[];
  userMegaBall?: number;
  userPowerball?: number;
  prize: Prize;
}

export interface Prize {
  result: boolean;
  headings: string;
  matched: number;
  isMegaplierMatched: boolean;
  powerPlay?: number;
  megaplier?: number;
  win: string;
}
