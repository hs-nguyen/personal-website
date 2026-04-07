export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f1a20]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-100 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover shadow-lg ring-4 ring-[#1d9e75]/30 flex-shrink-0"
          />
          <div className="text-slate-400 space-y-4 max-w-xl">
            <p>
              I'm a Cloud Engineer specializing in AWS infrastructure. I love building
              reliable, scalable systems — from serverless APIs to full Kubernetes deployments.
            </p>
            <p>
              When I'm not architecting cloud solutions, I write technical articles on Hashnode
              and contribute to open-source DevOps tooling.
            </p>
            <div className="flex gap-8 text-sm font-medium pt-2">
              <div><span className="text-2xl font-bold text-[#1d9e75]">2</span><br />AWS Certs</div>
              {/* <div><span className="text-2xl font-bold text-[#1d9e75]">5+</span><br />Projects</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
