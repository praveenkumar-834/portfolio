import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

export default function Skills({ skills, skillProgress, theme, darkMode }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <SectionTitle title="Technical Skills" subtitle="Frontend, backend, DevOps, and tools I work with." />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <SkillCard key={group} group={group} items={items} theme={theme} darkMode={darkMode} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className={`rounded-[28px] border p-6 ${theme.card}`}>
          <h3 className="mb-6 text-2xl font-semibold">Skill Strength</h3>
          <div className="space-y-5">
            {skillProgress.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className={theme.muted}>{skill.value}%</span>
                </div>
                <div className={`h-3 w-full overflow-hidden rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-200"}`}>
                  <div className="h-3 rounded-full bg-blue-500" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[28px] border p-6 ${theme.card}`}>
          <h3 className="mb-6 text-2xl font-semibold">What I Bring</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Full-stack MERN application development",
              "Authentication and role-based systems",
              "Linux server administration and troubleshooting",
              "AWS deployment and DevOps support",
              "API integration and debugging",
              "Production issue fixing and maintenance"
            ].map((item) => (
              <div key={item} className={`rounded-2xl border p-4 ${darkMode ? "border-white/10 bg-slate-900/60" : "border-slate-200 bg-slate-50"}`}>
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}