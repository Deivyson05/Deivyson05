'use-client'

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GlassCard } from "@/components/ui-extra/GlassCard";
import { Sparkles, Heart } from "lucide-react";
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



    const softSkills = [
        "Comunicação Clara",
        "Resolução de Problemas",
        "Trabalho em Equipe",
        "Adaptabilidade",
        "Pensamento Crítico",
        "Autodidatismo",
    ];

    const hobbies = [
        "Fotografia Noturna",
        "Jogos Indie",
        "Eletrônica e IoT",
        "Música Synthwave",
    ];


    return (
        <section className="py-12 mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-display font-bold text-white">Quem sou eu</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {profile.bio}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-display font-bold text-white">Soft Skills</h3>
                        </div>
                        <ul className="grid grid-cols-2 gap-3">
                            {softSkills.map((skill, i) => (
                                <li key={i} className="text-muted-foreground flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-6 h-6 text-accent" />
                            <h3 className="text-xl font-display font-bold text-white">Hobbies</h3>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                            {hobbies.map((hobby, i) => (
                                <li
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground"
                                >
                                    {hobby}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}