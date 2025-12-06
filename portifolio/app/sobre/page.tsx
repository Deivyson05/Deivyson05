'use client'

import { CardHabilidades } from "@/components/cardHabilidades";
import styles from "./styles.module.css"
import { Typewriter } from "react-simple-typewriter";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SobreSection } from "../sections/sobre";

export default function Sobre() {
    return (
        <main className="flex flex-col ">
            <section className="flex p-10 md:p-20 items-center justify-between h-screen">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Deivyson Ricardo Silva dos Santos
                    </h2>
                    <span className="text-md pl-6 border-l-4 w-full md:text-lg">
                        <Typewriter
                            words={['Olá, sou um entusiasta do conhecimento e pensamento lógico. Sempre buscando aprender coisas novas, me encontrei na programação, desenvolvendo soluções digitais para problemas cotidianos.']}
                            loop={1}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={10}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                {/* <div className={styles.img}>
                    <img src="/bkg.png" alt="Deivyson" />
                    <div></div>
                </div> */}
            </section>
            <SobreSection/>
            <section className="flex flex-col p-10 gap-4 w-full">
                <h2 className="text-2xl font-semibold">Habilidades</h2>
                <CardHabilidades/>
            </section>
        </main>
    );
}