import { LotteryType } from "@/components/Lottery/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface Props {
  type: LotteryType;
  lottery: {
    id: string;
    userId: string;
    lotteryType: string;
    numbers: number[];
    notified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
const LotteryEmail: React.FC<Props> = ({ type, lottery }) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";
  const getPrize = async (lotteryNum: string) => {
    const apiUrl = `${baseUrl}/api/v2/check-lottery/${type.toLowerCase()}?userNumber=${lotteryNum}`;
    const res = await fetch(apiUrl, { method: "POST" });
    const data = await res.json();
    console.log("prize", data?.prize);
    return data?.prize?.win;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lottery</TableHead>

          <TableHead className="text-right">Winning</TableHead>
          <TableCaption>{type}</TableCaption>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lottery.map((lot, i) => (
          <TableRow key={i}>
            <TableCell className="w-[450px] font-medium">
              {/* <LotteryBalls
              type="Megamillions"
              latestMmWinningNumber={latestMmWinningNumber}
            /> */}
              {lot.numbers.join(",")}
            </TableCell>

            <TableCell className="ml-16">
              $ {getPrize(lot.numbers.join(","))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LotteryEmail;
