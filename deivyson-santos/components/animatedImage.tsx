"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function AnimatedImage({
  src,
  alt,
  className = "",
  delay = 0,
}: AnimatedImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        image,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 0%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    media.add("(max-width: 1023px)", () => {
      gsap.fromTo(
        image,
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => media.revert();
  }, [delay]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
    />
  );
}