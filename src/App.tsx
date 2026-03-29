import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Home />
      </main>
      <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-800 bg-slate-900">
        © {new Date().getFullYear()} Nguyen Huu Sang. All rights reserved.
      </footer>
    </>
  );
}
