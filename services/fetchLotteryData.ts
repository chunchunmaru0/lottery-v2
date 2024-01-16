export async function fetchLotteryData() {
  try {
    const data = await fetch(
      "http://localhost:3001/api/user/getLotteryHistory",
      {
        // cache: "no-store",
        next: { revalidate: 3600 },
      },
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error Fetching");
    return {
      error: true,
      latestPbWinningNumber: {
        _id: "0",
        drawDate: new Date(),
        nextDrawDate: new Date(),
        jackpot: 0,
        allNumber: [0, 0, 0, 0, 0], // Array with size 6
        winningNumber: [0, 0, 0, 0, 0],
        powerball: 0,
        powerplay: 0,
        __v: 1,
      },
      latestMmWinningNumber: {
        _id: "0",
        drawDate: new Date(),
        nextDrawDate: new Date(),
        jackpot: 0,
        allNumber: [0, 0, 0, 0, 0], // Array with size 6
        winningNumber: [0, 0, 0, 0, 0],
        megaball: 0,
        megaplier: 0,
        __v: 1,
      },
    };
  }
}
