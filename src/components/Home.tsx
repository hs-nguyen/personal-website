const certs = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    img: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    href: "https://www.credly.com/earner/earned/badge/ac543051-df48-4015-8dd6-5057ba1fd99b",
  },
  {
    name: "AWS Certified CloudOps Engineer - Associate",
    img: "/cloudops-badge.png",
    href: "https://www.credly.com/earner/earned/badge/f5f588f0-e04f-4f90-8415-42cd9f4d05f7",
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nguyensangscom/", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "GitHub", href: "https://github.com/hs-nguyen?tab=repositories", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "Email", href: "mailto:huusangnguyen092@gmail.com", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  { label: "Blog", href: "https://hsnguyen.hashnode.dev", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
  
];

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#090d12] px-6 text-center relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#0d3d2e] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0a2e38] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-[#3d2a0a] opacity-30 blur-3xl pointer-events-none" />

      <img
        src="/avatar.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover shadow-lg mb-6 ring-4 ring-[#1d9e75]/40 animate-float relative z-10"
      />
      <h1 className="text-4xl lg:text-6xl font-bold mb-3 animate-fade-up relative z-10"
        style={{ background: "linear-gradient(to right, #1d9e75, #38c8e8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        Nguyễn Hữu Sáng
      </h1>
      <p className="text-xl text-[#38c8e8] mb-4 animate-fade-up delay-100 relative z-10">Cloud Operations Engineer</p>
      <p className="text-slate-400 max-w-xl mb-8 animate-fade-up delay-200 relative z-10">
        I design and build scalable cloud infrastructure on AWS — serverless architectures,
        container orchestration, CI/CD pipelines, and infrastructure as code.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 mb-10 animate-fade-up delay-300 relative z-10">
        <a href="#projects" className="px-6 py-3 bg-[#1d9e75] hover:bg-[#17876300] text-white rounded-lg font-medium transition-all shadow-lg shadow-[#1d9e75]/30 hover:shadow-[#1d9e75]/50 border border-[#1d9e75]">
          View My Projects
        </a>
        <a href="#connect" className="px-6 py-3 border border-[#1a2e38] hover:border-[#1d9e75]/60 text-slate-400 hover:text-[#38c8e8] rounded-lg font-medium transition-colors">
          Get in Touch
        </a>
      </div>

      {/* Certs */}
      <div className="flex gap-4 mb-8 animate-fade-up delay-400 relative z-10">
        {certs.map((c) => (
          <a key={c.name} href={c.href} target="_blank" rel="noreferrer" title={c.name} className="hover:scale-110 transition-transform">
            <img src={c.img} alt={c.name} className="w-20 h-20 drop-shadow-lg" />
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="flex gap-5 animate-fade-up delay-500 relative z-10">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
            className="text-slate-500 hover:text-[#1d9e75] transition-all hover:scale-110">
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
