"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for hamburger lines
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);

  // Ref for the pill header wrapper (used for scroll-based hide/show)
  const headerWrapRef = useRef<HTMLDivElement>(null);

  // Refs for the full-screen overlay
  const overlayRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const menuFooterRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: overlayRef });

  // ── Hide header after ScrollyCanvas pin ends (when #about enters view) ──
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready before querying #about
    const aboutEl = document.getElementById("about");
    if (!aboutEl || !headerWrapRef.current) return;

    ScrollTrigger.create({
      trigger: aboutEl,
      start: "top 80%",   // header fades just before #about fully enters
      end: "top top",
      onEnter: () => {
        gsap.to(headerWrapRef.current, {
          y: -80,
          opacity: 0,
          duration: 0.45,
          ease: "power3.in",
          pointerEvents: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerWrapRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          clearProps: "pointerEvents",
        });
      },
    });
  }, []);

  const openMenu = contextSafe(() => {
    setIsOpen(true);

    // Morph hamburger → X
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.4 } });
    tl.to(line2Ref.current, { opacity: 0, scaleX: 0, duration: 0.2, ease: "power2.in" }, 0)
      .to(line1Ref.current, { attr: { y1: 12, y2: 12 }, duration: 0.3 }, 0.05)
      .to(line3Ref.current, { attr: { y1: 12, y2: 12 }, duration: 0.3 }, 0.05)
      .to(line1Ref.current, { rotate: 45, transformOrigin: "50% 50%", duration: 0.35 }, 0.3)
      .to(line3Ref.current, { rotate: -45, transformOrigin: "50% 50%", duration: 0.35 }, 0.3);

    // Overlay entrance
    gsap.set(overlayRef.current, { display: "flex" });
    gsap.fromTo(
      overlayRef.current,
      { clipPath: "circle(0% at calc(100% - 40px) 28px)", opacity: 1 },
      {
        clipPath: "circle(150% at calc(100% - 40px) 28px)",
        duration: 0.65,
        ease: "power4.out",
      }
    );

    // Stagger nav links from bottom
    const links = navLinksRef.current?.querySelectorAll("li");
    if (links) {
      gsap.fromTo(
        links,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 0.55,
          ease: "power3.out",
          delay: 0.25,
        }
      );
    }

    // Footer fade in
    gsap.fromTo(
      menuFooterRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.55 }
    );
  });

  const closeMenu = contextSafe(() => {
    // Morph X → hamburger
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.35 } });
    tl.to(line1Ref.current, { rotate: 0, transformOrigin: "50% 50%", duration: 0.3, ease: "power2.in" }, 0)
      .to(line3Ref.current, { rotate: 0, transformOrigin: "50% 50%", duration: 0.3, ease: "power2.in" }, 0)
      .to(line1Ref.current, { attr: { y1: 6, y2: 6 }, duration: 0.3 }, 0.25)
      .to(line3Ref.current, { attr: { y1: 18, y2: 18 }, duration: 0.3 }, 0.25)
      .to(line2Ref.current, { opacity: 1, scaleX: 1, duration: 0.3, ease: "back.out(2)" }, 0.45);

    // Collapse overlay
    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at calc(100% - 40px) 28px)",
      duration: 0.5,
      ease: "power4.in",
      onComplete: () => {
        setIsOpen(false);
        gsap.set(overlayRef.current, { display: "none" });
      },
    });
  });

  const toggle = () => (isOpen ? closeMenu() : openMenu());

  const handleScroll = (id: string) => {
    closeMenu();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* ─── Desktop + Mobile pill header ─── */}
      <div ref={headerWrapRef} className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] lg:w-[50%] z-[200]">
        <header className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-6 flex justify-between items-center shadow-2xl">

          {/* Logo / Avatar — hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Image
              src="/jeev.jpg"
              alt="Jeevan Rebeiro"
              width={34}
              height={34}
              priority
              className="rounded-full object-cover border border-white/20"
            />
          </div>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 tracking-wide items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* Download Resume */}
            <a
              href="/jeevan_rebeiro_sde_resume.pdf"
              download="Jeevan_Rebeiro_Resume.pdf"
              className="flex items-center gap-1.5 bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-white/85 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </nav>

          {/* ── Mobile: logo + hamburger ── */}
          <div className="flex md:hidden items-center gap-3 w-full justify-between">
            {/* Logo avatar */}
            <Image
              src="/jeev.jpg"
              alt="Jeevan Rebeiro"
              width={32}
              height={32}
              priority
              className="rounded-full object-cover border border-white/20"
            />

            {/* Hamburger button */}
            <button
              id="hamburger-btn"
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="relative z-[300] w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line ref={line1Ref} x1="4" y1="6" x2="20" y2="6" />
                <line ref={line2Ref} x1="4" y1="12" x2="20" y2="12" />
                <line ref={line3Ref} x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* ─── Full-Screen Mobile Overlay Menu ─── */}
      <div
        ref={overlayRef}
        style={{ display: "none", clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
        className="fixed inset-0 z-[150] bg-[#0a0a0a] flex flex-col px-8 pt-28 pb-10 overflow-hidden"
        aria-hidden={!isOpen}
      >
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF7A3A]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-56 h-56 bg-[#8B5CF6]/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Thin orange accent line */}
        <div className="absolute top-[72px] left-8 right-8 h-px bg-white/5" />

        {/* Nav links */}
        <ul ref={navLinksRef} className="flex flex-col gap-2 mt-4">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <button
                id={`mobile-nav-${item.id}`}
                onClick={() => handleScroll(item.id)}
                className="group flex items-center gap-4 w-full text-left py-4 border-b border-white/5 hover:border-[#FF7A3A]/30 transition-all"
              >
                <span className="text-[#FF7A3A]/40 text-xs font-mono tracking-widest group-hover:text-[#FF7A3A] transition-colors">
                  0{i + 1}
                </span>
                <span className="text-4xl font-black text-white/80 group-hover:text-white tracking-tight transition-colors">
                  {item.label}
                </span>
                <svg
                  className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#FF7A3A]"
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {/* Footer area */}
        <div ref={menuFooterRef} className="mt-auto space-y-6">
          {/* Resume CTA */}
          <a
            href="/jeevan_rebeiro_sde_resume.pdf"
            download="Jeevan_Rebeiro_Resume.pdf"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-[#FF7A3A] hover:text-white transition-all duration-300 text-sm tracking-wide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/jeevan-rebeiro-7682ba1ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://github.com/jeevanreb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              GitHub
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.instagram.com/jeevan_rebeiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              Instagram
            </a>
          </div>

          <p className="text-center text-white/20 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Jeevan Rebeiro
          </p>
        </div>
      </div>
    </>
  );
}
