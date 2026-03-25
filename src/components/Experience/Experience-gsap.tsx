"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceGsap = ({ children }: { children: React.ReactNode }) => {
    const ourOfferingRef = useRef(null);

    useGSAP(() => {
        const container = ourOfferingRef.current as HTMLElement | null;
        if (!container) return;

        let mm = gsap.matchMedia();

        // Desktop Animation
        mm.add("(min-width: 1024px)", () => {
            const totalCards = 3;
            const cardsContainer = container.querySelector("#cards-container");
            const cards = gsap.utils.toArray(".command-card", container) as HTMLElement[];
            const spans = gsap.utils.toArray(".offering-span", container) as HTMLElement[];

            if (!cardsContainer || cards.length === 0) return;

            // Set initial position - cards start from right side
            gsap.set(cardsContainer, { x: 200 });

            // Calculate scroll distance (similar to OurCapabilities)
            const cardWidth = cards[0].offsetWidth + 40; // card width + gap
            const maxScroll = -(cardWidth * (totalCards - 1));
            const totalDistance = Math.abs(maxScroll - 200); // Total distance to travel

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#offering-section-main",
                    pin: "#offering-section-main",
                    start: "top top",
                    end: `+=${totalDistance * 3}`, // Adjust multiplier for scroll speed (3x for smooth scrolling)
                    scrub: 1,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const activeIndex = Math.round(progress * (totalCards - 1));

                        // Update span styles based on active card
                        spans.forEach((span, index) => {
                            if (index === activeIndex) {
                                // Apply gradient text for active span
                                span.style.background = "linear-gradient(92deg, #f58e08ff -1.38%, rgba(106,90,205,0.7) 49.81%)";
                                span.style.webkitBackgroundClip = "text";
                                span.style.webkitTextFillColor = "transparent";
                                span.style.backgroundClip = "text";

                                gsap.to(span, {
                                    borderBottomColor: "#f58e08ff",
                                    borderBottomWidth: "2px",
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            } else {
                                // Remove gradient and set normal color by resetting inline styles
                                span.style.background = "";
                                span.style.webkitBackgroundClip = "";
                                span.style.webkitTextFillColor = "";
                                span.style.backgroundClip = "";

                                gsap.to(span, {
                                    color: "rgba(255, 255, 255, 0.6)",
                                    borderBottomColor: "transparent",
                                    borderBottomWidth: "2px",
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            }
                        });
                    },
                },
            });

            // Animate cards horizontally
            tl.to(cardsContainer, {
                x: maxScroll,
                ease: "none",
                duration: 1,
            });
        });

        // Mobile Animation
        mm.add("(max-width: 1023px)", () => {
            const mobileCards = gsap.utils.toArray(".mobile-card") as HTMLElement[];
            if (mobileCards.length === 0) return;

            mobileCards.forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
        });

        return () => mm.revert(); // clean up matchMedia

    }, { scope: ourOfferingRef });

    return <div ref={ourOfferingRef}>{children}</div>;
};

export default ExperienceGsap;