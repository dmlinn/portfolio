import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/pages/transamerica"><ChevronLeftIcon className="h-5 w-5"/></Link>
          <h1>GCI - Senior Frontend Engineer</h1>
          <Link href="/pages/miruni"><ChevronRightIcon className="h-5 w-5"/></Link>
        </div>

        <Image src="/gci-at2.png" alt="GCI" width={200} height={400} className="float-right pl-10 pt-5" />

        <p>
          GCI was in the process of building an internal tool to streamline the metering and diagnosis of network infrastructure. I was one of two frontend engineers tasked with building the tool from scratch.
        </p>

        <p>
          I also lead the creation of a cordova mobile application, which allowed field technicians to capture images of floor plans and network infrastructure, and denote equipment locations on said floor plans. Tested and deployed in both the Apple and Google app stores.
        </p>

        <p>
          <Image src="/gci-at.png" alt="GCI" width={800} height={400} className="pt-10" />
        </p>

        <p>Technologies used: React, D3, Cordova</p>
      </div>
    );
  }
