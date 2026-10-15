"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSWR from "swr";

import { getProjetos, PROJETOS_SWR_KEY } from "@/api/projetos";
import { ProjectCard, ProjectCardSkeleton } from "./projectCard";
import { Separator } from "./ui/separator";

export function ProjectsPageContent() {
  const pageRef = useRef<HTMLElement>(null);
  const { data: projects, error, isLoading, mutate } = useSWR(
    PROJETOS_SWR_KEY,
    getProjetos
  );

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || isLoading || !projects) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card", page);
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".projects-intro", cards], { autoAlpha: 1, y: 0 });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".projects-intro",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.16,
            delay: 0.15,
            ease: "power2.out",
          }
        );
      });

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, [isLoading, projects]);

  return (
    <main
      ref={pageRef}
      className="mx-auto min-h-screen w-full max-w-360 overflow-hidden px-6 pb-24 pt-32 md:px-12 md:pt-40"
    >
      <header className="projects-intro mb-12 flex flex-col gap-5 md:mb-16">
        <p className="title text-sm tracking-[0.2em] text-orange-400">
          PORTFÓLIO / 2021—2026
        </p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="title text-7xl leading-[0.85] md:text-8xl">
            Projetos<span className="text-orange-400">.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-foreground/60 md:text-lg">
            Ideias que viraram experiências digitais, pesquisas e produtos.
            Uma seleção do que venho construindo.
          </p>
        </div>
        <Separator />
        <p className="text-xs uppercase tracking-[0.16em] text-foreground/45">
          {isLoading
            ? "Buscando projetos"
            : `${String(projects?.length ?? 0).padStart(2, "0")} projetos selecionados`}
        </p>
      </header>

      <section
        aria-label="Projetos selecionados"
        className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14"
      >
        {isLoading &&
          Array.from({ length: 4 }, (_, index) => (
            <ProjectCardSkeleton key={`project-skeleton-${index}`} />
          ))}
        {!isLoading &&
          !error &&
          projects?.map((project, index) => (
            <article key={project.id} className="flex flex-col gap-4">
              <ProjectCard
                title={project.title}
                desc={project.desc}
                imgUrl={project.imgUrl}
                href={`/projects/${project.id}`}
                className="project-card aspect-4/3 h-auto w-full rounded-lg"
              />
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="title text-sm text-orange-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-foreground/40">
                  Projeto selecionado
                </span>
              </div>
            </article>
          ))}
        {error && (
          <div className="col-span-full flex flex-col items-start gap-3 py-8">
            <p className="text-foreground/70">Não foi possível carregar os projetos.</p>
            <button
              type="button"
              onClick={() => mutate()}
              className="text-sm text-orange-400 underline underline-offset-4"
            >
              Tentar novamente
            </button>
          </div>
        )}
      </section>
    </main>
  );
}