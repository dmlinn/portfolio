import DlCarousel from "@/app/components/carousel";
import RefineGPSLocationComponent from "@/app/components/gps";

export default function Home() {
  return (
    <div>
      <DlCarousel />
      <div className="flex flex-row gap-10 mt-10">
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
  );
}
