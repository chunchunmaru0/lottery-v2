import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import { ConditionalResponse, LotteryType } from "./LotteryInput";

interface ILotteryDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: ConditionalResponse<LotteryType> | null;
  type: LotteryType;
}
const LotteryDialog: React.FC<ILotteryDialogProps> = ({
  open,
  setOpen,
  data,
  type,
}) => {
  const didWin = data?.prize?.result;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold my-4">
            {data?.prize.headings}
          </DialogTitle>
          <DialogDescription className="flex justify-center items-center py-4 flex-col">
            <div className="flex space-x-4 mb-4 ">
              {data?.userNumbers.map((number, i) => (
                <div
                  key={`MM_${i}`}
                  className="bg-white rounded-full  flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground  sm:w-16 sm:h-16 w-10 h-10"
                >
                  {number}
                </div>
              ))}
              <div
                className={cn(
                  " rounded-full flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground sm:w-16 sm:h-16 w-10 h-10",
                  {
                    "bg-red-700": type === "Powerball",
                    "bg-yellow-500": type === "Megamillions",
                  }
                )}
              >
                {type === "Powerball"
                  ? data?.userPowerball
                  : data?.userMegaBall}
              </div>
            </div>
            {didWin && (
              <>
                <h3 className="text-3xl font-bold mb-4">You Won:</h3>
                <p
                  className={cn(
                    "text-6xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-700 inline-block text-transparent bg-clip-text ",
                    {
                      "from-orange-500 to-yellow-400": type === "Megamillions",
                      "from-red-500  to-rose-900": type === "Powerball",
                    }
                  )}
                >
                  {Intl.NumberFormat("en", {
                    style: "currency",
                    currency: "USD",
                    compactDisplay: "short",
                    notation: "compact",
                  }).format(Number(data?.prize?.win))}
                </p>
              </>
            )}
            <h3 className="text-3xl font-bold mb-4">
              Matched Numbers: {data?.prize?.matched}
            </h3>
            <h3 className="text-3xl font-bold mb-4">
              {type === "Powerball" ? "PowerPlay" : "Megaplier"}
              {" x"}
              {data?.prize?.[type === "Powerball" ? "powerPlay" : "megaplier"]}
            </h3>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LotteryDialog;
