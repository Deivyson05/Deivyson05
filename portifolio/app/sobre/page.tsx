'use client'
import { motion } from "framer-motion";
import { CardHabilidades } from "@/components/cardHabilidades";
import styles from "./styles.module.css"
import { Typewriter } from "react-simple-typewriter";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SobreSection } from "../sections/sobre";
import { getProfile, profile } from "@/data/profile";
import { GlassCard } from "@/components/ui-extra/GlassCard";
import { Quote, Code2 } from "lucide-react";
import { SkillBar } from "./SkillBar";

import useSWR from 'swr';
import { getTecnologias } from "@/data/tecnologias";

interface Skill {
    id: string;
    name: string;
    level: number;
}

export default function Sobre() {
    const { data: perfil, isLoading: isLoadingPerfil, error: errorPerfil } = useSWR('/profile', () => getProfile());
    const { data: skills, isLoading: isLoadingSkills, error: errorSkills } = useSWR('/skills', () => getTecnologias());

    return (
        <main className="flex flex-col ">
            <section className="pt-12 pb-24 mx-auto px-6 max-w-5xl h-screen flex items-center">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 relative"
                    >
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 relative z-10 glow-border">
                            <img
                                src={profile.avatar}
                                alt={perfil?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 space-y-6 text-center md:text-left"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{perfil?.name}</h1>
                            <p className="text-xl text-primary font-medium">{profile.role}</p>
                        </div>

                        <GlassCard className="inline-block p-6 border-l-4 border-l-primary relative">
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                            <p className="text-lg md:text-xl text-muted-foreground italic relative z-10">
                                "{perfil?.quote}"
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
            <SobreSection />
            <section className="py-12 pb-24 container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <Code2 className="w-8 h-8 text-primary" />
                            Tecnologias
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <GlassCard className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {(skills??[]).map((skill: Skill) => (
                                <SkillBar key={skill.name} name={skill.name} value={skill.level} index={skill.id} />
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </section>
        </main>
    );
}