import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MountainIcon, SearchIcon, TicketIcon } from "lucide-react";
import { ModeToggle } from "../theme-toggler";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import SignoutBtn from "./SignoutBtn";

export default async function Navbar() {
  const userSession = await auth();
  const isLoggedIn = !!userSession?.user;
  return (
    <header
      className="sticky top-0 z-10 flex h-20 w-full shrink-0 items-center justify-between border-b
      border-border/40 bg-background/95 px-4 shadow-md backdrop-blur
      supports-[backdrop-filter]:bg-background/60 md:px-6"
    >
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
          href="/results"
        >
          Lottery Results
        </Link>
        {isLoggedIn && (
          <Link
            className="px-2 text-sm font-medium underline-offset-4 hover:underline"
            href="/history"
          >
            Your History
          </Link>
        )}
      </nav>
      <div className="flex">
        {!isLoggedIn ? (
          <Link href={"/login"} className={cn(buttonVariants(), "mx-6")}>
            Login
          </Link>
        ) : (
          <SignoutBtn />
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
