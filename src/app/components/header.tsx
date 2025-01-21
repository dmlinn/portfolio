"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();

  return (
    <nav className='w-full h-fit mx-auto border-b flex flex-row items-center justify-between'>
      <div className="container">
        <Link href={`/`}>Header</Link>
      </div>
      <div>
        <ul className="links gap-10 text-slate-600 flex-grow-1 lg:flex">
            <li><Link className={currentPath === "/about" ? "text-green-500 font-semibold" : "text-slate-600"} href={`/about`}>About</Link></li>
            <li><Link className={currentPath === "/projects" ? "text-green-500 font-semibold" : "text-slate-600"} href={`/about`}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
