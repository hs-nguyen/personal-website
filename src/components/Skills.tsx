const skills = [
  { category: "Cloud & Infrastructure", items: ["AWS", "Terraform"] },
  { category: "Virtualization", items: ["Docker","ECS"] },
  { category: "CI/CD & DevOps", items: ["GitHub Actions", "CodePipeline", "Linux", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#090d12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-100 text-center">Tech Stacks and Development Language</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((s) => (
            <div key={s.category} className="bg-[#0f1a20] border border-[#1a2e38] rounded-xl p-6">
              <h3 className="font-semibold text-[#1d9e75] mb-4 text-sm uppercase tracking-wider">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-[#090d12] border border-[#1a2e38] text-slate-300 rounded-lg text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
