export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Resume / CV</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-gray-700 mb-6 uppercase tracking-wide text-sm">Experience</h3>
            <div className="space-y-6">
              {[
                { role: "Senior Frontend Developer", company: "Company A", period: "2023 – Present", desc: "Led UI development for a SaaS platform serving 50k+ users." },
                { role: "Full-Stack Developer", company: "Company B", period: "2021 – 2023", desc: "Built and maintained REST APIs and React dashboards." },
              ].map((e) => (
                <div key={e.role} className="border-l-2 border-indigo-200 pl-4">
                  <p className="font-semibold text-gray-900">{e.role}</p>
                  <p className="text-sm text-indigo-600">{e.company} · {e.period}</p>
                  <p className="text-sm text-gray-500 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-6 uppercase tracking-wide text-sm">Education</h3>
            <div className="space-y-6">
              {[
                { degree: "B.Sc. Computer Science", school: "University Name", period: "2017 – 2021", desc: "Graduated with honors. Focus on software engineering." },
              ].map((e) => (
                <div key={e.degree} className="border-l-2 border-indigo-200 pl-4">
                  <p className="font-semibold text-gray-900">{e.degree}</p>
                  <p className="text-sm text-indigo-600">{e.school} · {e.period}</p>
                  <p className="text-sm text-gray-500 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
