"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceGsap = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context((self) => {
        const q: any = self.selector;

        // =========================
        // HERO FINAL FIX
        // =========================

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: q(".experience-hero"),
            start: "top 80%",
            toggleActions: "play none none reset",
            invalidateOnRefresh: true, // ✅ VERY IMPORTANT
          },
        });

        tl
          // Background text
          .from(q(".experience-hero h3"), {
            y: 60,
            opacity: 0,
            filter: "blur(20px)",
            duration: 1,
          })

          // Label
          //   .from(
          //     q(".hero-label"),
          //     {
          //       x: -30,
          //       opacity: 0,
          //       filter: "blur(6px)",
          //       duration: 0.6,
          //     },
          //     "-=0.7"
          //   )

          // Main text (FIXED)
          .fromTo(
            q(".hero-line"),
            {
              y: 120,
              opacity: 0,
              filter: "blur(12px)",
              scale: 0.98,
            },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              stagger: 0.15,
              duration: 1.2,
            },
            "-=0.5",
          )

          // Paragraph (FIXED)
          .fromTo(
            q(".experience-hero p:last-child"),
            {
              y: 40,
              opacity: 0,
              filter: "blur(8px)",
            },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
            },
            "-=0.8",
          );
        // =========================
        // CARDS (MAIN FIX)
        // =========================
        const cards = q(".experience-card");

        cards.forEach((card: any) => {
          const inner = card.querySelectorAll("h3, p, li, span");

          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            scale: 0.96,
            duration: 0.9,
            ease: "power3.out",
          });

          gsap.from(inner, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
          });
        });

        // =========================
        // NUMBERS
        // =========================
        gsap.from(q(".text-\\[6rem\\]"), {
          scrollTrigger: {
            trigger: q(".experience-cards"),
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        });

        // =========================
        // REFRESH (IMPORTANT)
        // =========================
        ScrollTrigger.refresh();
      }, container);

      return () => ctx.revert();
    },
    { scope: container },
  );

  return <div ref={container}>{children}</div>;
};

export default ExperienceGsap;
