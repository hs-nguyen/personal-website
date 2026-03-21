export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">About Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img
          src="https://placehold.co/200x200"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow"
        />
        <div className="text-gray-600 space-y-4 max-w-xl">
          <p>
            I'm a passionate developer with experience building modern web applications.
            I love turning complex problems into simple, beautiful solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open source, or enjoying a good cup of coffee.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-800 pt-2">
            <div><span className="text-2xl font-bold text-indigo-600">3+</span><br />Years Exp.</div>
            <div><span className="text-2xl font-bold text-indigo-600">20+</span><br />Projects</div>
            <div><span className="text-2xl font-bold text-indigo-600">10+</span><br />Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
