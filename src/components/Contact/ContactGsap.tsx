"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ContactGsap({ children }: { children: React.ReactNode }) {
  const ContactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      const marquees = gsap.utils.toArray<HTMLElement>(".marquee-track");

      marquees.forEach((marquee) => {
        const content = marquee.querySelector(".marquee-content") as HTMLElement;
        if (!content) return;

        const totalWidth = content.scrollWidth;

        // 👉 reset position
        gsap.set(content, { x: 0 });

        gsap.to(content, {
          x: totalWidth, // move full width
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const value = parseFloat(x);
              return `${value % totalWidth}px`;
            },
          },
        });
      });

    }, ContactRef);

    return () => ctx.revert();
  }, []);

  return <div ref={ContactRef}>{children}</div>;
}