"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutGsap = ({ children }: { children: React.ReactNode }) => {
    const aboutref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = aboutref.current;
        if (!container) return;

        const elements = gsap.utils.toArray<HTMLElement>(
            container.querySelectorAll(".animate-up")
        );

        gsap.from(elements, {
            y: 100,              // ⬆️ slightly more distance (feels smoother)
            opacity: 0,
            duration: 1.2,       // 🐢 slower animation
            ease: "power3.out",
            stagger: 0.15,       // 🧠 better spacing between items
            delay: 0.2,          // ⏳ small delay after trigger
            scrollTrigger: {
                trigger: container,
                start: "top 65%",  // 🎯 trigger later (not too early)
                toggleActions: "play none none reset"
            },
        });
    }, { scope: aboutref });

    return <div ref={aboutref}>{children}</div>;
};

export default AboutGsap;