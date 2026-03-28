"use client";

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative z-60 min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      {/* TOP MARQUEE — scrolls right to left */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden py-2 mt-5">
        <div className="top-marquee-track flex whitespace-nowrap">
          {Array(4)
            .fill([
              "Innovation",
              "Precision",
              "Trust",
              "Collaborate",
              "Excellence",
            ])
            .flat()
            .map((item, i) => (
              <React.Fragment key={i}>
                <span className="mx-6 text-lg md:text-2xl font-semibold text-white/20 uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-[#ff9159]">✦</span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-12 py-2 relative">
        {/* Light Glow */}
        <div className="absolute top-24 -right-24 w-96 h-96 bg-[#ff9159]/10 rounded-full blur-[120px]" />

        {/* Heading */}
        <h1 className="text-6xl font-black tracking-tight leading-[0.8] opacity-90 mb-10">
          CONTACT
        </h1>

        {/* Contact Grid */}
        <div className="border-t border-white/10">
          {/* Email */}
          <div className="grid md:grid-cols-12 py-14 md:py-10 border-b border-white/10 group hover:bg-white/5 transition">
            <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#ff9159]">
              E-MAIL
            </span>
            <a
              href="mailto:jeevanrebeiro@gmail.com"
              className="md:col-span-9 mt-4 md:mt-0 text-2xl md:text-3xl lg:text-5xl font-bold hover:text-[#ff9159] transition break-all"
            >
              jeevanrebeiro@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="grid md:grid-cols-12 py-14 md:py-10 border-b border-white/10 group hover:bg-white/5 transition">
            <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#ff9159]">
              PHONE
            </span>
            <a
              href="tel:+919611716270"
              className="md:col-span-9 mt-4 md:mt-0 text-2xl md:text-3xl lg:text-5xl font-bold hover:text-[#ff9159] transition"
            >
              +91 9611716270
            </a>
          </div>

          {/* Social */}
          <div className="grid md:grid-cols-12 py-14 md:py-10 group hover:bg-white/5 transition">
            <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#ff9159]">
              SOCIAL
            </span>
            <div className="md:col-span-9 mt-4 md:mt-0 flex flex-wrap gap-6 text-xl md:text-3xl font-bold">
              <a
                href="https://www.linkedin.com/in/jeevan-rebeiro-7682ba1ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff9159] transition"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/jeevanreb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff9159] transition"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.instagram.com/jeevan_rebeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff9159] transition"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM MARQUEE — scrolls left to right */}
      <div className="w-full border-y border-white/10 py-6 overflow-hidden">
        <div className="bottom-marquee-track flex whitespace-nowrap">
          {Array(3)
            .fill([
              "LET'S BUILD SOMETHING LEGENDARY",
              "✦",
              "IMAGINATION TO REALITY",
              "✦",
            ])
            .flat()
            .map((item, i) => (
              <span
                key={i}
                className={`px-6 text-4xl md:text-6xl font-black uppercase ${item === "✦" ? "text-[#ff9159]" : "text-white/10"
                  }`}
              >
                {item}
              </span>
            ))}
        </div>
      </div>

      <style jsx>{`
        /* TOP marquee: right → left */
        .top-marquee-track {
          display: flex;
          width: max-content;
          animation: scrollRightToLeft 20s linear infinite;
        }

        /* BOTTOM marquee: left → right */
        .bottom-marquee-track {
          display: flex;
          width: max-content;
          animation: scrollLeftToRight 25s linear infinite;
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
