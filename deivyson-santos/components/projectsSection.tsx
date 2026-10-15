"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { Separator } from "./ui/separator";
import { ProjectCard } from "./projectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Solucao de Rastreamento de Libras",
    desc: "Projeto do PIBIC",
    imgUrl: "https://avatars.githubusercontent.com/u/267128970?s=400&u=671bf596e6e654db0f30a65936d57098fed60597&v=4",
  },
  {
    title: "Yomu - gamificador de leitura",
    desc: "Aplicativo para gamificar o hábito de ler",
    imgUrl: "https://raw.githubusercontent.com/Deivyson05/yomu/main/proj-yomu.png",
  },
  {
    title: "Combogo Unicap",
    desc: "Landing Page para agência da Combogo",
    imgUrl: "/images/combogo-unicap.jpg",
  },
  {
    title: "Adotaí",
    desc: "Aplicativo de tinderlike para pets",
    imgUrl: "https://i.imgur.com/VjSKe7y.png",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card", track);

        const entryGap = 160;
        const stackOffset = 14;
        const stepDuration = 1;
        const stepOffset = 0.6;

        cards.forEach((card, index) => {
          gsap.set(card, {
            x: window.innerWidth + index * entryGap,
            zIndex: index,
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${cards.length * 500}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          timeline.to(
            card,
            {
              x: index * stackOffset,
              duration: stepDuration,
              ease: "power2.out",
            },
            index * stepOffset
          );
        });
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen w-full flex-col items-stretch gap-8 overflow-hidden px-6 py-20 sm:px-10 lg:h-screen lg:min-h-0 lg:flex-row lg:items-center lg:gap-20 lg:px-16 lg:pb-0 lg:pt-32"
    >
      <div className="z-20 flex w-full flex-col gap-4 lg:w-auto lg:shrink-0">
        <h2 className="title bg-linear-to-b from-foreground to-background bg-clip-text text-4xl font-light leading-[0.95] text-transparent sm:text-5xl lg:text-6xl">
          Principais Projetos
        </h2>

        <Separator />

        <Link href="/projects" className="w-full cursor-pointer rounded-full bg-white px-4 py-2 text-center font-bold text-black transition-all hover:scale-[1.02] sm:w-fit">
          Ver Todos os Projetos
        </Link>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            className="project-card aspect-4/3 h-auto w-full"
          />
        ))}
      </div>

      <div
        ref={trackRef}
        className="sv-barrier-track relative hidden h-full w-full flex-1 lg:block"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            className="project-card absolute left-0 top-0 w-100"
          />
        ))}
      </div>
    </section>
  );
}