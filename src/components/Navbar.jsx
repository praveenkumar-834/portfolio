import { Menu, X } from "lucide-react";

export default function Navbar({ darkMode, mobileMenuOpen, setMobileMenuOpen, navLinks }) {
  return (
    <header className={`sticky top-0 z-30 backdrop-blur ${darkMode ? "bg-slate-950/60" : "bg-white/70"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <a href="#top" className="text-lg font-bold tracking-wide">PKR Portfolio</a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white md:inline-block">
            Hire Me
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-xl border p-2 md:hidden ${darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`border-t px-6 py-4 md:hidden ${darkMode ? "border-white/10 bg-slate-950/95" : "border-slate-200 bg-white"}`}>
          <div className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}