"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import LotteryDialog from "./LotteryDialog";
import { LotteryCheckResponse, LotteryType } from "./types";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

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
  const session = useSession();
  const isLoggedIn = session?.status === "authenticated";
  const userId = session?.data?.user?.id;

  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] =
    useState<ConditionalResponse<LotteryType> | null>(null);

  const numberRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleNumberChange = (index: number, value: number | null) => {
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
    if (numbers.includes(null))
      return toast(
        "Invalid Lottery Number, Please enter your full Lottery Digits",
      );
    // const apiUrl = `${BASE_URL}/lottery/${type}?userNumber=${lotteryNum}`;
    const apiUrl = `/api/v2/check-lottery/${type.toLowerCase()}?userNumber=${lotteryNum}`;
    try {
      const res = await fetch(apiUrl, { method: "POST" });
      setResponseData(await res.json());
    } catch (error) {
      console.log(error);
    }
    setOpen(true);
    setNumbers([null, null, null, null, null, null]);
  };

  const handleStore = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (numbers.includes(null))
      return toast(
        "Invalid Lottery Number, Please enter your full Lottery Digits",
      );

    const apiUrl = `/api/v2/save-lottery`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      numbers: numbers,
      lotteryType: type,
      userId,
    });
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: myHeaders,
        body: raw,
      });
      if (res.ok) {
        toast(
          "We have saved your lottery, and notify you once the draw is available",
        );
      }
    } catch (error) {
      console.log(error);
      toast("Somethin went wrong while saving your lottery data");
    } finally {
      setNumbers([null, null, null, null, null, null]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={cn(className)}>
        <label className="mb-4 flex space-x-4">
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
                  e.target.value ? parseInt(e.target.value, 10) : null,
                )
              }
              ref={(inputRef) => (numberRefs.current[index] = inputRef)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-white text-center text-2xl font-bold [box-shadow:0_0_20px_#8b8b8b_inset] focus:scale-110 dark:text-primary-foreground sm:h-16 sm:w-16",
                {
                  "last:bg-red-700": type === "Powerball",
                  "last:bg-yellow-500": type === "Megamillions",
                },
              )}
            />
          ))}
        </label>

        <div>
          <Button
            type="submit"
            className={cn(
              "mx-2 bg-gradient-to-r text-xl font-semibold text-primary dark:text-primary-foreground",
              {
                "from-orange-500 to-yellow-400": type === "Megamillions",
                "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
              },
            )}
          >
            Check Your Lottery
          </Button>
          {isLoggedIn && (
            <Button
              variant={"outline"}
              className={cn(
                "mx-2 text-clip bg-gradient-to-r bg-clip-text text-xl  font-semibold text-transparent  dark:border-white",
                {
                  "from-orange-500 to-yellow-400": type === "Megamillions",
                  "from-red-500 via-rose-400 to-rose-900": type === "Powerball",
                },
              )}
              onClick={handleStore}
            >
              Save and Notify
            </Button>
          )}
        </div>
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
