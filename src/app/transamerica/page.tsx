import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/"><ChevronLeftIcon className="h-5 w-5"/></Link><h1>Transamerica - Design System Team Lead</h1>
        </div>

        <p>
          Design system team lead, driving the creation, implementation and adoption of a custom in-house design system. Reduced duplicate UI development costs and normalized design elements across multiple platforms, software languages and frameworks. Held daily scrum meetings and semi-weekly planning sessions. Regularly met with stakeholders, designers and other team leads  to understand their needs and communicate them with the team. Spoke at local meetups about the technical aspects of our design system.
        </p>

        <p>Technologies used: Vue.js, Typescript, web components, web tokens</p>
      </div>
    );
  }
