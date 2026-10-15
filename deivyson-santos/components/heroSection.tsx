import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function HeroSection() {
    return (
        <section id="hero" className="flex min-h-[100svh] w-full flex-col items-stretch justify-center gap-8 px-6 pb-12 pt-24 sm:px-10 lg:h-auto lg:min-h-[100svh] lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:px-16 lg:pb-0 lg:pt-32">
            <div className="flex w-full flex-col gap-5 lg:flex-2 lg:gap-6">
                <strong className="title bg-linear-to-b from-foreground to-background bg-clip-text text-5xl font-light leading-[0.95] text-transparent sm:text-6xl lg:text-6xl">
                    Desenvolvedor FullStack
                </strong>
                <p className="title w-full text-lg leading-relaxed text-foreground/50 sm:text-xl lg:w-200 lg:text-2xl">Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação das pessoas no que se trata de internet.</p>
                <Separator />
                <div className="flex w-full flex-col gap-3 sm:w-fit sm:flex-row sm:gap-4">
                    <Link className="cursor-pointer rounded-full bg-white px-4 py-2 text-center font-semibold text-black transition-all hover:scale-105 hover:bg-orange-400 hover:text-white" href="/about">Sobre mim</Link>
                    <Link className="cursor-pointer rounded-full bg-white px-4 py-2 text-center font-semibold text-black transition-all hover:scale-105 hover:bg-orange-400 hover:text-white" href="/projects">Meus Projetos</Link>
                </div>

            </div>
            <div className="mx-auto w-full max-w-72 sm:max-w-96 lg:mx-0 lg:max-w-none lg:flex-1">
                <Image src="/images/axolote.png" width={640} height={640} sizes="(max-width: 1023px) 80vw, 50vw" className="h-auto w-full" alt="Axolote ilustrado" priority />
            </div>
        </section>
    )
}