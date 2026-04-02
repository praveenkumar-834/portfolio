import { Moon, Sun, Mail, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ darkMode, setDarkMode, theme, contact, counts }) {
  return (
    <section className={`relative overflow-hidden border-b ${darkMode ? "border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" : "border-slate-200 bg-gradient-to-br from-white via-slate-100 to-blue-100"}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-12 h-32 w-32 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 flex items-center justify-between">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${darkMode ? "border-white/10 bg-white/5 text-slate-200" : "border-slate-200 bg-white text-slate-700"}`}>
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-2xl border p-3 transition ${darkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-white hover:bg-slate-50"}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">
              MERN Stack Developer • Linux & DevOps Background
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Praveen Kumar <span className="text-blue-400">Ramamoorthy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              MERN Stack Developer with strong System Administration and DevOps experience. I build full-stack web applications with React, Node.js, Express, and MongoDB, and I also bring hands-on expertise in Linux servers, AWS, automation, and deployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:scale-105">
                View Projects
              </a>

              <a
                href={contact.resume}
                className={`inline-flex items-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition ${darkMode ? "border-white/15 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition ${darkMode ? "border-white/15 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition ${darkMode ? "border-white/15 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <a href="#about" className={`mt-8 inline-flex items-center gap-2 text-sm ${theme.text}`}>
              Scroll to explore <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className={`rounded-[28px] border p-6 shadow-2xl backdrop-blur ${theme.card}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Experience", `${counts.experience}+ Years`],
                  ["Projects", `${counts.projects}+ Built`],
                  ["Skills", `${counts.skills}+ Tools`],
                  ["Cloud", `${counts.cloud}+ Areas`]
                ].map(([label, value]) => (
                  <div key={label} className={`rounded-2xl border p-4 ${theme.card} ${theme.soft}`}>
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className={`mt-6 rounded-2xl border p-5 ${darkMode ? "border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10" : "border-slate-200 bg-gradient-to-r from-blue-100 to-purple-100"}`}>
                <p className="text-sm text-slate-300">Current Goal</p>
                <h3 className="mt-2 text-xl font-semibold">MERN Stack / DevOps Opportunities</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Looking to contribute to modern web applications and cloud-driven projects with practical problem-solving, deployment, and infrastructure skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}