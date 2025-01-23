import "./globals.css";
import Image from "next/image";
import DonutChart from "@/app/components/arc";
import Link from "next/link";
import RefineGPSLocationComponent from "@/app/components/gps";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
          <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start max-w-screen-sm">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-4">
                <Link href="/"><h1 className="text-5xl"><span className="font-thin">daniel</span>linn</h1></Link>
                <div className="flex flex-row gap-4">
                  <div className="rounded-full overflow-hidden w-36 h-36 text-center flex-shrink-0">
                    <Image
                      src="/headshot.png"
                      alt="Daniel Linn"
                      width={250}
                      height={180}
                      priority
                      className="max-w-none relative -left-14 -top-10"
                    />
                  </div>
                  <div>
                    <h2 className="font-black">Senior Frontend Engineer</h2>
                    <p>I'm a Senior Frontend Engineer with fullstack experience. I've worked on several high-profile design systems either as a senior engineer or team lead. I've been in a agency-type setting for much of my career, and excel at jumping in to unfamiliar code bases and quick delivery. </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mx-auto text-center">
                    <div className="font-black">EXPERIENCE IN YEARS:</div>
                    <div className="flex flex-row gap-2 center">
                      <DonutChart years={10} labelText="React"/>
                      <DonutChart years={10} labelText="Angular"/>
                      <DonutChart years={10} labelText="Datavis"/>
                      <DonutChart years={8} labelText="Design Sys"/>
                      <DonutChart years={7} labelText="TS"/>
                      <DonutChart years={7} labelText="Node"/>
                      <DonutChart years={2} labelText="CI/CD & Docker"/>
                      <DonutChart years={2} labelText="Next.js"/>
                      <DonutChart years={1} labelText="AWS"/>
                    </div>
                  </div>
              </div>
              <div>
                {children}
              </div>

                <div className="flex flex-row gap-10 mt-14">
                  <code className="text-xs">

                    - Site meta -
                    <ul>
                      <li>Framework: Next.js (typescript)</li>
                      <li>CSS: Tailwind</li>
                      <li>Datavis: D3</li>
                      <li>Hosting: AWS Amplify</li>
                      <li>DNS: AWS Route 53</li>
                      <li>Repository: GitHub</li>
                    </ul>
                  </code>
                  <code className="text-xs">

                    - Engineer data -
                    <ul>
                      <li>Contact: <a href="mailto:dmlinn@gmail.com">{"<dmlinn@gmail.com>"}</a></li>
                      <li>Timezone: MST</li>
                      <li>Location: <RefineGPSLocationComponent initialNorth={38.640492} initialWest={-106.110242} refinementTime={10000}/> (approx)</li>
                      <li>Employer: <a href="https://www.cruxdigital.com/case-studies/">{"<Crux Digital>"}</a> & Self-Employed</li>
                      <li>Experience: 10+ years</li>
                      <li>Education: BA, Colorado State Univeristy</li>
                      <li>Certs: AWS Cloud Practitioner</li>
                    </ul>
                  </code>
                </div>

            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
