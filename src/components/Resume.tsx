export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-[#0f1a20]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Resume</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-[#1d9e75] mb-6 uppercase tracking-wide text-sm">Experience</h3>
            <div className="space-y-6">
              {[
                { role: "Cloud Operations Engineer", company: "AWS Study Group VN", period: "2023 – Present", desc: "Managed AWS infrastructure for production workloads, implemented IaC with Terraform." },
                { role: "DevOps Engineer", company: "Company B", period: "2022 – 2023", desc: "Built CI/CD pipelines with GitHub Actions and deployed containerized apps on ECS." },
              ].map((e) => (
                <div key={e.role} className="border-l-2 border-[#1d9e75]/40 pl-4">
                  <p className="font-semibold text-slate-100">{e.role}</p>
                  <p className="text-sm text-[#38c8e8]">{e.company} · {e.period}</p>
                  <p className="text-sm text-slate-400 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#1d9e75] mb-6 uppercase tracking-wide text-sm">Education</h3>
            <div className="space-y-6">
              {[
                { degree: "B.Sc. Information Technology", school: "University Name", period: "2018 – 2022", desc: "Focus on networking and software engineering." },
              ].map((e) => (
                <div key={e.degree} className="border-l-2 border-[#1d9e75]/40 pl-4">
                  <p className="font-semibold text-slate-100">{e.degree}</p>
                  <p className="text-sm text-[#38c8e8]">{e.school} · {e.period}</p>
                  <p className="text-sm text-slate-400 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d9e75] hover:bg-[#178763] text-white rounded-lg font-medium transition-colors shadow-lg shadow-[#1d9e75]/30"
          >
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
