"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import LotteryDialog from "./LotteryDialog";

export interface LotteryCheckResponse {
  winningNumbers: number[];
  userNumbers: number[];
  userMegaBall?: number;
  userPowerball?: number;
  prize: Prize;
}

export interface Prize {
  result: boolean;
  headings: string;
  matched: number;
  isMegaplierMatched: boolean;
  powerPlay?: number;
  megaplier?: number;
  win: string;
}

export type LotteryType = "Powerball" | "Megamillions";

export type ConditionalResponse<T extends LotteryType> =
  T extends "Megamillions"
    ? LotteryCheckResponse & { megaBall: number; userMegaball: number }
    : T extends "Powerball"
    ? LotteryCheckResponse & { powerBall: number; userPowerball: number }
    : never;

const LotteryInput = ({
  className,
  type,
}: {
  className: string;
  type: LotteryType;
}) => {
  const BASE_URL = "http://localhost:3001/api";
  const [numbers, setNumbers] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] =
    useState<ConditionalResponse<LotteryType> | null>(null);

  const numberRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleNumberChange = (index: number, value: number | null) => {
    console.log(value);
    if (Number.isNaN(value)) {
      return;
    }
    // Limit the entered value to two digits
    const limitedValue =
      value && value <= 99
        ? value
        : value && parseInt(value.toString().slice(0, 2), 10);

    const newNumbers = [...numbers];
    newNumbers[index] = limitedValue;

    if (limitedValue && limitedValue > 10 && index < 5) {
      numberRefs.current[index + 1]?.focus();
    } else if (!limitedValue && index > 0 && limitedValue !== 0) {
      numberRefs.current[index - 1]?.focus();
    }
    setNumbers(newNumbers);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const lotteryNum = numbers.join(",");
    const apiUrl = `${BASE_URL}/lottery/${type}?userNumber=${lotteryNum}`;
    const res = await fetch(apiUrl, { method: "POST" });
    setResponseData(await res.json());
    setOpen(true);
    setNumbers([null, null, null, null, null, null]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={cn(className)}>
        <label className="flex space-x-4 mb-4">
          {numbers.map((number, index) => (
            <input
              key={index}
              type="text" // Use type="text" to disable arrow controls
              inputMode="numeric" // Disable virtual keyboard on mobile devices
              pattern="\d*" // Allow only numeric input
              value={number !== null ? String(number) : ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleNumberChange(
                  index,
                  e.target.value ? parseInt(e.target.value, 10) : null
                )
              }
              ref={(inputRef) => (numberRefs.current[index] = inputRef)}
              className={cn(
                "bg-white rounded-full sm:w-16 sm:h-16 w-10 h-10 flex items-center [box-shadow:0_0_20px_#8b8b8b_inset] justify-center text-2xl font-bold dark:text-primary-foreground text-center",
                {
                  "last:bg-red-700": type === "Powerball",
                  "last:bg-yellow-500": type === "Megamillions",
                }
              )}
            />
          ))}
        </label>

        <Button
          type="submit"
          className={cn(
            "bg-gradient-to-r text-primary text-xl font-semibold dark:text-primary-foreground",
            {
              "from-orange-500 to-yellow-400": type === "Megamillions",
              "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
            }
          )}
        >
          Check Your Lottery
        </Button>
      </form>

      <LotteryDialog
        open={open}
        setOpen={setOpen}
        data={responseData}
        type={type}
      />
    </>
  );
};

export default LotteryInput;
