import { useState, FormEvent } from "react";

export default function Connect() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="connect" className="py-24 px-6 bg-[#090d12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-slate-100 text-center">Let's Connect</h2>
        <p className="text-slate-400 mb-10 text-center">Have a project in mind or just want to say hi? Drop me a message.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            {sent ? (
              <div className="p-4 bg-[#0d3d2e] text-[#1d9e75] rounded-lg border border-[#1d9e75]/40">Thanks! I'll get back to you soon.</div>
            ) : (
              <>
                <input required type="text" placeholder="Your Name" className="w-full bg-[#0f1a20] border border-[#1a2e38] rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d9e75]" />
                <input required type="email" placeholder="Your Email" className="w-full bg-[#0f1a20] border border-[#1a2e38] rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d9e75]" />
                <textarea required rows={4} placeholder="Your Message" className="w-full bg-[#0f1a20] border border-[#1a2e38] rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1d9e75] resize-none" />
                <button type="submit" className="px-6 py-3 bg-[#1d9e75] hover:bg-[#178763] text-white rounded-lg font-medium transition-colors shadow-lg shadow-[#1d9e75]/30">
                  Send Message
                </button>
              </>
            )}
          </form>
          <div className="space-y-4 text-sm text-slate-400">
            <p className="font-semibold text-slate-200">Or find me on</p>
            <div className="flex gap-4 pt-1">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/hs-nguyen?tab=repositories",
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/nguyensangscom/",
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  label: "Blog",
                  href: "https://hsnguyen.hashnode.dev",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
                },
                {
                  label: "Email",
                  href: "mailto:huusangnguyen092@gmail.com",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={l.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f1a20] border border-[#1a2e38] text-slate-400 hover:text-[#1d9e75] hover:border-[#1d9e75]/50 transition-all hover:scale-110"
                >
                  {l.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
