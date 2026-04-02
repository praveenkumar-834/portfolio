export default function ExperienceCard({ item, theme, darkMode }) {
  return (
    <div className={`rounded-[28px] border p-6 ${theme.card}`}>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{item.role}</h3>
          <p className="text-slate-300">{item.company}</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-sm ${darkMode ? "border-white/10 bg-slate-900 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
          {item.period}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
    </div>
  );
}