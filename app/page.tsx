"use client";
import { auth } from "@/auth";
import { Avatar } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  CheckIcon,
  DownloadIcon,
  FacebookIcon,
  InstagramIcon,
  ScanIcon,
  TwitterIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        <section className="w-full bg-gray-100 py-12 dark:bg-secondary/30 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Check Your Lottery Tickets Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Our app allows you to scan your lottery tickets and get
                  instant results. No more waiting, know if you&apos;ve won
                  immediately!
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href="/powerball"
                >
                  Powerball
                </Link>
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href="/megamillions"
                >
                  MegaMillion
                </Link>
                <Button onClick={() => signOut()}>Signout</Button>
              </div>
            </div>
          </div>
        </section>
        <section className=" container w-full py-12 md:py-24 lg:py-32 ">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How It Works
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Just three simple steps to get your lottery results.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-8 sm:grid-cols-3 lg:gap-12 [&>img]:mx-auto">
              <div className="flex flex-col items-center">
                <DownloadIcon className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">Check your Lottery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our App allows you to check Powerball or Megamillion
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ScanIcon className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">Enter Your Ticket</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your Powerball or Megamillion ticket number.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CheckIcon className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">Get Instant Results</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Know immediately how much you&apos;ve won!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-auto w-full bg-gray-100 py-12 dark:bg-secondary/30 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Testimonials
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Hear from our satisfied users.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="mt-5">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/39103357?v=4" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-bold">Chunhunmaru</h3>
                    <blockquote className="space-y-2">
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        &ldquo;The app is super easy to use and I love the
                        instant results!&rdquo;
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="mt-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-bold">John Doe</h3>
                    <blockquote className="space-y-2">
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        &ldquo;The app is super easy to use and I love the
                        instant results!&rdquo;
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="mt-5">
                      <AvatarImage src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1586f20e0c2ff16572c23719bf0d5cc7~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704783600&x-signature=7pd5SvZDuI80FQSCaHKB7FBrkI4%3D" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-bold">AnthemLOL</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      &quot;The app is super easy to use and I love the instant
                      results!&quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
/*
      
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Testimonials
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Hear from our satisfied users.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    &quot;The app is super easy to use and I love the instant
                    results!&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    &quot;No more waiting to check my tickets. This app is a
                    game changer!&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">Bob Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    &quot;I can&apos;t believe how easy it is to check my
                    tickets now. Highly recommend!&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      */
