import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MountainIcon, SearchIcon, TicketIcon } from "lucide-react";
import { ModeToggle } from "../theme-toggler";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-10 flex h-20 w-full shrink-0 items-center justify-between border-b
      border-border/40 bg-background/95 px-4 shadow-md backdrop-blur
      supports-[backdrop-filter]:bg-background/60 md:px-6"
    >
      {/* fixed top-0 flex h-20 w-full bg-white shadow-md justify-between px-4
      md:px-6 z-10 */}
      {/* sticky top-0 z-50 w-full border-b border-border/40 bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60 */}
      <Link href="/">
        <TicketIcon className="h-6 w-6" />
        <span className="sr-only">Lottery Checker</span>
      </Link>
      <nav className="hidden gap-4 sm:gap-6 md:flex">
        <Link
          className="px-2 text-sm font-medium underline-offset-4 hover:underline "
          href="/powerball"
        >
          Powerball
        </Link>
        <Link
          className="px-2 text-sm font-medium underline-offset-4 hover:underline"
          href="/megamillions"
        >
          Mega Millions
        </Link>
        <Link
          className="px-2 text-sm font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Your History
        </Link>
        <Link
          className="px-2 text-sm font-medium underline-offset-4 hover:underline"
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
