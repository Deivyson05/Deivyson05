'use-client'

import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { useState, useEffect } from 'react';
import { sobre } from "./sobre"


export function SobreSection() {

    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <section className="flex flex-col p-10 gap-8 items-center">


            {
                width > 1090 ? (
                    sobre.map((s, index) => (
                        <Card className="flex flex-row gap-4 p-4 bg-gray-900 w-full" key={index}>
                            <img src={s.img} alt="img" width={64} height={64} />
                            <div>
                                <CardTitle>{s.title}</CardTitle>
                                <CardDescription>{s.description}</CardDescription>
                            </div>
                        </Card>
                    ))
                ) : (
                    <Carousel className="w-60">
                        <CarouselContent>
                            {sobre.map((s, index) => (
                                <CarouselItem className="flex justify-center" key={index}>
                                    <Card className="flex flex-col w-74 h-fill p-4 gap-4 items-center bg-gray-900 ">
                                        <img src={s.img} alt="img" width={64} height={64} className="rounded-full"/>
                                        <CardTitle>{s.title}</CardTitle>
                                        <CardDescription className="text-center">{s.description}</CardDescription>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                )
            }
        </section>
    );
}