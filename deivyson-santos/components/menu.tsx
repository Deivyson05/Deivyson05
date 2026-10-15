"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Menu() {
    const menuLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "Sobre" },
        { path: "/projects", label: "Projetos" },
        { path: "/contact", label: "Contato" },
    ]

    const tl = useRef<gsap.core.Timeline | null>(null);
    const container = useRef<HTMLDivElement>(null);
    const menuButton = useRef<HTMLButtonElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen((open) => !open);
    }

    useGSAP(() => {
        gsap.set(".menu-overlay", {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        });
        gsap.set(".menu-link-item-holder", { y: 48, autoAlpha: 0 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 0.8,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "power3.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                autoAlpha: 1,
                duration: 0.55,
                stagger: 0.08,
                ease: "power3.out",
                delay: -0.3,
            });
    }, { scope: container });

    useEffect(() => {
        const timeline = tl.current;
        if (!timeline) return;

        if (isMenuOpen) {
            timeline.play();
        } else {
            timeline.reverse();
        }

        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuButton.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <div ref={container}>
            <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-5 py-3 text-foreground transition-colors duration-300 sm:px-8 sm:py-4 ${isMenuOpen ? "border-black/15 bg-orange-400 text-black" : "border-white/15 bg-background"}`}>
                <Link className="title text-2xl sm:text-3xl" href="/">Deivyson Santos</Link>
                <button
                    ref={menuButton}
                    type="button"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="menu-navigation"
                    onClick={toggleMenu}
                    className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center border border-current/30 transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                    <span className={`absolute left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 rotate-45" : "top-[calc(50%-7px)]"}`} />
                    <span className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`absolute left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 -rotate-45" : "top-[calc(50%+7px)]"}`} />
                </button>
            </header>

            <nav
                id="menu-navigation"
                aria-label="Navegação principal"
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
                className="menu-overlay fixed inset-0 z-40 flex h-dvh min-h-[100svh] flex-col overflow-y-auto bg-orange-400 px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            >
                <div className="menu-copy mx-auto flex w-full max-w-5xl flex-1 flex-col justify-between gap-10 py-6">
                    <div className="menu-links flex flex-col gap-1 sm:gap-2">
                        {menuLinks.map((link, index) => (
                            <div key={link.path} className="menu-link-item w-fit max-w-full overflow-hidden transition-transform duration-300 hover:translate-x-2 sm:hover:translate-x-4">
                                <div className="menu-link-item-holder">
                                    <Link
                                        className="title block text-5xl leading-[1.05] text-black sm:text-7xl md:text-8xl"
                                        href={link.path}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="mr-3 inline-block align-middle text-sm text-black/45 sm:text-base">0{index + 1}</span>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="menu-info flex flex-col gap-6 border-t border-black/20 pt-5 text-sm sm:flex-row sm:justify-between sm:gap-10">
                        <div className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
                            <a className="text-black transition-opacity hover:opacity-60" href="https://www.instagram.com/deivs_05" target="_blank" rel="noopener noreferrer">
                                Instagram ↗
                            </a>
                            <a className="text-black transition-opacity hover:opacity-60" href="https://www.linkedin.com/in/deivyson05/" target="_blank" rel="noopener noreferrer">
                                LinkedIn ↗
                            </a>
                            <a className="text-black transition-opacity hover:opacity-60" href="https://github.com/deivyson05" target="_blank" rel="noopener noreferrer">
                                GitHub ↗
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 text-black/70 sm:text-right">
                            <a href="mailto:deivysonrssantos@outlook.com">deivysonrssantos@outlook.com</a>
                            <span>Recife, Brasil</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}