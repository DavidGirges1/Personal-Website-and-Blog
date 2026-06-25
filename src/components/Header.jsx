export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 mx-6px">
      {/* Updated colors, blur depth, and borders to mimic iOS */}
      <div className="bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex justify-between items-center max-w-7xl mx-auto py-4 px-6 rounded-full mt-5">
        <h1 className="text-xl font-bold text-white">David Girgis</h1>

        <nav className="hidden md:flex flex-wrap items-center justify-between gap-4 text-white/70">
          <a className="text-md hover:text-white transition-colors" href="#">
            Home
          </a>
          <a className="text-md hover:text-white transition-colors" href="#">
            Skills
          </a>
          <a className="text-md hover:text-white transition-colors" href="#">
            Projects
          </a>
          <a className="text-md hover:text-white transition-colors" href="#">
            Blogs
          </a>
        </nav>

        <button className="text-blue-400 px-3 py-2 text-lg">Download CV</button>
      </div>
    </header>
  );
}
