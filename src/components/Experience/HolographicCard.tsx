// components/HolographicCard.tsx
"use client";

import React from "react";

type CardProps = {
    card: {
        id: number;
        designation: string;
        period: string;
        description: string;
    };
};

export default function HolographicCard({ card }: CardProps) {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -15;
        const rotateY = ((x / rect.width) - 0.5) * 15;

        el.style.setProperty("--rotateX", `${rotateX}deg`);
        el.style.setProperty("--rotateY", `${rotateY}deg`);
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
    };

    const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        el.style.setProperty("--rotateX", `0deg`);
        el.style.setProperty("--rotateY", `0deg`);
    };

    return (
        <div
            className="command-card relative h-[45vh] w-[45vw] flex-shrink-0 p-[0.8px] shadow-lg md:h-[50vh] md:w-[35vw] cursor-pointer hover:scale-98 transition-transform duration-200 ease-out"
            style={{
                perspective: "1000px"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
        >
            <div
                className="flex h-full w-full flex-col justify-between rounded-tl-[26px] rounded-tr-[58px] rounded-br-[26px] rounded-bl-[58px] border border-white/20 p-8 backdrop-blur-xl relative overflow-hidden group transition-transform duration-200 ease-out"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(13, 13, 14, 0.95) 0%, rgba(255, 140, 66, 0.8) 30%, rgba(106, 90, 205, 0.7) 70%)",
                    transform: "rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg))",
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Holographic Glare Effect */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                    style={{
                        background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.4) 0%, transparent 50%)"
                    }}
                />

                {/* Top Section */}
                <div className="flex flex-col gap-3 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-xl font-semibold tracking-wide text-white md:text-2xl drop-shadow-md">
                        {card.designation}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-widest text-white/60 md:text-sm">
                        {card.period}
                    </span>
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent relative z-10" style={{ transform: "translateZ(20px)" }} />

                {/* Description */}
                <p className="text-sm leading-relaxed font-light text-white/80 md:text-base relative z-10" style={{ transform: "translateZ(40px)" }}>
                    {card.description}
                </p>
            </div>
        </div>
    );
}