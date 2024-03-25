import * as resultMock from "./resultMock.json" assert { type: "json" };

export async function getLottery() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.X_Rapidapi_Key!,
      "X-RapidAPI-Host": process.env.X_Rapidapi_Host!,
    },
  };
  const response = await fetch(
    `https://lottery-results.p.rapidapi.com/games-by-state/us/tx`,
    options,
  );
  const results: typeof resultMock = await response.json();
  //   const results = resultMock;
  const powerballResults = results[0];

  const megamillionsResults = results[1];

  const megaMillionDraws = megamillionsResults.plays[0].draws[0];
  const drawDate = new Date(megaMillionDraws.date);
  const nextDrawDate = new Date(megaMillionDraws.nextDrawDate);
  const jackpot = megaMillionDraws.nextDrawJackpot;

  const mmLotteryNumber: number[] = [];
  const mmWinningNumber: number[] = [];
  for (let numbers of megaMillionDraws.numbers) {
    mmLotteryNumber.push(parseInt(numbers.value));
  }
  for (let i = 0; i <= 4; i++) {
    mmWinningNumber.push(parseInt(megaMillionDraws.numbers[i].value));
  }
  const megaplier = parseInt(megaMillionDraws.numbers[6].value);
  const megaball = parseInt(megaMillionDraws.numbers[5].value);

  const powerBallDraws = powerballResults.plays[0].draws[0];
  const pbdrawDate = new Date(powerBallDraws.date);
  const pbnextDrawDate = new Date(powerBallDraws.nextDrawDate);
  const pbjackpot = powerBallDraws.nextDrawJackpot;

  const pbLotteryNumber: number[] = [];
  const pbWinningNumber: number[] = [];
  for (let numbers of powerBallDraws.numbers) {
    pbLotteryNumber.push(parseInt(numbers.value));
  }
  for (let i = 0; i <= 4; i++) {
    pbWinningNumber.push(parseInt(powerBallDraws.numbers[i].value));
  }
  const pbmegaplier = parseInt(powerBallDraws.numbers[6].value);
  const pbmegaball = parseInt(powerBallDraws.numbers[5].value);

  const MMpayload = {
    jackpot: jackpot,
    drawDate: drawDate,
    nextDrawDate: nextDrawDate,
    allNumber: mmLotteryNumber,
    winningNumber: mmWinningNumber,
    megaball: megaball,
    megaplier: megaplier,
  };
  const PBpayload = {
    jackpot: pbjackpot,
    drawDate: pbdrawDate,
    nextDrawDate: pbnextDrawDate,
    allNumber: pbLotteryNumber,
    winningNumber: pbWinningNumber,
    powerball: pbmegaball,
    powerplay: pbmegaplier,
  };

  return { MMpayload, PBpayload };
}
