import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="bg-[#0d1117] text-white">
      <Navbar />
      <main className="pt-14">
        <Home />
        <About />
        {/* <Skills /> */}
        <Projects />
        {/* <Resume /> */}
        <Connect />
      </main>
      <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-800 bg-[#0d1117]">
        © {new Date().getFullYear()} Nguyen Huu Sang. All rights reserved.
      </footer>
    </div>
  );
}
