import { useState, useEffect } from "react";

const links = ["Home", "About", "Projects", "Skills", "Connect" ];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = links.map((l) => {
      const id = l === "Contact" ? "connect" : l.toLowerCase();
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(l.toLowerCase()); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const href = (l: string) => l === "Contact" ? "#connect" : `#${l.toLowerCase()}`;

  return (
    <>
      {/* Floating pill navbar — desktop */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-2 rounded-full bg-[#0f1a20]/90 backdrop-blur-md border border-[#1a2e38] shadow-xl shadow-black/40">

        {/* HS Logo */}
        <a href="#home" className="mr-2 flex-shrink-0">
        </a>

        {/* Nav links */}
        {links.map((l) => {
          const isActive = active === l.toLowerCase() || (l === "Contact" && active === "connect");
          return (
            <a
              key={l}
              href={href(l)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-[#1d9e75] text-white shadow-md shadow-[#1d9e75]/30"
                  : "text-slate-400 hover:text-slate-100 hover:bg-[#1a2e38]"
              }`}
            >
              {l}
            </a>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-[#1a2e38] mx-1" />

        {/* Sun / theme icon */}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-[#38c8e8] hover:bg-[#1a2e38] transition-colors"
          aria-label="Toggle theme"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        {/* Resume button */}
        {/* <a
          href="#resume"
          className="ml-1 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors shadow-md shadow-violet-900/40"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a> */}
      </nav>

      {/* Mobile navbar — full width bar */}
      <nav className="fixed top-0 w-full z-50 md:hidden bg-[#0f1a20]/95 backdrop-blur-md border-b border-[#1a2e38]">
        <div className="flex items-center justify-between px-5 h-14">
          <a href="#home">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1d9e75] to-[#38c8e8] flex items-center justify-center font-bold text-xs text-white">
              HS
            </div>
          </a>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md text-slate-400 hover:text-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="px-5 pb-4 flex flex-col gap-1 border-t border-[#1a2e38]">
            {links.map((l) => {
              const isActive = active === l.toLowerCase() || (l === "Contact" && active === "connect");
              return (
                <a
                  key={l}
                  href={href(l)}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-[#1d9e75] text-white" : "text-slate-400 hover:text-slate-100 hover:bg-[#1a2e38]"
                  }`}
                >
                  {l}
                </a>
              );
            })}
            <a
              href="#resume"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#1d9e75] hover:bg-[#17876300] border border-[#1d9e75] text-white text-sm font-semibold transition-colors"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
