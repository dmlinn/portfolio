import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/pages/miruni"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>Charter/Spectrum</h1><Link href="/pages/ace"><ChevronRightIcon className="h-5 w-5"/></Link>
        </div>

        <p>
          Charter Communications tasked our team with taking their existing "Kite" design system across the finish line. I developed a number of user-facing Angular components, ranging from buttons to complex features, and was instrumental in building their automated component catalog.
        </p>

        <p>
          <Image src="/kiteds.png" alt="ControlRooms" width={800} height={400} />
        </p>

        <p>
          All components were built with a focus on accessibility (tested with JAWS) and responsiveness across all devices supported by Charter (eg. phones, televisions), and were designed to be easily customizable with design tokens.
        </p>

        <p>
          Components are now used by dozens of teams to create applications for numerous Charter products across supported multimedia devices.
        </p>

        <p>
          Technologies used: Angular, design tokens, HTML/CSS,
        </p>
      </div>
    );
  }
