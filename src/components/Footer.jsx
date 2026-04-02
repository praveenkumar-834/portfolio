import { Mail, Moon, Sun, Download, ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ darkMode, theme, contact }) {
  return (
    <footer className={`border-t px-6 py-8 ${darkMode ? "border-white/10" : "border-slate-200"}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row md:px-10 lg:px-12">
        <p className={`text-sm ${theme.muted}`}>
          © 2026 Praveen Kumar Ramamoorthy.
        </p>
        <div className="flex items-center gap-4">
          <a href={contact.github} target="_blank" rel="noreferrer"><FaGithub className="h-5 w-5" /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><FaLinkedin className="h-5 w-5" /></a>
          <a href={`mailto:${contact.email}`}><Mail className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}