export default function Navbar() {
  const links = ["Home", "Projects"];
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-bold text-lg text-white">My Portfolio</span>
        <ul className="flex gap-6 text-sm font-medium text-slate-400">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
