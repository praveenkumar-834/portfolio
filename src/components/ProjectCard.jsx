import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, theme, darkMode }) {
  return (
    <div className={`overflow-hidden rounded-[28px] border shadow-xl ${theme.card}`}>
      <div className={`h-48 overflow-hidden border-b ${darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"}`}>
        <img src={project.image} alt={project.imageLabel} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <p className="text-sm text-blue-300">{project.stack}</p>
        <div className="flex items-start justify-between gap-4">
          <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          <a href="#contact" className={`inline-flex items-center gap-1 text-sm ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
            View more <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.desc}</p>

        <ul className="mt-5 space-y-3 text-sm text-slate-200">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.demo} className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className={`rounded-xl border px-4 py-2 text-sm font-semibold ${darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}