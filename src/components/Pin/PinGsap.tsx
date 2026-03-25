"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PinGsap = ({ children }: { children: React.ReactNode }) => {
    const piningComp = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = piningComp.current;
        if (!container) return;

        const about = container.querySelector("#about-section") as HTMLElement | null;
        const experience = container.querySelector("#experience-section") as HTMLElement | null;

        if (!about || !experience) return;

        // ✅ PIN ABOUT SECTION
        ScrollTrigger.create({
            trigger: about,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
        });

        // ✅ EXPERIENCE ANIMATION
        gsap.fromTo(
            experience,
            {
                y: "100%",
                borderTopLeftRadius: "40px",
                borderTopRightRadius: "40px",
            },
            {
                y: "0%",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                ease: "none",
                scrollTrigger: {
                    trigger: experience,
                    start: "top bottom",
                    end: "top top",
                    scrub: 0.8,
                },
            }
        );
    }, { scope: piningComp });

    return <div ref={piningComp}>{children}</div>;
};

export default PinGsap;