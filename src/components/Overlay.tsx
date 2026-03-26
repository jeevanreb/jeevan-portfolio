"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Overlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const text1Line1Ref = useRef<HTMLSpanElement>(null);
  const text1Line2Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = overlayRef.current?.parentElement;
    if (!trigger) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=400%",
        scrub: 1,
      },
    });

    // Initial state
    gsap.set(
      [text1Line1Ref.current, text1Line2Ref.current, text2Ref.current],
      {
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
        scale: 0.95,
      }
    );

    // Top Left Entry
    tl.to(
      text1Line1Ref.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.15,
        ease: "power3.out",
      },
      0.0
    ).to(
      text1Line2Ref.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.15,
        ease: "power3.out",
      },
      0.05
    );

    // Fade out top text
    tl.to(
      [text1Line1Ref.current, text1Line2Ref.current],
      {
        opacity: 0,
        y: -80,
        filter: "blur(8px)",
        scale: 1.05,
        duration: 0.15,
        ease: "power3.in",
      },
      0.35
    );

    // Bottom Right Entry
    tl.to(
      text2Ref.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.2,
        ease: "power3.out",
      },
      0.3
    ).to(
      text2Ref.current,
      {
        opacity: 0,
        y: -80,
        filter: "blur(8px)",
        scale: 1.05,
        duration: 0.2,
        ease: "power3.in",
      },
      0.75
    );
    // Fade out scroll indicator as soon as user starts scrolling
    gsap.to(scrollIndicatorRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.2,
      ease: "power2.in",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=5%",
        scrub: true,
      },
    });
  }, { scope: overlayRef });

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      {/* Top Left Content */}
      <div className="absolute top-24 left-8 md:top-32 md:left-16 lg:top-40 lg:left-24 text-left drop-shadow-2xl">
        <span
          ref={text1Line1Ref}
          className="block text-sm tracking-[0.3em] text-[#ff9159] uppercase mb-4"
        >
          Hi I'm
        </span>

        <div
  ref={text1Line2Ref}
  className="leading-[0.85] font-black text-5xl md:text-7xl lg:text-[90px] overflow-hidden"
>
  <span className="block text-white">Jeevan</span>
  
  <span className="block bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
    Rebeiro
  </span>
</div>
      </div>

      {/* Bottom Right Content (PRO FIX) */}
      <div
        ref={text2Ref}
        className="absolute bottom-0 right-8 md:right-16 lg:right-2 pb-10 md:pb-16 flex flex-col items-end gap-2 text-right"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Specializing in
        </span>

        <div className="flex items-center gap-2">
          <span className="text-white font-medium">
            Full Stack Developer
          </span>
          <span className="text-[#ff9159]">|</span>
          <span className="text-white font-medium">
            AI Enthusiast
          </span>
        </div>
      </div>
      {/* Scroll Indicator — centered bottom */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-5 md:bottom-8 left-20 md:left-30 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* Mouse outline */}
        <div
          style={{
            width: 24,
            height: 38,
            border: "2px solid #8a66f4",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          {/* Bouncing dot */}
          <div
            style={{
              width: 4,
              height: 8,
              background: "#ff9159",
              borderRadius: 2,
              animation: "scrollBounce 1.4s ease-in-out infinite",
            }}
          />
        </div>
       <span
  style={{
    fontSize: 9,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
  }}
  className="bg-gradient-to-r from-[#734de5] to-[#d1571e] bg-clip-text text-transparent"
>
  Scroll to explore
</span>
      </div>

      {/* Bounce keyframe */}
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}