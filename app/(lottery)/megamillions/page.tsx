import LotteryFooterSection from "@/components/Lottery/LotteryFooterSection";
import LotteryHeroSection from "@/components/Lottery/LotteryHeroSection";
import LotteryMainSection from "@/components/Lottery/LotteryMainSection";

export const dynamic = "force-dynamic";
const MegamillionsPage = () => {
  return (
    <>
      <LotteryHeroSection type="Megamillions" />
      <LotteryMainSection type="Megamillions" />
      <LotteryFooterSection type="Megamillions" />
    </>
  );
};

export default MegamillionsPage;
