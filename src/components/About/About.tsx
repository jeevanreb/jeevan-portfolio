"use client";

import Image from "next/image";
import profile from "../About/_assets/jeev.png"
import edu from "../About/_assets/education.svg"
import AboutGsap from "./AboutGsap";
const About = () => {
  return (
    <AboutGsap>
      <section id="about" className="relative w-full h-full lg:h-screen bg-[#0e0e0e] text-white z-60 flex items-center">

        {/* Inner Container */}
        <div className="w-full max-w-7xl mx-auto py-2 px-6 md:px-10 lg:px-16">

          {/* Header */}
          <div className="mb-12 mt-2 text-center md:text-left animate-up">
            <span className="text-[#FF7A3A] tracking-[0.2em] uppercase text-xs font-bold">
              The Human Behind The Code
            </span>

            <h1 className="mt-4 text-5xl md:text-4xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-[#FF7A3A] to-[#A78BFA] bg-clip-text bg-clip-text text-transparent">
                Experiences with Soul.
              </span>
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="lg:col-span-5 animate-up">
              <div className="relative group">

                {/* Glow */}
                <div className="absolute -inset-6 bg-[#FF7A3A]/20 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A3A]/10 to-[#8B5CF6]/10 rounded-xl"></div>

                <div className="relative h-[420px] md:h-[480px] rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl">
                  <Image
                    src={profile}
                    alt="Profile"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-lg p-4 border border-white/10 rounded-lg flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A3A]/20 flex items-center justify-center">
                      {/* <span className="material-symbols-outlined text-[#FF7A3A]">
                      school
                    </span> */}
                      <Image
                        src={edu.src}
                        width={50}
                        height={50}
                        alt="edu"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-widest">
                        Education
                      </p>
                      <p className="text-sm font-bold">
                        B.E., SMVITM (2021)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-7 space-y-10">

              {/* Professional Summary */}
              <section>
                <div className="flex items-center gap-4 mb-5 animate-up">
                  <div className="h-px w-10 bg-[#FF7A3A]"></div>
                  <h2 className="text-2xl font-semibold">
                    Professional Summary
                  </h2>
                </div>

                <div className="space-y-4 text-white/70 leading-relaxed animate-up">
                  <p>
                    Results-driven Frontend Developer with 4+ years of experience designing and developing scalable, high-performance web applications using{" "}
                    <span className="text-white font-semibold">
                      React.js, Next.js, and TypeScript
                    </span>.
                  </p>

                  <p>
                    Strong expertise in frontend architecture, state management, API integration, performance optimization, and advanced UI animations using{" "}
                    <span className="text-[#FF7A3A] font-semibold">
                      GSAP
                    </span>. Proven ability to collaborate with cross-functional teams and deliver production-ready SaaS solutions.
                  </p>
                </div>
              </section>

              {/* Core Expertise */}
              <section>
                <div className="flex items-center gap-4 mb-5 animate-up">
                  <div className="h-px w-10 bg-[#8B5CF6]"></div>
                  <h2 className="text-2xl font-semibold">
                    Core Expertise
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-up">

                  <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 hover:border-[#FF7A3A]/40 transition-all">
                    <h4 className="text-[#FF7A3A] text-xs uppercase tracking-widest mb-2">
                      Frontend Stack
                    </h4>
                    <p className="text-white/80 text-sm">
                      React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, React Three Fiber
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 hover:border-[#8B5CF6]/40 transition-all">
                    <h4 className="text-[#A78BFA] text-xs uppercase tracking-widest mb-2">
                      Architecture & APIs
                    </h4>
                    <p className="text-white/80 text-sm">
                      REST APIs, JWT Auth, System Design, Web Performance Optimization
                    </p>
                  </div>

                </div>
              </section>

              {/* CTA */}
              <div className="pt-2 animate-up">
                <button className="group flex items-center mx-auto gap-3 text-white font-semibold text-lg hover:text-[#FF7A3A] transition-all">
                  Let's build something legendary
                  {/* <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span> */}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </AboutGsap>
  );
};

export default About;