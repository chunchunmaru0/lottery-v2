import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MountainIcon, SearchIcon, TicketIcon } from "lucide-react";
import { ModeToggle } from "../theme-toggler";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header
      className="sticky flex top-0 z-10 h-20 w-full shrink-0 items-center px-4 md:px-6
      shadow-md justify-between border-b border-border/40 bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* fixed top-0 flex h-20 w-full bg-white shadow-md justify-between px-4
      md:px-6 z-10 */}
      {/* sticky top-0 z-50 w-full border-b border-border/40 bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60 */}
      <Link href="/">
        <TicketIcon className="h-6 w-6" />
        <span className="sr-only">Lottery Checker</span>
      </Link>
      <nav className="hidden md:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 px-2 "
          href="/powerball"
        >
          Powerball
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 px-2"
          href="/megamillions"
        >
          Mega Millions
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 px-2"
          href="#"
        >
          Your History
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 px-2"
          href="/results"
        >
          Lottery Results
        </Link>
      </nav>
      <div className="flex">
        <Link href={"/login"} className={cn(buttonVariants(), "mx-6")}>
          Login
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
