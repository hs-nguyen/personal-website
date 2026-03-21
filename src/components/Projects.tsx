const projects = [
  {
    title: "My Production Ready Containerized Three-Tier Web Application",
    desc: "Event-driven REST API using AWS Lambda, API Gateway, and DynamoDB with full IaC via Terraform.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Terraform"],
    demo: "https://www.hsnguyenaws.me",
    code: "https://github.com/hs-nguyen/hashnode-blogs",
  },
  {
    title: "Kubernetes on EKS",
    desc: "Production-grade EKS cluster with auto-scaling, Helm charts, and GitOps deployment via ArgoCD.",
    tags: ["EKS", "Kubernetes", "Helm", "ArgoCD"],
    demo: "#",
    code: "#",
  },
  {
    title: "CI/CD Pipeline",
    desc: "End-to-end pipeline with GitHub Actions, Docker, ECR, and automated blue/green deployments to ECS.",
    tags: ["GitHub Actions", "Docker", "ECR", "ECS"],
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Projects</h2>
        <p className="text-slate-400 mb-10">Cloud infrastructure and DevOps work</p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col gap-3 hover:border-indigo-500/50 transition-colors">
              <h3 className="font-semibold text-lg text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-indigo-950 text-indigo-400 px-2 py-1 rounded-full border border-indigo-800">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium pt-1">
                <a href={p.demo} className="text-indigo-400 hover:underline">Live Demo</a>
                <a href={p.code} className="text-slate-400 hover:underline">Source</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
