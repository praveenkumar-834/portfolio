import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects, theme, darkMode }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <SectionTitle title="Featured Projects" subtitle="Selected work across MERN development and cloud operations." />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} theme={theme} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}