"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  progress: number; // 0 to 100
  isComplete: boolean;
  onDone: () => void;
}

export default function LoadingScreen({
  progress,
  isComplete,
  onDone,
}: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const [displayProgress, setDisplayProgress] = useState(0);
  const hasExited = useRef(false);

  // Lock body scroll while the loader is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Animate the displayed number smoothly
  useEffect(() => {
    const obj = { val: displayProgress };
    gsap.to(obj, {
      val: progress,
      duration: 0.4,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayProgress(Math.floor(obj.val));
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  // Animate progress bar width
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [progress]);

  // Exit animation once complete
  useEffect(() => {
    if (isComplete && !hasExited.current) {
      hasExited.current = true;
      const tl = gsap.timeline({ onComplete: onDone });
      tl.to(progressBarRef.current, {
        width: "100%",
        duration: 0.3,
        ease: "power2.inOut",
      })
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
          },
          "+=0.2"
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-10 w-full px-8 max-w-lg">
        {/* Name / Brand */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-3">
            Loading...
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Jeevan Rebeiro
          </h1>
        </div>

        {/* Progress block */}
        <div className="w-full flex flex-col gap-3">
          {/* Bar track */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full rounded-full"
              style={{
                width: "0%",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.9) 100%)",
                boxShadow: "0 0 12px rgba(255,255,255,0.5)",
              }}
            />
          </div>

          {/* Percentage */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/25">
              Initializing
            </span>
            <span
              ref={progressTextRef}
              className="text-sm font-semibold tabular-nums text-white/70"
            >
              {displayProgress}%
            </span>
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-8 left-8 text-[9px] uppercase tracking-[0.3em] text-white/15">
        Portfolio — 2025
      </div>
      <div className="absolute bottom-8 right-8 text-[9px] uppercase tracking-[0.3em] text-white/15">
        Full Stack Developer
      </div>
    </div>
  );
}
