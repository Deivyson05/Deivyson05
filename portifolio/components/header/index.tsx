'use client'

import { Separator } from "@radix-ui/react-separator";
import { Ancora } from "./ancora";
import Image from "next/image";

import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();
  console.log(pathName);
  if (pathName == "/blog") {
    console.log("pagina atual: blog");
  }

  return (
    <header className="bg-background/70 backdrop-blur-sm font-sans flex justify-between items-center py-0 px-4 border-b-1 fixed top-0 w-screen z-100 md:px-20">
      <div className="flex gap-1 items-center">
        <Image src="/blackHole.png" alt="logo" width={80} height={80} />
        <h1 className="invisible md:inline text-xl font-semibold">Deivyson</h1>
      </div>
      <nav className="flex gap-4 items-center">
        <Ancora active={pathName == "/"? true : false} href="/" content="Home" />
        <Separator orientation="vertical" className="w-[1px] h-6 bg-border"/>
        <Ancora active={pathName == "/sobre"? true : false} href="/sobre" content="Sobre" />
        {/* <Ancora active={pathName == "/blog"? true : false} href="/blog" content="Blog" /> */}
      </nav>
    </header>
  );
}