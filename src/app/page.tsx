import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
// import Projects from "@/components/About";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Pin from "@/components/Pin/Pin"
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
      {/* <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#121212]">
        <p>© {new Date().getFullYear()} Jeevan Rebeiro. All rights reserved.</p>
      </footer> */}
    </main>
  );
}
