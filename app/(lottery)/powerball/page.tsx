"use client";
import { Button } from "@/components/ui/button";

import { ExternalLinkIcon } from "lucide-react";

const PowerballPage = () => {
  return (
    <>
      <section className="w-full py-12  bg-secondary dark:bg-secondary/30">
        <div className="container flex flex-wrap justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6">Powerball</h2>
            <div className="flex space-x-4 mb-4">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground ">
                5
              </div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground">
                23
              </div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground">
                26
              </div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground">
                38
              </div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground">
                44
              </div>
              <div className="bg-red-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold dark:text-primary-foreground">
                25
              </div>
            </div>
            <div className="text-sm mb-2">FRIDAY, 1/5/2024 MEGAPLIER 3X</div>
            {/* <div className="mb-4">
              <h3 className="text-lg font-semibold">Match 5 WINNERS</h3>
              <div className="flex items-center justify-between max-w-xs py-2 border-b-2 border-yellow-300">
                <span>CA</span>
                <Button className="bg-yellow-300 text-[#007bc7]">
                  View All Winners
                </Button>
              </div>
            </div> */}
            <div className="flex space-x-4 py-12">
              <Button variant="outline" asChild className="pr-12 justify-end">
                <a href="https://youtube.com" target="_blank" className="">
                  Watch the Draw <ExternalLinkIcon size={18} className="" />
                </a>
              </Button>
              <Button variant="outline">Past Winning Numbers</Button>
            </div>
          </div>

          <div className="bg-muted-foreground/30 rounded-lg p-6 max-w-sm">
            <h3 className="text-3xl font-bold mb-4 ">Next Estimated Jackpot</h3>
            <p className="text-6xl font-bold mb-2">$165 Million</p>
            <p className="text-sm mb-4">CASH OPTION: $79.9 MILLION</p>
            <p className="text-lg mb-4">
              Next Drawing:
              <br />
              Tuesday, 1/9 @ 11 p.m. ET
            </p>
          </div>
        </div>
      </section>
      <section className="container">Test</section>
    </>
  );
};

export default PowerballPage;
