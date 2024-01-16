import React from "react";
import LotteryInput from "./LotteryInput";

interface LotteryMainInterface {
  type: "Powerball" | "Megamillions";
}
const LotteryMainSection: React.FC<LotteryMainInterface> = ({ type }) => {
  return (
    <section className="container mx-auto flex h-[80vh] max-w-full flex-col items-center justify-center space-y-6 pt-24 md:h-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Check Your Powerball Numbers</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your lucky numbers for the {type} Lottery
        </p>
      </div>
      <LotteryInput
        type={type}
        className="mx-auto flex max-w-full flex-col items-center justify-center space-y-6"
      />
    </section>
  );
};

export default LotteryMainSection;
