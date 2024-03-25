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
import { ConditionalResponse } from "./LotteryInput";
import { LotteryType } from "./types";

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
          <DialogTitle className="my-4 text-3xl font-bold">
            {data?.prize?.headings}
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center py-4">
            <div className="mb-4 flex space-x-4 ">
              {data?.userNumbers?.map((number, i) => (
                <div
                  key={`MM_${i}`}
                  className="flex h-10  w-10 items-center justify-center rounded-full bg-white text-2xl font-bold  [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16"
                >
                  {number}
                </div>
              ))}
              <div
                className={cn(
                  " flex h-10 w-10 items-center justify-center rounded-full text-2xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset] dark:text-primary-foreground sm:h-16 sm:w-16",
                  {
                    "bg-red-700": type === "Powerball",
                    "bg-yellow-500": type === "Megamillions",
                  },
                )}
              >
                {type === "Powerball"
                  ? data?.userPowerball
                  : data?.userMegaBall}
              </div>
            </div>
            {didWin && (
              <>
                <h3 className="mb-4 text-3xl font-bold">You Won:</h3>
                <p
                  className={cn(
                    "mb-2 inline-block bg-gradient-to-r from-orange-400 to-yellow-700 bg-clip-text text-6xl font-bold text-transparent ",
                    {
                      "from-orange-500 to-yellow-400": type === "Megamillions",
                      "from-red-500  to-rose-900": type === "Powerball",
                    },
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
            <h3 className="mb-4 text-3xl font-bold">
              Matched Numbers: {data?.prize?.matched}
            </h3>
            <h3 className="mb-4 text-3xl font-bold">
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
