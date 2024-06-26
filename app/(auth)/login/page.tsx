import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./UserAuthForm";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function LoginPage() {
  return (
    <div className="container flex h-[80dvh] items-center justify-center sm:h-[90dvh] ">
      <div className="container relative grid h-[800px] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:rounded-2xl lg:border-y-2 lg:border-r-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 hidden md:right-8 md:top-8",
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Lottery Checker V2
          </div>
          <div className="relative z-20 mt-auto">
            <p className="space-y-2 text-lg">
              A simple Lottery Checker App for Powerball and Megamillion, Made
              with Love. ❤️
            </p>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Click the social provider below to sign in to our App ❤️
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
