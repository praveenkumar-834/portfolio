export default function SkillCard({ group, items, theme, darkMode }) {
  return (
    <div className={`rounded-[28px] border p-6 ${theme.card}`}>
      <h3 className="mb-4 text-xl font-semibold capitalize text-blue-400">{group}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-1 text-sm ${darkMode ? "border-white/10 bg-slate-900 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}