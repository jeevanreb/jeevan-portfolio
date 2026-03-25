"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119 bounds

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ index: 0 });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Object-fit Cover logic
    const renderFrame = (index: number) => {
      if (!canvas || !ctx) return;
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const imgW = img.width;
      const imgH = img.height;

      // Ensure proper scaling and centering
      const scale = Math.max(cw / imgW, ch / imgH);
      const w = imgW * scale;
      const h = imgH * scale;

      const x = (cw - w) / 2;
      const y = (ch - h) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameRef.current.index);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Preload image sequence into memory
    let loadedImages = 0;
    imagesRef.current = []; // Clear array for Dev mode Strict Mode double execution
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          // Render first available frame
          renderFrame(0);
        }
        if (loadedImages === FRAME_COUNT) {
          ScrollTrigger.refresh();
        }
      };
      imagesRef.current.push(img);
    }

    // GSAP ScrollTrigger syncing scroll to image index
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%", // 4 screens worth of scroll duration
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 1, // Soft scrubbing for smoother look
      onUpdate: (self) => {
        const progress = Math.min(Math.max(self.progress, 0), 1);
        const nextFrame = Math.round(progress * (FRAME_COUNT - 1));

        if (frameRef.current.index !== nextFrame) {
          frameRef.current.index = nextFrame;
          requestAnimationFrame(() => renderFrame(nextFrame));
        }
      },
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container relative w-full h-screen bg-[#121212] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
      <Overlay />
    </div>
  );
}
