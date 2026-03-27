"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Overlay from "./Overlay";
import LoadingScreen from "./LoadingScreen";

const FRAME_COUNT = 120; // 0 to 119 bounds

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ index: 0 });

  const [loadProgress, setLoadProgress] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderDone = useCallback(() => {
    setLoaderDone(true);
  }, []);

  useGSAP(() => {
    // Ensure GSAP does NOT override native touch scrolling on mobile
    ScrollTrigger.config({ ignoreMobileResize: true });
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

      const scale = Math.max(cw / imgW, ch / imgH);
      const w = imgW * scale;
      const h = imgH * scale;

      const x = (cw - w) / 2;
      const y = (ch - h) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    };

    const resizeCanvas = () => {
      // On mobile, visualViewport gives the true visible height
      // (excludes browser chrome / address bar) preventing ScrollTrigger mismatches
      const vh =
        (typeof window !== "undefined" && window.visualViewport)
          ? window.visualViewport.height
          : window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = vh;
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
      // Add q_auto,f_auto,w_1920 to Cloudinary URL for faster loading & compression
      img.src = `https://res.cloudinary.com/dty6kbzpt/image/upload/q_auto,f_auto,w_1920/v1774608162/frame_${paddedIndex}_delay-0.066s.webp`;
      
      const handleImageReady = () => {
        loadedImages++;
        const pct = Math.round((loadedImages / FRAME_COUNT) * 100);
        setLoadProgress(pct);

        // Ensure we draw the first frame exactly when frame 0 is loaded, 
        // to avoid a black screen if another frame loads before frame 0.
        if (i === 0) {
          renderFrame(0);
        }
        
        if (loadedImages === FRAME_COUNT) {
          setLoadComplete(true);
          ScrollTrigger.refresh();
          // Render current index again just to be sure it's visible as soon as loader finishes
          renderFrame(frameRef.current.index);
        }
      };

      img.onload = handleImageReady;
      img.onerror = handleImageReady; // Prevent loading screen from hanging if an image fails
      imagesRef.current.push(img);
    }

    // GSAP ScrollTrigger syncing scroll to image index
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%",
      pin: true,
      pinSpacing: true,
      // anticipatePin removed — it intercepts touch events on mobile causing a "hang"
      scrub: 1,
      onUpdate: (self) => {
        const progress = Math.min(Math.max(self.progress, 0), 1);
        const nextFrame = Math.round(progress * (FRAME_COUNT - 1));

        if (frameRef.current.index !== nextFrame) {
          frameRef.current.index = nextFrame;
          requestAnimationFrame(() => renderFrame(nextFrame));
        }
      },
    });

    // Also listen to visualViewport resize (mobile address bar show/hide)
    const vpResizeHandler = () => resizeCanvas();
    window.visualViewport?.addEventListener("resize", vpResizeHandler);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.visualViewport?.removeEventListener("resize", vpResizeHandler);
    };
  }, { scope: containerRef });

  return (
    <>
      {/* Loading Screen — sits above everything until done */}
      {!loaderDone && (
        <LoadingScreen
          progress={loadProgress}
          isComplete={loadComplete}
          onDone={handleLoaderDone}
        />
      )}

      <div
        ref={containerRef}
        className="scrolly-container relative w-full h-screen bg-[#121212] overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
        <Overlay />
      </div>
    </>
  );
}
