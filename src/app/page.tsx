import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Pin from "@/components/Pin/Pin";

const About = dynamic(() => import("@/components/About/About"));
const Experience = dynamic(() => import("@/components/Experience/Experience"));
const Skills = dynamic(() => import("@/components/Skills/Skills"));
const Contact = dynamic(() => import("@/components/Contact/Contact"));
export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#121212]">
      <Header />

      {/* 1. Sequence Animation Hero */}
      <ScrollyCanvas />

      {/* 4. About Grid */}
      <About />

      {/* 2. Experience Section */}
      <Experience />
      {/* <Pin /> */}

      {/* 3. Technical Skills Section */}
      <Skills />


      {/* 5. Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-500 text-xs border-t border-white/5 bg-[#121212] tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Jeevan Rebeiro. All rights reserved.</p>
      </footer>
    </main>
  );
}
