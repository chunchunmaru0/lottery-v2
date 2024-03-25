import LotteryFooterSection from "@/components/Lottery/LotteryFooterSection";
import LotteryHeroSection from "@/components/Lottery/LotteryHeroSection";
import LotteryMainSection from "@/components/Lottery/LotteryMainSection";

export const dynamic = "force-dynamic";

const PowerballPage = () => {
  return (
    <>
      <LotteryHeroSection type="Powerball" />
      <LotteryMainSection type="Powerball" />
      <LotteryFooterSection type="Powerball" />
    </>
  );
};

export default PowerballPage;
