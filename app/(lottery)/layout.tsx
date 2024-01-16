export async function fetchLotteryData() {
  const data = await fetch("http://localhost:3001/api/user/getLotteryHistory", {
    // cache: "no-store",
    next: { revalidate: 3600 },
  });
  const response = await data.json();
  return response;
}

const LotteryLayout = async ({ children }) => {
  return children;
};

export default LotteryLayout;
