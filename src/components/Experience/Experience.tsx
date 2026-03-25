import React from "react";
import Image from "next/image";
import ExperienceGsap from "./Experience-gsap";
import HolographicCard from "./HolographicCard";


const Experience = () => {
  const commandData = [
    {
      id: 1,
      designation: "Frontend Developer",
      period: "Jul 2025 - Present",
      description:
        "Leading development of scalable SaaS frontend features using React.js, TypeScript, and React Query. Implementing advanced GSAP animations, improving performance, and enhancing user engagement through interactive UI and optimized data handling.",
    },
    {
      id: 2,
      designation: "Software Engineer",
      period: "Dec 2021 - Feb 2025",
      description:
        "Built and maintained high-performance frontend solutions aligned with business needs. Optimized API calls using debouncing, improved database efficiency with SQL, and collaborated with cross-functional teams to deliver scalable, production-ready features.",
    },
    {
      id: 3,
      designation: "Frontend Web Developer",
      period: "Jun 2021 - Jul 2021 (Internship)",
      description:
        "Developed responsive and scalable web applications using React.js, JavaScript, HTML, and CSS. Focused on cross-browser compatibility, performance optimization, and delivering seamless user experiences across devices.",
    },
  ];

  const leftTextData = [
    "Swipewire Technologies",
    "Arvi Info Solutions LLP",
    "InMovidu Technologies",
  ];

  return (
    <ExperienceGsap>
      <section
        id="offering-section-main"
        className="z-60 flex min-h-screen w-full flex-col items-center justify-center bg-black py-20 lg:h-screen lg:py-12"
      >
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="w-max mx-auto border bg-gradient-to-r from-[#FF7A3A] to-[#07091A] bg-clip-text p-5 text-3xl font-semibold text-transparent md:text-[48px] animate-bounce">
            Experience
          </h2>
        </div>

        <div className="hidden w-full items-center justify-between px-14 lg:flex">
          {/* Left Text */}
          <div className="z-0 flex h-[50vh] w-full flex-col justify-center md:mb-auto md:min-w-lg md:text-left">
            {leftTextData?.map((text, index) => (
              <React.Fragment key={index}>
                <span
                  key={index}
                  className="offering-span max-w-3/4 border-b-2 border-black py-4 text-[22px] text-white/60 transition-all duration-300"
                >
                  {text}
                </span>
                <br />
              </React.Fragment>
            ))}
          </div>

          {/* Right Cards */}
          <div
            className="z-10 flex w-full flex-col items-center md:mt-10"
            style={{
              WebkitMaskImage: `
    linear-gradient(to left, transparent, black var(--mask-stop, 10%)),
    linear-gradient(to right, transparent, black var(--mask-stop, 4%))
  `,
              WebkitMaskComposite: "destination-in",
              maskComposite: "intersect",
            }}
          >
            <div className="relative h-[50vh] w-full overflow-hidden">
              <div
                id="cards-container"
                className="flex h-full items-center gap-x-10"
              >
                {commandData.map((card) => (
                  <HolographicCard key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex w-full flex-col gap-8 px-6 pb-20 mt-8 lg:hidden">
          {commandData.map((card, index) => (
            <div
              key={card.id}
              className="mobile-card relative flex w-full flex-col justify-between rounded-2xl border border-white/20 p-6 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 13, 14, 0.95) 0%, rgba(255,140,66,0.8) 30%, rgba(106,90,205,0.7) 70%, rgba(13, 13, 14, 0.95) 100%)",
              }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-purple-400">
                  {leftTextData[index]}
                </span>
                <h3 className="text-xl font-semibold tracking-wide text-white">
                  {card.designation}
                </h3>
                <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                  {card.period}
                </span>
              </div>
              <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className="text-sm leading-relaxed font-light text-white/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ExperienceGsap>
  );
};

export default Experience;
