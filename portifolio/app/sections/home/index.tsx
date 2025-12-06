'use client'

import { Button } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter';

export function HomeSection() {
    return (
        <section className="flex items-center h-screen p-10 gap-5 md:p-20">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-2xl font-semibold">
                    Olá! Eu sou Deivyson
                </h1>
                <h2 className="text-3xl font-bold md:text-4xl">
                    Eu desenvolvo sistemas para a web
                </h2>
                <span className="text-lg pl-6 border-l-4">
                    <Typewriter
                        words={['Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação \n das pessoas no que se trata de internet.']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={10}
                        delaySpeed={1000}
                    />
                    
                </span>
            </div>
        </section>
    )
}