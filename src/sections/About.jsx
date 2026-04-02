import SectionTitle from "../components/SectionTitle";

export default function About({ theme, darkMode }) {
  const cards = [
    ["Project Screenshot", "Finance dashboard, auth flow, reports, and admin modules can be showcased here."],
    ["Deployment Work", "Add screenshots from Vercel, Render, AWS, or Linux server setups here."],
    ["GitHub Proof", "Pin your best repositories with README, screenshots, and live demo links."]
  ];

  return (
    <section id="about" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-8 md:px-10 lg:px-12">
      {/* <div className="mb-8 grid gap-6 md:grid-cols-3">
        {cards.map(([title, desc]) => (
          <div key={title} className={`rounded-[24px] border p-5 ${theme.card}`}>
            <div className={`mb-4 flex h-36 items-center justify-center rounded-2xl border border-dashed ${darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-300 bg-slate-50"}`}>
              <span className={`text-sm ${theme.muted}`}>Add screenshot here</span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className={`mt-2 text-sm leading-6 ${theme.text}`}>{desc}</p>
          </div>
        ))}
      </div> */}

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <SectionTitle title="About Me" subtitle="A quick summary of my background and focus." />
        </div>

        <div className={`md:col-span-2 rounded-[28px] border p-8 ${theme.card}`}>
          <p className="text-base leading-8 text-slate-300">
            I have a strong background in Linux system administration and DevOps, along with hands-on full-stack development experience using the MERN stack. My work includes developing authentication systems, dashboard applications, REST APIs, admin modules, and finance management tools. I also have practical experience with AWS, Terraform, Docker, web servers, databases, monitoring, and production troubleshooting.
          </p>
        </div>
      </div>
    </section>
  );
}