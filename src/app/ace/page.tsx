import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>Ace Scholarships</h1>
        </div>

        <p>
          Ace Scholarships was tasked with building a new scholarship web application to support Utah students. I was brought on to help bring the project to completion in time for the scholarship deadlines.
        </p>

        <p>
          This project blurred the lines for me between backend and frontend. I needed to frequently write and run AWS Lambda batch functions on DynamoDB data. There was also an intermediate data layer in the Next.js server components that saw me working with data contracts for features I was building. With twice-weekly deployments, it was truly all hands on deck, everywhere we could help.
        </p>

        <p>Technologies used: Next.js, AWS (DynamoDB, Lambda), Typescript, HTML/CSS</p>
      </div>
    );
  }
