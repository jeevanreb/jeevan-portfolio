"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] lg:w-[50%] z-50">
      <header className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-6 flex justify-between items-center shadow-2xl">

        {/* Favicon / Logo */}
        <div className="flex items-center hidden md:block">
          <Image
            src="/jeev.jpg"
            alt="Jeevan Rebeiro"
            width={34}
            height={34}
            priority
            className="rounded-full object-cover border border-white/20"
          />
        </div>

        {/* Nav links */}
        <nav className="flex gap-5 md:gap-8 text-sm font-medium text-gray-300 tracking-wide items-center">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("experience")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="hover:text-white transition-colors cursor-pointer hidden md:block"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>

          {/* Download Resume button */}
          <a
            href="/jeevan_rebeiro_sde_resume.pdf"
            download="Jeevan_Rebeiro_Resume.pdf"
            className="flex items-center gap-1.5 bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-white/85 transition-all"
          >
            {/* Download icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </nav>
      </header>
    </div>
  );
}
