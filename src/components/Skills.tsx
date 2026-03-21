const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "CI/CD"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((s) => (
          <div key={s.category}>
            <h3 className="font-semibold text-gray-700 mb-4">{s.category}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
