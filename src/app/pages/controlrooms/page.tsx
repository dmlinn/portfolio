import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/pages/ace"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>ControlRooms</h1><Link href="/pages/transamerica"><ChevronRightIcon className="h-5 w-5"/></Link>
        </div>

        <p>
          I was brought on to ControlRooms as a senior frontend engineer for my D3 experience. I built complex charts and data analysis tools to visualize the AI-processed sensor data from plants and factories.
        </p>

        <p>
          <Image src="/cr-chart.png" alt="ControlRooms" width={800} height={400} />
        </p>

        <p>
          I architected a tool to quickly provide chart imagery to users who needed to be alerted of system-critical anomalies. This tool was built with Next.js and D3, and improved alert times dramatically over the old process using Puppeteer. To make this happen in a timely manner, I learned the basics of Azure and provisioned my own services.
        </p>

        <p>Technologies used: Next.js, React, D3, Azure, Typescript, HTML/CSS</p>

      </div>
    );
  }
