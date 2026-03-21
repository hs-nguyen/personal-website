import { useState, FormEvent } from "react";

export default function Connect() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="connect" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Let's Connect</h2>
      <p className="text-gray-500 mb-10">Have a project in mind or just want to say hi? Drop me a message.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          {sent ? (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg">Thanks! I'll get back to you soon.</div>
          ) : (
            <>
              <input required type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <input required type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <textarea required rows={4} placeholder="Your Message" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none" />
              <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </>
          )}
        </form>
        <div className="space-y-4 text-sm text-gray-600">
          <p className="font-semibold text-gray-800">Or find me on</p>
          {[
            { label: "GitHub", href: "https://github.com/yourusername" },
            { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
            { label: "Twitter / X", href: "https://twitter.com/yourusername" },
            { label: "Email", href: "mailto:you@example.com" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              → {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
