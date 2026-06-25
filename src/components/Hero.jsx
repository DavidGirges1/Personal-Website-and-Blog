export default function Hero() {
  return (
    <section className="h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-8 text-center px-4">
        {/* Name Heading */}
        <h1 className="text-7xl font-extrabold text-white tracking-tight">
          David Girgis
        </h1>

        <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
          Full Stack Developer <span className="text-blue-500 mx-2">||</span>{" "}
          Growing in ML & DL
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 font-semibold">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 w-44">
            Download CV
          </button>
          <button className="px-6 py-3 border border-slate-700 text-slate-200 bg-slate-800/50 rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all transform hover:-translate-y-0.5 w-44">
            View Blogs
          </button>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://github.com/DavidGirges1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300 shadow-xl"
          >
            <svg
              className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-[#0077B5] hover:border-[#0077B5]/50 hover:bg-slate-700/50 transition-all duration-300 shadow-xl"
          >
            <svg
              className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:your-email@gmail.com"
            aria-label="Email Me"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:bg-slate-700/50 transition-all duration-300 shadow-xl"
          >
            <svg
              className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.38l-9 5.65-9-5.65V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.42.17-.8.45-1.1s.68-.4 1.05-.4L12 9l10.5-6c.37 0 .77.1 1.05 $.4.28.3.45.68.45 1.1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
