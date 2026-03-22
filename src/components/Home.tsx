const certs = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    level: "Associate",
    img: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    href: "https://www.credly.com/earner/earned/badge/ac543051-df48-4015-8dd6-5057ba1fd99b",
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    level: "Associate",
    img: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
    href: "https://www.credly.com/earner/earned/badge/your-badge-id-here",
  },
];

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-slate-900 to-indigo-950">
      <img
        src="/avatar.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg mb-6 ring-4 ring-indigo-500/30 animate-float"
      />
      <h1 className="text-5xl font-bold text-white mb-3 animate-fade-up">
        Hi, I'm <span className="text-indigo-400">Sang</span>
      </h1>
      <p className="text-xl text-indigo-300 mb-4 animate-fade-up delay-100">Cloud Engineer</p>
      <p className="text-slate-400 max-w-xl mb-8 animate-fade-up delay-200">
        I design and build scalable cloud infrastructure on AWS — from serverless architectures
        and container orchestration to CI/CD pipelines and infrastructure as code.
      </p>

      {/* Certification Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-2xl animate-fade-up delay-300">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            title={`${c.name} · ${c.level}`}
            className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform"
          >
            <img src={c.img} alt={c.name} className="w-16 h-16 drop-shadow-lg" />
            <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">{c.name}</span>
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-8 animate-fade-up delay-400">
        <a href="https://www.linkedin.com/in/nguyensangscom/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">LinkedIn</a>
        <a href="https://github.com/hs-nguyen?tab=repositories" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">GitHub</a>
        <a href="mailto:huusangnguyen092@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Gmail</a>
        <a href="https://hs-nguyen.hashnode.dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Blogs</a>
        <a href="https://workshop.cloud-sangnguyen.click" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Workshops</a>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 animate-fade-up delay-500">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors">
          View Projects
        </a>
      </div>
    </section>
  );
}
