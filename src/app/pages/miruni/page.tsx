import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>Miruni</h1>
        </div>

        <p>
          I merged two chrome extensions written by two different dev teams to make miruni, a bug documentation and screen recording tool. In a perfect storm, Google had also mandated that extensions be upgraded to Manifest V3, without providing sufficient documentation or support for the migration. I was able to successfully upgrade the extensions to V3, even though it took some trickery with background tabs and a lot of trial and error. The extension is being used today by users of both the original extensions.
        </p>

        <p>
          <Image src="/miruni.png" alt="Miruni" width={800} height={400} />
        </p>

        <p>
          Technologies used: React, Chrome Manifest V3, HTML/CSS
        </p>
      </div>
    );
  }
