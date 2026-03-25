import React from "react";
import Image from "next/image";
import SkillGsap from "./SkillGsap";
import outsideLine from "./_assets/outsideline.svg";
import insideLine from "./_assets/linsideline.svg";
import ai from "./_assets/1.png"
import backend from "./_assets/2.png"
import fr from "./_assets/3.png"
import tool from "./_assets/4.png"
import SkillSwipper from "./SkillSwipper";

const Skills = () => {
  const data = [
    {
      id: 1,
      title: "Frontend",
      cards: [

        { id: 11, title: "React.js, Next.js", color: 'bg-gradient-to-r from-blue-500 to-purple-600' },

        { id: 12, title: "Redux Toolkit,React Query", color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },

        { id: 13, title: "Tailwind CSS, ShadCN, Material UI, Bootstrap", color: 'bg-gradient-to-r from-indigo-500 to-violet-600' },

        { id: 14, title: "HTML5, JavaScript, TypeScript, CSS3", color: 'bg-gradient-to-r from-red-500 to-orange-400' },

        { id: 15, title: "GSAP, SAAS, React Three Fiber, SEO", color: 'bg-gradient-to-r from-pink-500 to-rose-400' },

      ],
      img: fr
    },
    {
      id: 2,
      title: "Backend",
      cards: [

        { id: 21, title: "Node.js", color: 'bg-gradient-to-r from-blue-500 to-purple-600' },

        { id: 22, title: "Sql", color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },

        { id: 23, title: "FireBase", color: 'bg-gradient-to-r from-indigo-500 to-violet-600' },

        { id: 24, title: "WebSocket", color: 'bg-gradient-to-r from-red-500 to-orange-400' },

        { id: 25, title: "Express.js", color: 'bg-gradient-to-r from-pink-500 to-rose-400' }

      ],
      img: backend
    },
    {
      id: 3,
      title: "Tools",
      cards: [

        { id: 31, title: "Git, GitHub", color: 'bg-gradient-to-r from-blue-500 to-purple-600' },

        { id: 32, title: "Jira, BitBucket", color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },

        { id: 33, title: "Postman", color: 'bg-gradient-to-r from-indigo-500 to-violet-600' },

        { id: 34, title: "Docker", color: 'bg-gradient-to-r from-red-500 to-orange-400' },

        { id: 35, title: "CI/CD", color: 'bg-gradient-to-r from-pink-500 to-rose-400' },

      ],
      img: tool
    },
    {
      id: 4,
      title: "AI Tools",
      cards: [
        { id: 41, title: "OpenAI", color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
        { id: 42, title: "Cursor", color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },
        { id: 43, title: "Claude", color: 'bg-gradient-to-r from-indigo-500 to-violet-600' },
        { id: 44, title: "Gemini, chatgpt", color: 'bg-gradient-to-r from-red-500 to-orange-400' },
        { id: 45, title: "Antigravity", color: 'bg-gradient-to-r from-pink-500 to-rose-400' },
      ],
      img: ai
    },
  ];

  return (
    <>
      <SkillGsap>
        {/* 
        ✅ Kept: hidden lg:block — mobile uses a separate swiper component
        ✅ Kept: h-screen, overflow-clip, overflow-x-hidden — matches original
        ✅ Kept: flex + items-center justify-center layout
      */}
        <section
          id="complete-banking-section"
          className="hidden z-60 h-screen w-full items-center justify-center overflow-clip overflow-x-hidden bg-black text-white lg:block"
        >
          <div className="text-center sm:mb-12">
            <h1 className="inline-block bg-gradient-to-r from-[#FF7A3A] to-[#07091A] mt-4 bg-clip-text text-3xl font-semibold text-transparent md:text-[48px]">
              Technical Skills
            </h1>
          </div>

          {/* 
          ✅ Kept: ml-0 xl:ml-20, scale-90 xl:scale-100
          ✅ Kept: original mask + background style
          ✅ Fixed: proper closing paren on url() — was the only real bug here
        */}
          <section
            style={{
              WebkitMaskImage: `
              linear-gradient(to left, transparent, black var(--mask-stop, 8%)),
              linear-gradient(to right, transparent, black var(--mask-stop, 0%))
            `,
              WebkitMaskComposite: "destination-in",
              maskComposite: "intersect",
              background: `url(${outsideLine.src}) center/contain no-repeat`,
            }}
            className="ml-0 h-[701px] w-[1248px] scale-90 overflow-clip rounded-2xl lg:ml-0 xl:ml-20 xl:scale-100"
          >
            {/* Tabs */}
            <div className="relative flex w-full">
              <Image
                src={insideLine.src}
                width={2073}
                height={72}
                id="tab-line"
                className="absolute max-w-[2250px] -translate-x-[913px] translate-y-[0px]"
                alt="cardTab"
              />

              {/* Window dots */}
              <div className="flex h-[70px] w-[148px] items-center justify-center gap-3">
                <div className="flex items-center justify-center size-[22px]  text-[#59595b] text-2xl">
                  −
                </div>
                <div className="flex items-center justify-center size-[22px] text-[#59595b] text-2xl">
                  □
                </div>
                <div className="flex items-center justify-center size-[22px] text-[#59595b] text-2xl">
                  ×
                </div>
              </div>

              {/* Tab labels */}
              {data.map((elem) => (
                <div
                  key={elem.id}
                  style={{ width: `${1100 / data.length}px` } as React.CSSProperties}
                  id={`tab-index-${elem.id}`}
                  className="flex h-[70px] items-center justify-center text-[#59595b]"
                >
                  {elem.title}
                </div>
              ))}
            </div>

            {/* Screen container */}
            {/* ✅ CSS variable on style needs a cast in TSX */}
            <div
              style={{ width: `${1248 * data.length}px` }}
              className="flex"
            >
              {data.map((elem) => (
                <div
                  key={elem.id}
                  style={{ height: `${621 - 70}px` }}
                  className="tab-screen relative flex w-[1248px] items-center justify-center gap-20"
                >
                  {/* Glow blob */}
                  <div className="absolute top-[20%] left-[20%] h-[62%] w-[80%] rounded-full bg-gradient-to-r from-[#FF7A3A] to-[#07091A] opacity-60 blur-3xl" />

                  {/* Watermark title */}
                  <h2 className="absolute top-[10%] left-[10%] text-[150px] leading-[150px] font-bold text-[#79797996]/50 select-none animate-pulse">
                    {elem.title}
                  </h2>

                  {/* Cards */}
                  <div className="relative h-[420px] w-[900px] mt-10 overflow-clip rounded-2xl">
                    <Image
                      src={elem.img}
                      alt={elem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </SkillGsap>
      <SkillSwipper data={data} />
    </>
  );
};

export default Skills;