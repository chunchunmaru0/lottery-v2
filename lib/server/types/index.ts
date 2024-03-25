export interface WinningMegaMillions {
  id: string;
  drawDate: Date;
  nextDrawDate: Date;
  jackpot: number;
  allNumber: number[];
  winningNumber: number[];
  megaball: number;
  megaplier: number;
}

export interface WinningPowerball {
  id: string;
  drawDate: Date;
  nextDrawDate: Date;
  jackpot: number;
  allNumber: number[];
  winningNumber: number[];
  powerball: number;
  powerplay: number;
}

export interface CompareMegaMilNumbers {
  userNumbers: [number, number, number, number, number];
  userMegaBall: number;
  winningMegaMillions: WinningMegaMillions;
}
