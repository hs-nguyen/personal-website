import { useState } from "react";

type Project = {
  initial: string;
  color: string;
  category: string;
  featured?: boolean;
  title: string;
  desc: string;
  stats?: { value: string; label: string }[];
  tags: string[];
  code: string;
  repo?: string;
};

const projects: Project[] = [
  {
    initial: "B",
    color: "from-blue-500 to-cyan-400",
    category: "Container",
    featured: true,
    title: "Fullstack Ecommerce Bookshop App on AWS",
    desc: "Automated pneumonia detection from chest X-rays using deep learning. Achieved 95.21% accuracy with CNN architecture.",
    // stats: [
    //   { value: "95.21%", label: "Accuracy" },
    //   { value: "5,840", label: "Images" },
    // ],
    tags: ["Terraform", "AWS", "GitHub Actions"],
    code: "https://workshops.hsnguyenaws.me",
    repo: "https://github.com/hs-nguyen/bookshop-ecommerce",
  },
  
];

export default function Projects() {
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const toggleSave = (title: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#090d12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-slate-100 text-center">Personal Projects✍</h2>
        {/* <p className="text-slate-400 mb-10">Cloud infrastructure</p> */}

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} saved={saved.has(p.title)} onSave={() => toggleSave(p.title)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, saved, onSave }: { project: Project; saved: boolean; onSave: () => void }) {
  return (
    <div className="project-card group relative bg-[#0f1a20] border border-[#1a2e38] rounded-xl p-5 flex flex-col gap-3 hover:border-[#1d9e75]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center font-bold text-sm text-white shadow-sm`}>
            {p.initial}
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#0a2e38] text-[#38c8e8] border border-[#38c8e8]/30">
            {p.category}
          </span>
          {p.featured && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#3d2a0a]/60 text-[#ef9f27] border border-[#ef9f27]/30">
              Featured
            </span>
          )}
        </div>
        <button
          onClick={onSave}
          className={`p-1.5 rounded-md transition-colors ${saved ? "text-[#1d9e75]" : "text-slate-600 hover:text-slate-400"}`}
          aria-label="Save project"
        >
          <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Title & desc */}
      <div>
        <h3 className="font-semibold text-slate-100 text-base leading-snug mb-1">{p.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{p.desc}</p>
      </div>

      {/* Stats */}
      {p.stats && p.stats.length > 0 && (
        <div className="flex gap-4">
          {p.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[#38c8e8] font-bold text-sm">{s.value}</div>
              <div className="text-slate-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-[#090d12] text-slate-400 border border-[#1a2e38]">
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-1 mt-auto flex gap-2 flex-wrap">
        <a
          href={p.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#38c8e8] border border-[#1a2e38] hover:border-[#1d9e75]/50 px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View on workshops
          <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#1d9e75] border border-[#1a2e38] hover:border-[#1d9e75]/50 px-3 py-1.5 rounded-lg transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Source code
          </a>
        )}
      </div>
      
    </div>
  );
}
