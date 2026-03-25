import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[40%] z-50">
      <header className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full py-3 px-8 flex justify-between items-center transition-all shadow-2xl">
        <div className="text-white font-bold text-xl tracking-tighter">
          JR
        </div>
        <nav className="flex gap-8 text-sm font-medium text-gray-300 tracking-wide">
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
      </header>
    </div>
  );
}
