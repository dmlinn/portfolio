"use client";

import "./globals.css";
import Image from "next/image";
import DonutChart from "@/app/components/arc";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [displayedPage, setDisplayedPage] = useState<ReactNode | null>(null);
  const pathname = usePathname()

  useEffect(() => {
    setDisplayedPage(children);
  }, [children, pathname]);

  return (
    <html lang="en">
      <body className="antialiased dark">
        {/* <Header /> */}
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start max-w-screen-sm">
        <div className="flex flex-col gap-14">
          <h1 className="text-5xl"><span className="font-thin">daniel</span>linn</h1>
          <div className="flex flex-row gap-4">
            <div className="rounded-full overflow-hidden w-36 h-36 text-center">
              <Image
                src="/headshot.png"
                alt="Daniel Linn"
                width={250}
                height={180}
                priority
                className="max-w-none relative -left-14 -top-10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <h2>Senior Frontend Engineering (with a hint of fullstack)</h2>
              </div>
              <div className="flex flex-row gap-2">
                <DonutChart completionPercentage={75} labelText="TS"/>
                <DonutChart completionPercentage={65} labelText="CSS" color='#d0983d'/>
                <DonutChart completionPercentage={55} labelText="Datavis" color='#ab7c32'/>
                <DonutChart completionPercentage={45} labelText="Node" color='#755421'/>
                <DonutChart completionPercentage={35} labelText="AWS" color='#443114'/>
              </div>
            </div>
          </div>
          <div
            className="animate-height"
            style={{opacity: displayedPage ? 1 : 0}}>
            {displayedPage}
          </div>
        </div>
      </main>
    </div>
      </body>
    </html>
  );
}
