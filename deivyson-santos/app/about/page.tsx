'use client';

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import useSWR from "swr";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getTecnologias, type Tecnologia } from "@/api/tecnologias";
import { profile } from "@/api/profile";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
    {
        year: "2022",
        title: "Ensino Médio Completo",
        institution: "EREFEM Governador Barbosa Lima",
    },
    {
        year: "2022 — 2024",
        title: "Aprendiz de Escriturário de Banco",
        institution: "Caixa Econômica Federal",
    },
    {
        year: "2023 — 2025",
        title: "Técnico em Desenvolvimento de Sistemas",
        institution: "Grau Técnico",
    },
    {
        year: "2024 — 2026",
        title: "Tecnólogo em Sistemas para Internet",
        institution: "Universidade Católica de Pernambuco - UNICAP",
    },
    {
        year: "2025 — 2025",
        title: "Desenvolvedor Web",
        institution: "Combogó - UNICAP",
    },
    {
        year: "2025 — 2026",
        title: "Pesquisador de Iniciação Científica",
        institution: "PIBIC - UNICAP",
    },
    {
        year: "2026 — Hoje",
        title: "Desenvolvedor Full Stack",
        institution: "Combogó - UNICAP",
    },
];

const softSkills = [
    "Resolução de problemas",
    "Aprendizado contínuo",
    "Criatividade",
    "Trabalho em equipe",
];

const technologyTiers = [
    { name: "S", label: "Domínio avançado", min: 80, max: 100, tone: "text-emerald-300", surface: "bg-emerald-300/10", border: "border-emerald-300/30" },
    { name: "A", label: "Muito confortável", min: 60, max: 79, tone: "text-sky-300", surface: "bg-sky-300/10", border: "border-sky-300/30" },
    { name: "B", label: "Em evolução", min: 40, max: 59, tone: "text-amber-300", surface: "bg-amber-300/10", border: "border-amber-300/30" },
    { name: "C", label: "Conhecimentos básicos", min: 20, max: 39, tone: "text-orange-300", surface: "bg-orange-300/10", border: "border-orange-300/30" },
    { name: "D", label: "Em exploração", min: 0, max: 19, tone: "text-rose-300", surface: "bg-rose-300/10", border: "border-rose-300/30" },
];

