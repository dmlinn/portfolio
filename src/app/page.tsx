import DonutChart from "@/app/components/arc";
import RefineGPSLocationComponent from "@/app/components/gps";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-14">
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
                <h1>Senior Frontend Engineering (with a hint of fullstack)</h1>
              </div>
              <div className="flex flex-row gap-2">
                <DonutChart completionPercentage={75} labelText="Typescript"/>
                <DonutChart completionPercentage={65} labelText="CSS" color='#d0983d'/>
                <DonutChart completionPercentage={55} labelText="Datavis" color='#ab7c32'/>
                <DonutChart completionPercentage={45} labelText="Node" color='#755421'/>
                <DonutChart completionPercentage={35} labelText="Typescript" color='#443114'/>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10">
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
                  <li>Location: <RefineGPSLocationComponent initialNorth={38.640492} initialWest={-106.110242} refinementTime={10000}/> (approx)</li>
                  <li>Timezone: MST</li>
                  <li>Employer: Crux Digital & Self-Employed</li>
                  <li>Experience: 10+ years</li>
                  <li>Education: BA, Colorado State Univeristy</li>
                </ul>
              </code>
            </div>
        </div>
      </main>
    </div>
  );
}
