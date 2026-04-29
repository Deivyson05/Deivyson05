'use client'
import { Projeto, projetos } from "@/app/sections/projetos/projetos";
import { GlassCard } from "@/components/ui-extra/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ProjectDetail() {
    const project = projetos.find((projeto) => projeto.slug === usePathname().replace("/", ""));
    return (
        <div className="mx-auto px-4 sm:px-6 max-w-5xl pt-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-white pl-0">
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para Projetos
                    </Link>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <GlassCard className="p-0 overflow-hidden mb-12 border-primary/20 glow-border">
                    <div className="relative h-[40vh] md:h-[50vh] w-full">
                        <img
                            src={project?.coverImage}
                            alt={project?.titulo}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium backdrop-blur-md">
                                    {project?.status === "concluido" ? "Concluído" : "Em Andamento"}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white glow-text mb-4">
                                {project?.titulo}
                            </h1>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-white">Sobre o Projeto</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{__html: project?.descricaoLonga as string}}/>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                >
                    <GlassCard className="p-6">
                        <h3 className="text-xl font-display font-bold text-white mb-6">Tecnologias Utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project?.tecnologias.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-3 py-1.5 bg-secondary/20 border border-white/10 rounded-md text-sm text-foreground backdrop-blur-sm"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-xl font-display font-bold text-white mb-6">Ações</h3>
                        <div className="space-y-4">
                            {project?.linkProjeto && (
                                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                                    <a href={project?.linkProjeto} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Acessar Projeto
                                    </a>
                                </Button>
                            )}
                            {project?.linkCodigo && (
                                <Button asChild variant="outline" className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                                    <a href={project?.linkCodigo} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        Ver Código Fonte
                                    </a>
                                </Button>
                            )}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
