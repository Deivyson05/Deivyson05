"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedImage } from "./animatedImage";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = textRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      const paragraphs = Array.from(container.querySelectorAll("p"));
      const originalParagraphs = paragraphs.map((paragraph) => paragraph.textContent ?? "");

      media.add("(min-width: 1024px)", () => {
        paragraphs.forEach((paragraph) => {
          paragraph.innerHTML = (paragraph.textContent ?? "")
            .split("")
            .map((char) => char === " " ? " " : `<span style="opacity: 0">${char}</span>`)
            .join("");
        });

        const chars = container.querySelectorAll("p span");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=4000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline.to(chars, {
          opacity: 1,
          stagger: 0.03,
          ease: "none",
        });

        return () => {
          paragraphs.forEach((paragraph, index) => {
            paragraph.textContent = originalParagraphs[index];
          });
        };
      });

      media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          container.children,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex min-h-[100svh] w-full flex-col items-stretch justify-center gap-8 px-6 py-20 sm:px-10 lg:h-auto lg:min-h-[100svh] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-10"
    >
      <div
        ref={textRef}
        className="flex w-full flex-col gap-5 lg:w-[60%] lg:shrink-0 lg:gap-6"
      >
        <h2 className="title text-6xl">
          Sobre Mim
        </h2>

        <p className="text-lg leading-relaxed text-foreground sm:text-xl lg:text-4xl lg:text-justify">
          Olá! Sou Deivyson Santos, atualmente estudante de
          Sistemas para Internet na UNICAP fissurado por
          tecnologia e resolução de problemas, sempre em busca
          de projetos desafiadores, em busca de saciar minha
          sede de aprendizado.
        </p>

        <p className="text-lg leading-relaxed text-foreground sm:text-xl lg:text-4xl lg:text-justify">
          Nas horas vagas costumo tocar piano, ouvir música,
          tirar fotos e ler alguns livros.
        </p>
      </div>
      <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:ml-auto lg:flex lg:h-full lg:w-40 lg:shrink-0 lg:flex-col lg:items-end lg:justify-center lg:gap-6">
        <AnimatedImage 
          src="/images/por-do-sol.jpg"
          alt="por-do-sol"
          className="aspect-square w-3/4 justify-self-center object-cover lg:w-40"
          delay={0.5}
        />
        <AnimatedImage 
          src="/images/por-do-sol.jpg"
          alt="por-do-sol"
          className="aspect-square w-3/4 rotate-45 justify-self-center object-cover lg:w-40"
          delay={0.5}
        />
        <AnimatedImage 
          src="/images/por-do-sol.jpg"
          alt="por-do-sol"
          className="aspect-square w-3/4 justify-self-center object-cover lg:w-40"
          delay={0.5}
        />
      </div>
    </section>
  );
}