function TechnologyTier({ tier, technologies }: { tier: (typeof technologyTiers)[number]; technologies: Tecnologia[] }) {
    const items = technologies
        .filter((technology) => technology.level >= tier.min && technology.level <= tier.max)
        .sort((first, second) => second.level - first.level);

    if (items.length === 0) return null;

    return (
        <div className="tier-row grid border-b border-white/10 py-5 md:grid-cols-[5rem_11rem_1fr] md:items-center md:gap-6">
            <span className={`title text-5xl leading-none ${tier.tone}`}>{tier.name}</span>
            <span className="mt-2 text-xs uppercase tracking-[0.12em] text-foreground/45 md:mt-0">{tier.label}</span>
            <ul className="mt-4 flex flex-wrap gap-2 md:mt-0">
                {items.map((technology) => (
                    <li
                        key={technology.id}
                        className={`flex items-center gap-2 border px-3 py-2 text-sm ${tier.surface} ${tier.border}`}
                    >
                        <span>{technology.name}</span>
                        <span className="text-xs text-foreground/45">{technology.level}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function AboutPage() {
    const pageRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLElement>(null);
    const tierlistRef = useRef<HTMLElement>(null);
    const { data: technologies, error, isLoading, mutate } = useSWR("/tecnologia", getTecnologias);

    useLayoutEffect(() => {
        const page = pageRef.current;
        const timelineSection = timelineRef.current;
        const tierlist = tierlistRef.current;
        if (!page || !timelineSection || !tierlist) return;

        const context = gsap.context(() => {
            const media = gsap.matchMedia();
            const entries = gsap.utils.toArray<HTMLElement>(".timeline-entry", timelineSection);

            media.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set([".about-intro", ".timeline-line", ...entries, ".tier-row"], {
                    autoAlpha: 1,
                    y: 0,
                    scaleY: 1,
                });
            });

            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    ".about-intro",
                    { autoAlpha: 0, y: 24 },
                    { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".timeline-line",
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: timelineSection,
                            start: "top 70%",
                            end: "bottom 55%",
                            scrub: true,
                        },
                    }
                );

                entries.forEach((entry) => {
                    gsap.fromTo(
                        entry,
                        { autoAlpha: 0.3, y: 12 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            ease: "none",
                            scrollTrigger: {
                                trigger: entry,
                                start: "top 78%",
                                end: "top 52%",
                                scrub: true,
                            },
                        }
                    );

                    gsap.to(entry, {
                        autoAlpha: 0.22,
                        ease: "none",
                        scrollTrigger: {
                            trigger: entry,
                            start: "bottom 38%",
                            end: "bottom 12%",
                            scrub: true,
                        },
                    });
                });

                if (technologies?.length) {
                    gsap.fromTo(
                        ".tier-row",
                        { autoAlpha: 0, y: 18 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.55,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: tierlist,
                                start: "top 75%",
                            },
                        }
                    );
                }
            });

            return () => media.revert();
        }, page);

        return () => context.revert();
    }, [technologies]);

    return (
        <main ref={pageRef} className="mx-auto min-h-screen w-full max-w-360 overflow-hidden px-6 pb-24 pt-32 md:px-12 md:pt-40">
            <section className="about-intro grid gap-10 border-b border-white/15 pb-16 md:grid-cols-[minmax(15rem,0.8fr)_1.2fr] md:items-center md:gap-16 md:pb-24">
                <div className="relative mx-auto aspect-square w-full max-w-80 overflow-hidden border border-white/20 md:mx-0">
                    <Image
                        src={profile.avatar}
                        alt={`Foto de ${profile.name}`}
                        width={320}
                        height={320}
                        unoptimized
                        priority
                        className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/75 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
                        Recife, Brasil
                    </span>
                </div>

                <div className="flex flex-col items-start gap-6">
                    <p className="title text-sm tracking-[0.2em] text-orange-400">SOBRE MIM / 01</p>
                    <h1 className="title text-6xl leading-[0.88] md:text-8xl">
                        Deivyson<br />Santos<span className="text-orange-400">.</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl">
                        {profile.bio}
                    </p>
                    <div className="w-full border-t border-white/15 pt-5">
                        <h2 className="title mb-4 text-xl">Soft skills</h2>
                        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-foreground/65">
                            {softSkills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 bg-orange-400" aria-hidden="true" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section ref={timelineRef} aria-labelledby="timeline-title" className="py-20 md:py-28">
                <header className="mb-12 flex flex-col justify-between gap-4 border-b border-white/15 pb-6 md:mb-16 md:flex-row md:items-end">
                    <div>
                        <p className="title mb-3 text-sm tracking-[0.2em] text-orange-400">CAMINHO / 02</p>
                        <h2 id="timeline-title" className="title text-5xl leading-none md:text-7xl">Linha do tempo</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground/45">
                        Formação e experiências que marcaram minha trajetória até aqui.
                    </p>
                </header>

                <div className="relative py-2">
                    <div className="timeline-line absolute bottom-0 left-6 top-0 w-px origin-top bg-white/35 md:left-10" aria-hidden="true" />
                    <ol className="relative flex flex-col gap-12 md:gap-16">
                        {timeline.map((item, index) => (
                            <li key={item.title} className="timeline-entry grid min-h-24 grid-cols-[3rem_1fr] items-center gap-5 md:grid-cols-[5rem_1fr] md:gap-10">
                                <span className="z-10 flex aspect-square w-12 items-center justify-center border border-white/45 bg-[#080a0a] text-lg text-white/90 md:w-20 md:text-2xl">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between md:gap-8">
                                    <div>
                                        <h3 className="text-base font-medium text-white md:text-lg">{item.title}</h3>
                                        <p className="mt-1 text-sm text-foreground/55">{item.institution}</p>
                                    </div>
                                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-orange-300">{item.year}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section ref={tierlistRef} aria-labelledby="tierlist-title" className="border-t border-white/15 py-20 md:py-28">
                <header className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <p className="title mb-3 text-sm tracking-[0.2em] text-orange-400">FERRAMENTAS / 03</p>
                        <h2 id="tierlist-title" className="title text-5xl leading-none md:text-7xl">Tierlist de tecnologias</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground/45">
                        Organizadas pelo nível de familiaridade registrado no meu perfil.
                    </p>
                </header>

                <div className="border-t border-white/10">
                    {isLoading && <p className="py-8 text-sm text-foreground/55">Carregando tecnologias...</p>}
                    {error && (
                        <div className="flex flex-wrap items-center gap-4 py-8">
                            <p className="text-sm text-foreground/60">Não foi possível carregar as tecnologias.</p>
                            <button type="button" onClick={() => mutate()} className="text-sm text-orange-300 underline underline-offset-4">
                                Tentar novamente
                            </button>
                        </div>
                    )}
                    {!isLoading && !error && technologies?.length === 0 && (
                        <p className="py-8 text-sm text-foreground/55">Nenhuma tecnologia cadastrada.</p>
                    )}
                    {!isLoading && !error && technologies && technologyTiers.map((tier) => (
                        <TechnologyTier key={tier.name} tier={tier} technologies={technologies} />
                    ))}
                </div>
            </section>
        </main>
    );
}