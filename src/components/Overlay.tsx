"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Overlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const text1Line1Ref = useRef<HTMLSpanElement>(null);
  const text1Line2Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);

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

    // Premium Initial State with Blur and Scale
    gsap.set([text1Line1Ref.current, text1Line2Ref.current, text2Ref.current], {
      opacity: 0,
      y: 80,
      filter: "blur(12px)",
      scale: 0.95
    });

    // Section 1: Top Left Text -> Staggered Entrance
    tl.to(text1Line1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.15, ease: "power3.out" }, 0.0)
      .to(text1Line2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.15, ease: "power3.out" }, 0.05);

    // Fade out Top left elements
    tl.to([text1Line1Ref.current, text1Line2Ref.current], { opacity: 0, y: -80, filter: "blur(8px)", scale: 1.05, duration: 0.15, ease: "power3.in" }, 0.35);

    // Section 2: Bottom Right Bio -> Smooth Premium Entrance
    tl.to(text2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.2, ease: "power3.out" }, 0.3)
      .to(text2Ref.current, { opacity: 0, y: -80, filter: "blur(8px)", scale: 1.05, duration: 0.2, ease: "power3.in" }, 0.75);

  }, { scope: overlayRef });

  return (
    <div ref={overlayRef} className="absolute inset-0 z-10 pointer-events-none">
      {/* Top Left Text */}
      <h1
        className="absolute top-24 left-8 md:top-32 md:left-16 lg:top-40 lg:left-24 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl text-left"
      >
        <span ref={text1Line1Ref} className="block origin-left drop-shadow-2xl">
          Hi I'm
        </span>
        <span ref={text1Line2Ref} className="text-gray-400 text-2xl md:text-3xl lg:text-5xl mt-2 block origin-left drop-shadow-lg">
          Jeevan Rebeiro
        </span>
      </h1>

      {/* Bottom Right Text */}
      <div className="absolute bottom-24 right-8 md:bottom-32 md:right-16 lg:bottom-10 lg:right-2 flex justify-start">
        <p
          ref={text2Ref}
          className="text-base md:text-lg lg:text-xl font-normal tracking-wide text-gray-300 leading-relaxed text-left drop-shadow-xl max-w-2xl p-6 md:p-4 rounded-2xl "
        >
          Full Stack Developer | AI Enthusiast</p>
      </div>
    </div>
  );
}
