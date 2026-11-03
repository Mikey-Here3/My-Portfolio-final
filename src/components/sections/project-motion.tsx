"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const page = canvas?.closest<HTMLElement>("[data-project-page]");
    const context = canvas?.getContext("2d");

    if (!canvas || !page || !context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let tick = 0;

    const dots = Array.from({ length: 34 }, (_, i) => ({
      x: ((i * 37) % 97) / 97,
      y: ((i * 61) % 89) / 89,
      radius: 0.7 + (i % 3) * 0.35,
      phase: i * 0.8,
    }));

    const resize = () => {
      const rect = page.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = Math.max(page.scrollHeight, window.innerHeight);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      dots.forEach((dot, index) => {
        const drift = reduceMotion ? 0 : Math.sin(tick * 0.012 + dot.phase) * 10;
        const x = dot.x * width + drift;
        const y = dot.y * height;
        context.beginPath();
        context.arc(x, y, dot.radius, 0, Math.PI * 2);
        context.fillStyle =
          index % 4 === 0
            ? "rgba(36, 75, 255, 0.16)"
            : "rgba(23, 34, 54, 0.09)";
        context.fill();
      });
    };

    const animate = () => {
      tick += 1;
      draw();
      frameId = requestAnimationFrame(animate);
    };

    resize();

    if (!reduceMotion) {
      frameId = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(page);

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        page,
      );

      // Avoid GSAP "target not found" warnings on pages with no reveal markers.
      if (reveals.length > 0 && !reduceMotion) {
        reveals.forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              delay: index === 0 ? 0 : 0.02,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }

      const parallaxItems = gsap.utils.toArray<HTMLElement>(
        "[data-parallax]",
        page,
      );

      if (parallaxItems.length > 0 && !reduceMotion) {
        parallaxItems.forEach((element) => {
          gsap.to(element, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    }, page);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-80"
    />
  );
}
