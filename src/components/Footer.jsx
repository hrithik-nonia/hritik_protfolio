import { Code2, Briefcase, AtSign } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070C1A] text-slate-400 border-t border-slate-800/80 py-6 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand Name */}
        <div className="text-base font-bold tracking-tight text-white">
          Hrithik.dev
        </div>

        {/* Center: Copyright */}
        <div className="text-xs font-medium text-slate-400 text-center">
          © {currentYear} Hrithik. All rights reserved.
        </div>

        {/* Right: Icon Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors p-1"
            aria-label="GitHub Code"
          >
            <Code2 className="h-4.5 w-4.5 stroke-[2]" />
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors p-1"
            aria-label="Projects Portfolio"
          >
            <Briefcase className="h-4.5 w-4.5 stroke-[2]" />
          </a>

          <a
            href="mailto:hello@hrithik.dev"
            className="hover:text-white transition-colors p-1"
            aria-label="Email Contact"
          >
            <AtSign className="h-4.5 w-4.5 stroke-[2]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
