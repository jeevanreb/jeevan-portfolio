"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillGsap({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const totalTabs = 4;
            const screenWidth = 1248;

            // Set initial active tab color
            gsap.set("#tab-index-1", { color: "white" });

            // Pre-create color tweens so we don't spam gsap.to in onUpdate
            const tabEls = Array.from({ length: totalTabs }, (_, i) =>
                containerRef.current?.querySelector(`#tab-index-${i + 1}`)
            );

            let lastIndex = 1;

            const setActiveTab = (index: number) => {
                if (index === lastIndex) return;
                lastIndex = index;
                tabEls.forEach((el, i) => {
                    if (!el) return;
                    gsap.to(el, {
                        color: i + 1 === index ? "#FF7A3A" : "#59595b",
                        duration: 0.2,
                        overwrite: "auto",
                    });
                });
            };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#complete-banking-section",
                    start: "top top",
                    end: "+=700%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    refreshPriority: -2,
                    onUpdate: (self) => {
                        // Use ScrollTrigger progress instead of reading x from DOM
                        const rawIndex = self.progress * (totalTabs - 1);
                        const index = Math.round(rawIndex) + 1;
                        setActiveTab(Math.min(index, totalTabs));
                    },
                },
            });

            tl.to("#tab-line", { x: "-80px", ease: "none" }, 0);
            tl.to(".tab-screen", { x: -screenWidth * 3, ease: "none" }, 0);
        },
        { scope: containerRef } // ✅ scope fixes TSX/SSR context issues
    );

    return <div ref={containerRef}>{children}</div>;
}