import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience({ experience, theme, darkMode }) {
  return (
    <>
      <section id="experience" className="mx-auto max-w-6xl px-6 py-6 md:px-10 lg:px-12">
        <SectionTitle title="Experience Snapshot" subtitle="Background in Linux administration, DevOps, and full-stack development." />

        <div className="space-y-5">
          {experience.map((item) => (
            <ExperienceCard key={item.role + item.company} item={item} theme={theme} darkMode={darkMode} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:px-10 lg:px-12">
        <div className={`rounded-[28px] border p-8 ${theme.card}`}>
          <h2 className="text-3xl font-bold">Let's Build Something Strong</h2>
          <p className={`mt-3 max-w-3xl leading-7 ${theme.text}`}>
            I am looking for opportunities in MERN stack development, junior full-stack development, Linux administration, and DevOps support roles where I can contribute with both application development and infrastructure knowledge.
          </p>
        </div>
      </section>
    </>
  );
}