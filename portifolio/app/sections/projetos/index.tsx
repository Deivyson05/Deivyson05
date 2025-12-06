'use client'

import { useRouter } from "next/navigation";

import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import Image from "next/image";

import { projetos } from "./projetos";

import { CardProjeto } from "@/components/cardProjeto";

import { useState, useEffect } from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function Projetos() {
    const router = useRouter();

    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])



    return (
        <section className="flex flex-col items-center gap-4 px-4 py-10" id="projetos">
            <h2 className="text-2xl font-semibold text-center md:text-3xl md:text-left">Projetos Concluídos</h2>
            <div className={width > 480 ? "flex flex-wrap gap-6 justify-center" : "flex flex-col items-center"}>

                {
                    width > 480 ? (
                        projetos.map(projeto => (
                            <CardProjeto
                                img={projeto.img}
                                title={projeto.nome}
                                description={projeto.desc}
                                key={projeto.id}
                                id={projeto.id}
                            />
                        ))
                    ) : (
                        <Carousel className="w-[60%]">
                            <CarouselContent className="p-6 gap-2">
                                {projetos.map(projeto => (
                                    <CarouselItem className="bg-gray-900 rounded-lg flex flex-col items-start p-0 w-full overflow-hidden" key={projeto.id}
                                        onClick={() => {
                                            router.push(`/${projeto.id}`);
                                        }}
                                    >
                                        <img src={projeto.img} alt="banner" className="w-full h-50 object-cover" />
                                        <div className="flex flex-col p-4">
                                            <h3 className="w-full h-8 font-bold text-xl flex items-center">{projeto.nome}</h3>
                                            <span className="w-full h-6s text-md font-semibold flex items-center">{projeto.desc}</span>
                                        </div>

                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    )
                }

            </div>
        </section>
    );
}