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
  latestMmWinningNumber: {
    id: string;
    drawDate: Date;
    nextDrawDate: Date;
    jackpot: number;
    allNumber: string[];
    winningNumber: string[];
    megaball: string;
    megaplier: string;
  };
  latestPbWinningNumber: {
    id: string;
    drawDate: Date;
    nextDrawDate: Date;
    jackpot: number;
    allNumber: string[];
    winningNumber: string[];
    powerball: string;
    powerplay: string;
  };
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
