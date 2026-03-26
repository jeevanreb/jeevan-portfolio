
import ExperienceGsap from "./Experience-gsap";

const Experience = () => {
  return (
    <ExperienceGsap>
      <main id="experience" className="relative z-60 bg-black text-white overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-10 pb-10 max-w-7xl mx-auto px-8 experience-hero">
          {/* Background Text */}
          <h3 className="absolute top-7 left-0 text-[14vw] font-black opacity-[0.04] pointer-events-none select-none">
            EXPERIENCE
          </h3>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-orange-400"></div>
              <p className="hero-label text-xs tracking-[0.4em] text-orange-400 uppercase">
                The Professional Journey
              </p>
            </div>

            <h2 className="text-[3rem] md:text-[7rem] lg:text-[8rem] leading-[0.85] font-black overflow-hidden">
              <span className="block hero-line">WORK</span>
              <span className="block hero-line bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h2>

            <p className="mt-8 text-neutral-400 max-w-xl">
              Building the next generation of digital products where{" "}
              <span className="text-white">engineering meets artistry</span>.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-7xl mx-auto px-8 space-y-20 experience-cards">
          {/* ITEM 01 */}
          <div className="relative grid lg:grid-cols-12 gap-10 experience-card">
            {/* Number */}
            <div className="hidden lg:block col-span-1">
              <span className="text-[6rem] font-black text-white/10">01</span>
            </div>

            {/* Card */}
            <div className="col-span-11">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-12 overflow-hidden group hover:-translate-y-2 transition duration-500">
                {/* Glow */}
                <div className="absolute right-0 top-0 w-[300px] h-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <div className="absolute top-6 right-6 border border-orange-400/30 text-orange-400 text-[10px] px-4 py-1 rounded-full tracking-widest">
                  JUL 2025 - PRESENT
                </div>

                <h3 className="text-4xl md:text-5xl font-bold">
                  SWIPEWIRE TECHNOLOGIES
                </h3>

                <p className="text-orange-400 mt-2 mb-10">Frontend Developer</p>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* LEFT */}
                  <div>
                    <ul className="space-y-4 text-neutral-400 text-sm">
                      <li>
                        • Built scalable SaaS features improving data retrieval
                        by 50%
                      </li>
                      <li>
                        • Developed GSAP animations increasing engagement by 40%
                      </li>
                      <li>• Created SVG path & scroll-based storytelling UI</li>
                      <li>
                        • Improved performance, maintainability & architecture
                      </li>
                    </ul>

                    <div className="flex gap-2 mt-6 flex-wrap">
                      {["React.js", "Next.js", "TypeScript", "GSAP", "React Query"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-3 py-1 rounded-full border border-white/10 bg-white/5"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* RIGHT - INNOVATION */}
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6">
                    <p className="text-white font-semibold mb-2">
                      ✦ Innovation
                    </p>
                    <p className="text-neutral-400 text-sm">
                      Delivered advanced GSAP-driven animations including
                      sequence and SVG path animations, building highly
                      interactive storytelling experiences with
                      performance-optimized frontend architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 02 */}
          <div className="relative grid lg:grid-cols-12 gap-10 experience-card">
            <div className="hidden lg:block col-span-1">
              <span className="text-[6rem] font-black text-white/10">02</span>
            </div>

            <div className="col-span-11">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-12 overflow-hidden group hover:-translate-y-2 transition duration-500">
                {/* Glow (same as Swipewire) */}
                <div className="absolute right-0 top-0 w-[300px] h-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <div className="absolute top-6 right-6 border border-white/20 text-neutral-400 text-[10px] px-4 py-1 rounded-full">
                  DEC 2021 - FEB 2025
                </div>

                <h3 className="text-4xl md:text-5xl font-bold">
                  ARVI INFO SOLUTIONS
                </h3>

                <p className="text-neutral-400 mt-2 mb-10">Software Engineer</p>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* LEFT */}
                  <ul className="space-y-4 text-neutral-400 text-sm">
                    <li>
                      • Built responsive UI with React.js ensuring cross-browser
                      compatibility
                    </li>
                    <li>
                      • Optimized API calls using debouncing reducing calls by
                      30%
                    </li>
                    <li>
                      • Improved database performance with optimized SQL queries
                    </li>
                    <li>
                      • Mentored junior developers and introduced modern
                      practices
                    </li>
                  </ul>

                  {/* RIGHT - INNOVATION */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <p className="text-white font-semibold mb-2">
                      ✦ Innovation
                    </p>
                    <p className="text-neutral-400 text-sm">
                      Improved system performance through API optimization and
                      efficient data handling, while introducing modern frontend
                      practices and mentoring developers to scale engineering
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          {/* <h2 className="text-4xl md:text-6xl font-black mb-6">
          LET&apos;S BUILD SOMETHING
        </h2> */}

          <button className="border-b-2 border-orange-400 pb-2">
            Available for opportunities
          </button>

          {/* <button className="border-b-2 border-orange-400 pb-2">
          START A PROJECT →
        </button> */}
        </section>
      </main>
    </ExperienceGsap>
  );
};

export default Experience;
