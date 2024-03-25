export interface WinningMegaMillions {
  id: string;
  drawDate: Date;
  nextDrawDate: Date;
  jackpot: number;
  allNumber: string[];
  winningNumber: string[];
  megaball: string;
  megaplier: string;
}

export interface WinningPowerball {
  id: string;
  drawDate: Date;
  nextDrawDate: Date;
  jackpot: number;
  allNumber: string[];
  winningNumber: string[];
  powerball: string;
  powerplay: string;
}

export interface CompareMegaMilNumbers {
  userNumbers: [number, number, number, number, number];
  userMegaBall: number;
  winningMegaMillions: WinningMegaMillions;
}
