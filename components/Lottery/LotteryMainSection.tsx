import React from "react";
import LotteryInput from "./LotteryInput";

interface LotteryMainInterface {
  type: "Powerball" | "Megamillions";
}
const LotteryMainSection: React.FC<LotteryMainInterface> = ({ type }) => {
  return (
    <section className="container mx-auto max-w-full space-y-6 pt-24 h-[80vh] md:h-auto justify-center items-center flex flex-col">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Check Your Powerball Numbers</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your lucky numbers for the {type} Lottery
        </p>
      </div>
      <LotteryInput
        type={type}
        className="flex flex-col justify-center items-center mx-auto max-w-full space-y-6"
      />
    </section>
  );
};

export default LotteryMainSection;
