import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/pages/charter"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>Ace Scholarships</h1><Link href="/pages/controlrooms"><ChevronRightIcon className="h-5 w-5"/></Link>
        </div>

        <p>
          Ace Scholarships was tasked with building a new scholarship web application to support Utah students. I was brought on to help bring the project to completion in time for the scholarship deadlines.
        </p>

        <p>
          <Image src="/ufa.png" alt="Ace Scholarships" width={800} height={400} />
        </p>

        <p>
          This project blurred the lines for me between backend and frontend. I needed to frequently write and run AWS Lambda batch functions on DynamoDB data. There was also an intermediate data layer in the Next.js server components that saw me working with data contracts for features I was building. With twice-weekly deployments, it was truly all hands on deck, and I was able to help the team meet their deadlines frontend and backend.
        </p>

        <p>Technologies used: Next.js, AWS (DynamoDB, Lambda), Typescript, HTML/CSS</p>
      </div>
    );
  }
